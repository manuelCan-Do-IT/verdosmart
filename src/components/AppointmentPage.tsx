import { useState } from 'react';
import { Calendar, Clock, ArrowLeft, CalendarCheck, Info } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import { useAuth } from './AuthProvider';

// Types
interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

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

// Mock data - would be fetched from API in real implementation
const professionals: Record<string, Professional> = {
  '1': {
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
  '2': {
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
  '3': {
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
  }
};

// Generate dates for the next 14 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      date,
      formatted: date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }),
      dayName: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
      dayNumber: date.getDate(),
      available: Math.random() > 0.3 // Randomly make some dates unavailable
    });
  }
  
  return dates;
};

// Generate time slots
const generateTimeSlots = () => {
  const slots = [];
  const startHour = 8;
  const endHour = 18;
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push({
        id: `slot-${hour}-${minute}`,
        time,
        available: Math.random() > 0.4 // Randomly make some slots unavailable
      });
    }
  }
  
  return slots;
};

export default function AppointmentPage() {
  const { user } = useAuth();
  const [professionalId, setProfessionalId] = useState<string>('');
  const [professional, setProfessional] = useState<Professional | null>(null);
  const [dates] = useState(generateDates());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots] = useState(generateTimeSlots());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<string>('consultation');
  const [notes, setNotes] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  // Extract professional ID from URL hash
  useState(() => {
    const hash = window.location.hash;
    const match = hash.match(/rendez-vous\/(\d+)/);
    if (match && match[1]) {
      const id = match[1];
      setProfessionalId(id);
      setProfessional(professionals[id] || null);
    }
  });
  
  const handleSubmit = async () => {
    if (!selectedDate || !selectedTimeSlot || !professional) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setStep(3);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  if (!professional) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-4">
            Professionnel non trouvé
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Le professionnel que vous recherchez n'existe pas ou n'est pas disponible.
          </p>
          <a 
            href="#professionnels" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à la liste des professionnels
          </a>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <a 
          href="#professionnels" 
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à la liste des professionnels
        </a>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Professional info header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4">
            <img 
              src={professional.image} 
              alt={professional.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif]">
                {professional.name}
              </h1>
              <p className="text-emerald-600 dark:text-emerald-400">{professional.specialty}</p>
            </div>
          </div>
          
          {/* Progress steps */}
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-8">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-xs mt-2">Date & Heure</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-700">
                <div className={`h-full bg-emerald-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <Info className="w-4 h-4" />
                </div>
                <span className="text-xs mt-2">Détails</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-700">
                <div className={`h-full bg-emerald-500 transition-all ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <span className="text-xs mt-2">Confirmation</span>
              </div>
            </div>
          </div>
          
          {/* Step content */}
          <div className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-6">
                  Choisissez une date et un horaire
                </h2>
                
                {/* Date selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <div className="flex overflow-x-auto pb-2 gap-2">
                    {dates.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => date.available && setSelectedDate(date.date)}
                        disabled={!date.available}
                        className={`flex flex-col items-center min-w-[80px] p-3 rounded-xl border transition-all ${
                          selectedDate && selectedDate.toDateString() === date.date.toDateString()
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500 dark:border-emerald-500'
                            : date.available
                            ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500'
                            : 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <span className="text-xs text-gray-500 dark:text-gray-400">{date.dayName}</span>
                        <span className={`text-lg font-bold ${
                          selectedDate && selectedDate.toDateString() === date.date.toDateString()
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {date.dayNumber}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Time selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Horaire
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                          disabled={!slot.available}
                          className={`py-2 px-3 rounded-xl border text-center transition-all ${
                            selectedTimeSlot === slot.time
                              ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400'
                              : slot.available
                              ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-gray-900 dark:text-white'
                              : 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{slot.time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => selectedDate && selectedTimeSlot && setStep(2)}
                    disabled={!selectedDate || !selectedTimeSlot}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-6">
                  Détails du rendez-vous
                </h2>
                
                <div className="space-y-6">
                  {/* Appointment type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Type de rendez-vous
                    </label>
                    <select
                      value={appointmentType}
                      onChange={(e) => setAppointmentType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    >
                      <option value="consultation">Consultation générale</option>
                      <option value="diagnostic">Diagnostic de problème</option>
                      <option value="suivi">Suivi de projet</option>
                      <option value="formation">Formation technique</option>
                    </select>
                  </div>
                  
                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Notes ou questions spécifiques (optionnel)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Décrivez brièvement votre situation ou vos questions..."
                    ></textarea>
                  </div>
                  
                  {/* Summary */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Récapitulatif</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Expert:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{professional.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Date:</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {selectedDate && formatDate(selectedDate)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Heure:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Type:</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {appointmentType === 'consultation' && 'Consultation générale'}
                          {appointmentType === 'diagnostic' && 'Diagnostic de problème'}
                          {appointmentType === 'suivi' && 'Suivi de projet'}
                          {appointmentType === 'formation' && 'Formation technique'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? 'Confirmation en cours...' : 'Confirmer le rendez-vous'}
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                  <CalendarCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Sora',_sans-serif] mb-4">
                  Rendez-vous confirmé !
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Votre rendez-vous avec {professional.name} est confirmé pour le {selectedDate && formatDate(selectedDate)} à {selectedTimeSlot}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#mon-compte/rendez-vous"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors"
                  >
                    Voir mes rendez-vous
                  </a>
                  <a
                    href="#accueil"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}