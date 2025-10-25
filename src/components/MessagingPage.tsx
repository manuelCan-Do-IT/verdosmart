import { useEffect, useMemo, useRef, useState } from 'react';
import AccountHeader from './AccountHeader';
import Footer from './Footer';
import { useAuth } from './AuthProvider';
import { toast } from 'sonner';
import { MessageSquare, Paperclip, Bell, CheckCircle2 } from 'lucide-react';

type Attachment = { name: string; url: string; type: string; size: number };

type Message = {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  attachments?: Attachment[];
  created_at: string;
  read: boolean;
};

type Conversation = {
  id: string;
  title: string;
  related?: string; // order/quote reference
  unread?: boolean;
  updated_at?: string;
};

function usePersistentMessaging(userId: string | undefined) {
  const convKey = userId ? `conversations_${userId}` : undefined;
  const msgKey = userId ? `messages_${userId}` : undefined;

  const loadConversations = (): Conversation[] => {
    try {
      const raw = convKey ? localStorage.getItem(convKey) : null;
      const parsed: Conversation[] = raw ? JSON.parse(raw) : [];
      if (parsed.length > 0) return parsed;
      // Seed de démonstration
      const seed: Conversation[] = [
        { id: 'C001', title: 'Commande #1001', related: 'Kit jardinage', unread: true, updated_at: new Date().toISOString() },
        { id: 'C000', title: 'Devis #0998', related: 'Audit énergétique', unread: false, updated_at: new Date().toISOString() },
      ];
      if (convKey) localStorage.setItem(convKey, JSON.stringify(seed));
      return seed;
    } catch (_) { return []; }
  };
  const loadMessages = (): Message[] => {
    try {
      const raw = msgKey ? localStorage.getItem(msgKey) : null;
      const parsed: Message[] = raw ? JSON.parse(raw) : [];
      if (parsed.length > 0) return parsed;
      // Messages de démonstration
      const seed: Message[] = [
        { id: 'M1', conversation_id: 'C001', sender_id: 'support', content: 'Bonjour, votre commande est en préparation.', created_at: new Date().toISOString(), read: false },
        { id: 'M2', conversation_id: 'C001', sender_id: userId || 'me', content: 'Merci ! Quel est le délai estimé ?', created_at: new Date().toISOString(), read: true },
      ];
      if (msgKey) localStorage.setItem(msgKey, JSON.stringify(seed));
      return seed;
    } catch (_) { return []; }
  };

  const saveConversations = (convs: Conversation[]) => {
    if (convKey) localStorage.setItem(convKey, JSON.stringify(convs));
  };
  const saveMessages = (msgs: Message[]) => {
    if (msgKey) localStorage.setItem(msgKey, JSON.stringify(msgs));
  };

  return { loadConversations, loadMessages, saveConversations, saveMessages };
}

