import AdminLayout from './AdminLayout';
import { Search, Filter, Eye, CheckCircle, XCircle, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

type UserRow = {
  id: string; name: string; email: string; type: 'Agriculteur'|'Fournisseur'|'Technicien'; status: 'Actif'|'En attente'|'Suspendu'; joined: string;
};

const sampleUsers: UserRow[] = [
  { id: 'U001', name: 'Jean Martin', email: 'jean@example.com', type: 'Agriculteur', status: 'Actif', joined: '2025-08-01' },
  { id: 'U002', name: 'Alpha SARL', email: 'contact@alpha.com', type: 'Fournisseur', status: 'En attente', joined: '2025-08-12' },
  { id: 'U003', name: 'Sophie Leroy', email: 'sophie@example.com', type: 'Technicien', status: 'Suspendu', joined: '2025-07-21' },
];

export default function AdminUsersPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'Tous'|'Agriculteur'|'Fournisseur'|'Technicien'>('Tous');
  const [status, setStatus] = useState<'Tous'|'Actif'|'En attente'|'Suspendu'>('Tous');

  const filtered = sampleUsers.filter(u =>
    (type==='Tous' || u.type===type) &&
    (status==='Tous' || u.status===status) &&
    (u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()) || u.id.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AdminLayout title="Gestion des Utilisateurs" description="Gérez les comptes utilisateurs et leurs permissions">
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-xl px-3 py-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche nom, e-mail, ID" className="bg-transparent outline-none text-gray-900 dark:text-white" />
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-xl px-3 py-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select value={type} onChange={e=>setType(e.target.value as any)} className="bg-transparent outline-none text-gray-900 dark:text-white">
            <option>Tous</option><option>Agriculteur</option><option>Fournisseur</option><option>Technicien</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-xl px-3 py-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select value={status} onChange={e=>setStatus(e.target.value as any)} className="bg-transparent outline-none text-gray-900 dark:text-white">
            <option>Tous</option><option>Actif</option><option>En attente</option><option>Suspendu</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-700 dark:text-gray-300">
              <th className="p-3">Nom</th>
              <th className="p-3">E-mail</th>
              <th className="p-3">Type</th>
              <th className="p-3">Date d'inscription</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} className="border-t border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.type}</td>
                <td className="p-3">{u.joined}</td>
                <td className="p-3">{u.status}</td>
                <td className="p-3 flex gap-2">
                  <a href="#admin/users/profile" className="inline-flex items-center gap-1 text-emerald-600"><Eye className="h-4 w-4" /> Voir</a>
                  <button className="inline-flex items-center gap-1 text-emerald-600"><CheckCircle className="h-4 w-4" /> Valider</button>
                  <button className="inline-flex items-center gap-1 text-yellow-600"><XCircle className="h-4 w-4" /> Suspendre</button>
                  <button className="inline-flex items-center gap-1 text-gray-600"><Pencil className="h-4 w-4" /> Modifier</button>
                  <button className="inline-flex items-center gap-1 text-red-600"><Trash2 className="h-4 w-4" /> Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
