import { useState } from 'react';
import { Eye, Pencil, EyeOff, Trash2, Package, Cog } from 'lucide-react';
import AdminLayout from './AdminLayout';

type Row = { id: string; name: string; vendor: string; category: string; price: number; status: 'En ligne'|'En attente'|'Signalé' };

const products: Row[] = [
  { id: 'P001', name: 'Capteur Humidité Sol', vendor: 'Alpha Tech', category: 'IoT', price: 129, status: 'En ligne' },
  { id: 'P045', name: 'Semences Bio Maïs', vendor: 'AgriSeed', category: 'Semences', price: 79, status: 'En attente' },
];
const services: Row[] = [
  { id: 'S010', name: 'Consultation Agronome', vendor: 'Beta Conseil', category: 'Conseil', price: 90, status: 'En ligne' },
  { id: 'S024', name: "Installation système d'irrigation", vendor: 'HydroPro', category: 'Irrigation', price: 450, status: 'Signalé' },
];

export default function AdminCatalogPage() {
  const [tab, setTab] = useState<'Produits'|'Services'>('Produits');

  const rows = tab === 'Produits' ? products : services;

  return (
    <AdminLayout title="Gestion du Catalogue">
      <div className="mt-6 flex gap-3">
        <button onClick={()=>setTab('Produits')} className={`px-4 py-2 rounded-xl ${tab==='Produits'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Produits</button>
        <button onClick={()=>setTab('Services')} className={`px-4 py-2 rounded-xl ${tab==='Services'?'bg-emerald-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border'}`}>Services</button>
      </div>

      <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-700 dark:text-gray-300">
              <th className="p-3">Nom</th>
              <th className="p-3">Prestataire</th>
              <th className="p-3">Catégorie</th>
              <th className="p-3">Prix</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-t border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.vendor}</td>
                <td className="p-3">{r.category}</td>
                <td className="p-3">€{r.price}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3 flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1 text-emerald-600"><Eye className="h-4 w-4" /> Voir la fiche</a>
                  <button className="inline-flex items-center gap-1 text-gray-600"><Pencil className="h-4 w-4" /> Modifier</button>
                  <button className="inline-flex items-center gap-1 text-yellow-600"><EyeOff className="h-4 w-4" /> Dépublier</button>
                  <button className="inline-flex items-center gap-1 text-red-600"><Trash2 className="h-4 w-4" /> Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-2xl bg-white dark:bg-gray-800 shadow p-6">
        <div className="flex items-center gap-3 text-gray-900 dark:text-white"><Cog className="h-5 w-5" /><span className="font-semibold">Gestion des Catégories</span></div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Ajoutez ou modifiez les catégories de produits et services.</p>
        <div className="mt-4 flex gap-3">
          <input placeholder="Nouvelle catégorie" className="px-3 py-2 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
          <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white">Ajouter</button>
        </div>
      </div>
    </AdminLayout>
  );
}