export default function MessagingPage() {
  const { user } = useAuth();
  const { loadConversations, loadMessages, saveConversations, saveMessages } = usePersistentMessaging(user?.id);

  const [conversations, setConversations] = useState<Conversation[]>(loadConversations());
  const [messages, setMessages] = useState<Message[]>(loadMessages());
  const [selectedId, setSelectedId] = useState<string | null>(conversations[0]?.id ?? null);
  const [input, setInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const currentMessages = useMemo(() => messages.filter(m => m.conversation_id === selectedId), [messages, selectedId]);
  const currentConversation = useMemo(() => conversations.find(c => c.id === selectedId) || null, [conversations, selectedId]);

  useEffect(() => {
    // Marque comme lu à l’ouverture
    if (!selectedId) return;
    setConversations(prev => {
      const next = prev.map(c => c.id === selectedId ? { ...c, unread: false, updated_at: new Date().toISOString() } : c);
      saveConversations(next);
      return next;
    });
    setMessages(prev => {
      const next = prev.map(m => m.conversation_id === selectedId ? { ...m, read: true } : m);
      saveMessages(next);
      return next;
    });
  }, [selectedId]);

  useEffect(() => {
    // Notification simulée de nouveau message toutes les ~60s (si une conv existe)
    const timer = setInterval(() => {
      if (!selectedId || conversations.length === 0) return;
      const incoming: Message = {
        id: `M${Date.now()}`,
        conversation_id: selectedId,
        sender_id: 'support',
        content: 'Nouveau message automatique — ceci est une notification de test.',
        created_at: new Date().toISOString(),
        read: false,
      };
      setMessages(prev => {
        const next = [ ...prev, incoming ];
        saveMessages(next);
        return next;
      });
      setConversations(prev => {
        const next = prev.map(c => c.id === selectedId ? { ...c, unread: true, updated_at: new Date().toISOString() } : c);
        saveConversations(next);
        return next;
      });
      toast.info('Nouveau message reçu');
    }, 60000);
    return () => clearInterval(timer);
  }, [selectedId, conversations.length]);

  const triggerAttach = () => fileInputRef.current?.click();
  const onFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setAttachedFiles(files);
  };

  const onSend = () => {
    if (!input.trim() && attachedFiles.length === 0) {
      toast.error('Entrez un message ou joignez un fichier');
      return;
    }
    if (!selectedId) {
      toast.error('Aucune conversation sélectionnée');
      return;
    }
    const atts: Attachment[] = attachedFiles.map(f => ({ name: f.name, type: f.type, size: f.size, url: URL.createObjectURL(f) }));
    const outgoing: Message = {
      id: `M${Date.now()}`,
      conversation_id: selectedId,
      sender_id: user?.id || 'me',
      content: input.trim(),
      attachments: atts,
      created_at: new Date().toISOString(),
      read: true,
    };
    setMessages(prev => {
      const next = [ ...prev, outgoing ];
      saveMessages(next);
      return next;
    });
    setConversations(prev => {
      const next = prev.map(c => c.id === selectedId ? { ...c, updated_at: new Date().toISOString() } : c);
      saveConversations(next);
      return next;
    });
    setInput('');
    setAttachedFiles([]);
    toast.success('Message envoyé');
  };

  const markConversationUnread = (id: string) => {
    setConversations(prev => {
      const next = prev.map(c => c.id === id ? { ...c, unread: true } : c);
      saveConversations(next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-0 transition-colors duration-300">
      <AccountHeader backHref="#mon-compte/tableau-de-bord" backLabel="Mon compte" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12">
        {/* Conversations */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Conversations</h2>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Bell className="h-5 w-5" />
              <span className="text-sm">Notifications actives</span>
            </div>
          </div>
          {conversations.length === 0 ? (
            <div className="mt-4 text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Aucune conversation. Contactez un vendeur depuis une commande.</div>
          ) : (
            <ul className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
              {conversations.map((c) => (
                <li key={c.id} className={`py-3 cursor-pointer ${selectedId===c.id ? 'bg-emerald-50 dark:bg-emerald-900/20 rounded-xl px-3' : ''}`} onClick={() => setSelectedId(c.id)}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200 font-['Inter',_sans-serif]">{c.title}</div>
                      {c.related && <div className="text-sm text-gray-500">{c.related}</div>}
                      {c.updated_at && <div className="text-xs text-gray-400">Mis à jour: {new Date(c.updated_at).toLocaleString()}</div>}
                    </div>
                    <div className="flex items-center gap-2">
                      {c.unread && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Non lu</span>}
                      <button onClick={(e)=>{e.stopPropagation(); markConversationUnread(c.id);}} className="text-xs px-2 py-1 rounded border">Marquer non lu</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Messages */}
        <div className="md:col-span-2 rounded-2xl bg-white dark:bg-gray-800 shadow p-4">
          {selectedId && currentConversation ? (
            <div className="h-[520px] flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-gray-900 dark:text-white">{currentConversation.title}</div>
                <div className="text-sm text-gray-500 flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Support VerdoSmart</div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3">
                {currentMessages.length === 0 ? (
                  <div className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Aucun message pour cette conversation pour le moment.</div>
                ) : (
                  currentMessages.map(m => (
                    <div key={m.id} className={`max-w-[80%] ${m.sender_id===user?.id ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                      <div className={`inline-block px-3 py-2 rounded-2xl ${m.sender_id===user?.id ? 'bg-emerald-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}>
                        <div>{m.content}</div>
                        {m.attachments && m.attachments.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {m.attachments.map(att => (
                              <a key={att.url} href={att.url} target="_blank" rel="noreferrer" className="block text-xs underline">
                                {att.name} ({Math.round(att.size/1024)} Ko)
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{new Date(m.created_at).toLocaleString()} {m.read ? '· Lu' : '· Non lu'}</div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Écrire un message..." />
                <input ref={fileInputRef} type="file" multiple className="hidden" onChange={onFilesSelected} />
                <button onClick={triggerAttach} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"><Paperclip className="h-4 w-4" /> Joindre</button>
                <button onClick={onSend} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Envoyer</button>
              </div>
              {attachedFiles.length > 0 && (
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">Pièces jointes sélectionnées: {attachedFiles.map(f=>f.name).join(', ')}</div>
              )}
            </div>
          ) : (
            <div className="h-[520px] flex items-center justify-center text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
              <MessageSquare className="h-10 w-10 mr-2 text-emerald-600" /> Sélectionnez une conversation
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
