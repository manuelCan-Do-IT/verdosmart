import { useState } from 'react';
import { Search, Filter, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

// Types
interface Professional {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  availability: string;
  bio: string;
  expertise: string[];
}

// Mock data
const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dr. Amadou Diallo',
    specialty: 'Agronome spécialiste en cultures maraîchères',
    rating: 4.9,
    reviewCount: 124,
    location: 'Dakar',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible cette semaine',
    bio: 'Docteur en agronomie avec 15 ans d\'expérience dans l\'optimisation des cultures maraîchères en zone sahélienne. Spécialiste des techniques d\'irrigation économes en eau.',
    expertise: ['Cultures maraîchères', 'Irrigation', 'Agriculture biologique']
  },
  {
    id: '2',
    name: 'Fatou Ndiaye',
    specialty: 'Experte en protection des cultures',
    rating: 4.8,
    reviewCount: 98,
    location: 'Thiès',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible la semaine prochaine',
    bio: 'Spécialiste en protection intégrée des cultures avec une expertise particulière dans les méthodes biologiques de lutte contre les ravageurs. Formée à l\'université de Wageningen.',
    expertise: ['Protection des cultures', 'Lutte biologique', 'Diagnostic phytosanitaire']
  },
  {
    id: '3',
    name: 'Moussa Sow',
    specialty: 'Conseiller en agriculture de précision',
    rating: 4.7,
    reviewCount: 87,
    location: 'Saint-Louis',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible cette semaine',
    bio: 'Expert en technologies agricoles modernes et agriculture de précision. Spécialiste des drones, capteurs et systèmes d\'aide à la décision pour optimiser les rendements.',
    expertise: ['Agriculture de précision', 'Drones', 'Analyse de données']
  },
  {
    id: '4',
    name: 'Aïssatou Diop',
    specialty: 'Spécialiste en agroforesterie',
    rating: 4.9,
    reviewCount: 76,
    location: 'Ziguinchor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible dans 2 semaines',
    bio: 'Experte en systèmes agroforestiers adaptés aux zones tropicales. Spécialiste de l\'intégration des arbres dans les systèmes agricoles pour améliorer la résilience et la biodiversité.',
    expertise: ['Agroforesterie', 'Biodiversité', 'Cultures pérennes']
  },
  {
    id: '5',
    name: 'Ibrahima Fall',
    specialty: 'Expert en fertilité des sols',
    rating: 4.6,
    reviewCount: 92,
    location: 'Louga',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible cette semaine',
    bio: 'Spécialiste en analyse et restauration de la fertilité des sols dégradés. Expert en techniques de compostage et en utilisation d\'amendements organiques adaptés aux conditions locales.',
    expertise: ['Fertilité des sols', 'Compostage', 'Agriculture régénérative']
  },
  {
    id: '6',
    name: 'Mariama Bâ',
    specialty: 'Conseillère en agriculture biologique',
    rating: 4.8,
    reviewCount: 65,
    location: 'Dakar',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    availability: 'Disponible la semaine prochaine',
    bio: 'Experte en agriculture biologique certifiée avec une spécialisation dans les systèmes de certification et les marchés d\'exportation. Formée en France et au Sénégal.',
    expertise: ['Agriculture biologique', 'Certification', 'Marchés d\'exportation']
  }
];

// Professional card component
function ProfessionalCard({ professional }: { professional: Professional }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative">
        <img 
          src={professional.image} 
          alt={professional.name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center gap-1 text-white">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{professional.rating}</span>
            <span className="text-sm text-gray-300">({professional.reviewCount} avis)</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">{professional.name}</h3>
        <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-1">{professional.specialty}</p>
        
        <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{professional.location}</span>
        </div>
        
        <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{professional.availability}</span>
        </div>
        
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{professional.bio}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {professional.expertise.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-6">
          <a 
            href={`#rendez-vous/${professional.id}`}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors"
          >
            Prendre rendez-vous <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  
  const specialties = [...new Set(professionals.map(p => p.specialty))];
  
  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         professional.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === '' || professional.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-4">
            Nos Experts Professionnels
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Consultez nos spécialistes en agronomie et technologies agricoles pour des conseils personnalisés et un accompagnement sur mesure.
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un expert par nom, spécialité..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative min-w-[240px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all appearance-none"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option value="">Toutes les spécialités</option>
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.length > 0 ? (
            filteredProfessionals.map(professional => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Aucun professionnel ne correspond à votre recherche.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}