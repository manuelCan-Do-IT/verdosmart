import { useState } from 'react';
import { CalendarClock, Star, XCircle, ArrowRight } from 'lucide-react';
import AccountHeader from './AccountHeader';
import Footer from './Footer';

interface Appointment {
  id: string;
  expert: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past';
}

export default function MyAppointmentsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [appointments] = useState<Appointment[]>([]);

  const filtered = appointments.filter((a) => a.status === tab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-0 transition-colors duration-300">
      <AccountHeader backHref="#mon-compte/tableau-de-bord" backLabel="Mon compte" />
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">Mes Rendez-vous</h1>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setTab('upcoming')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='upcoming'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>À venir</button>
          <button onClick={() => setTab('past')} className={`px-4 py-2 rounded-xl font-['Inter',_sans-serif] ${tab==='past'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Passés</button>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 shadow p-6 text-center">
            <CalendarClock className="h-12 w-12 mx-auto text-emerald-600" />
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif]">Vous n'avez aucun rendez-vous.</p>
            <a href="#services#experts" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] font-semibold">
              Trouver un expert <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {filtered.map((a) => (
              <div key={a.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white font-['Inter',_sans-serif]">{a.expert || 'Non renseigné'}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Date: {a.date || 'Non renseigné'} · Heure: {a.time || 'Non renseigné'}</div>
                  </div>
                  {a.status === 'upcoming' ? (
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 rounded-xl border text-gray-700 dark:text-gray-300 font-['Inter',_sans-serif] flex items-center gap-2">
                        <XCircle className="h-4 w-4" /> Annuler / Reporter
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Inter',_sans-serif] flex items-center gap-2">
                        <Star className="h-4 w-4" /> Laisser un avis
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}