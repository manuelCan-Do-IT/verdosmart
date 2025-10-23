import { useState, useRef } from 'react';
import { MessageSquare, Paperclip } from 'lucide-react';

interface Conversation {
  id: string;
  title: string;
  related?: string; // order/quote reference
  unread?: boolean;
}

export default function MessagingPage() {
  const [conversations] = useState<Conversation[]>([
    { id: 'C001', title: 'Commande #1001', related: 'Kit jardinage', unread: true },
    { id: 'C000', title: 'Devis #0998', related: 'Audit énergétique', unread: false },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>('C001');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const triggerAttach = () => fileInputRef.current?.click();
  const onFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setAttachedFiles(files);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Conversations</h2>
          {conversations.length === 0 ? (
            <div className="mt-4 text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Aucune conversation. Contactez un vendeur depuis une commande.</div>
          ) : (
            <ul className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
              {conversations.map((c) => (
                <li key={c.id} className="py-3 cursor-pointer" onClick={() => setSelectedId(c.id)}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200 font-['Inter',_sans-serif]">{c.title}</div>
                      {c.related && <div className="text-sm text-gray-500">{c.related}</div>}
                    </div>
                    {c.unread && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Non lu</span>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:col-span-2 rounded-2xl bg-white dark:bg-gray-800 shadow p-4">
          {selectedId ? (
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto">
                {/* messages list placeholder */}
                <div className="text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">Espace de discussion pour {selectedId}.</div>
                {attachedFiles.length > 0 && (
                  <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Pièces jointes: {attachedFiles.map(f => f.name).join(', ')}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input className="flex-1 rounded-xl border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Écrire un message..." />
                <input ref={fileInputRef} type="file" multiple className="hidden" onChange={onFilesSelected} />
                <button onClick={triggerAttach} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"><Paperclip className="h-4 w-4" /> Joindre</button>
                <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">Envoyer</button>
              </div>
            </div>
          ) : (
            <div className="h-96 flex items-center justify-center text-gray-600 dark:text-gray-400 font-['Inter',_sans-serif]">
              <MessageSquare className="h-10 w-10 mr-2 text-emerald-600" /> Sélectionnez une conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}