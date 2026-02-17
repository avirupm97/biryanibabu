'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export default function HeroModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState('');

  const validateAndSubmit = () => {
    // Remove any spaces and check if it's a valid 6-digit pin code
    const cleanedPinCode = pinCode.trim();
    
    if (!cleanedPinCode) {
      setError('Please enter your pin code');
      return;
    }

    // Check if it's exactly 6 digits
    if (!/^\d{6}$/.test(cleanedPinCode)) {
      setError('Please enter a valid 6-digit pin code');
      return;
    }

    // Check if pin code starts with 751 (delivery available)
    if (cleanedPinCode.startsWith('751')) {
      // Close the modal - delivery available in this area
      setIsOpen(false);
      return;
    }

    // If valid pin code but not in delivery zone, show unavailable message
    setError('Sorry, we don\'t deliver to your location yet. Stay tuned!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and limit to 6 characters
    if (/^\d{0,6}$/.test(value)) {
      setPinCode(value);
      setError(''); // Clear error when user types
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl bg-transparent border-none p-0">
        <DialogTitle className="sr-only">Order Biryani - Enter Location</DialogTitle>
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.7), rgba(26, 15, 10, 0.7)), url('https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg')`
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="border-2 border-royal-gold/30 rounded-full p-8 mb-6 max-w-2xl">
                <h2 className="heading-xl mb-4">
                  Royal Dum Biryani
                </h2>
                <p className="text-lg text-light-tan mb-2">
                  Dum Pukht and Served
                </p>
                <p className="text-lg text-royal-gold mb-6 accent-text">
                  in a Royal Metal Handi
                </p>
              </div>

              <div className="bg-dark-brown/80 backdrop-blur-sm p-8 rounded-lg max-w-xl w-full border border-royal-gold/20">
                <h3 className="text-2xl text-foreground mb-6 font-heading">
                  Crafted from long lost royal recipe, once reserved for Royalty!
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-royal-gold z-10" />
                    <Input
                      type="text"
                      placeholder="Enter your location pin code"
                      value={pinCode}
                      onChange={handleInputChange}
                      className={`pl-10 bg-warm-brown border-royal-gold/30 text-foreground placeholder:text-light-tan/50 ${
                        error ? 'border-red-500' : ''
                      }`}
                      maxLength={6}
                    />
                  </div>
                  <Button 
                    onClick={validateAndSubmit}
                    className="bg-royal-gold hover:bg-royal-gold/90 text-dark-brown font-semibold whitespace-nowrap"
                  >
                    Order Now
                  </Button>
                </div>
                {error && (
                  <p className="mt-3 text-sm text-red-400 text-left">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
