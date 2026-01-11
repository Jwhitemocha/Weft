'use client'

import { useState } from 'react';
import Image from 'next/image';

export function BodyFatVisualizer() {
    const [gender, setGender] = useState<'male' | 'female'>('male');

    return (
        <div className="my-10 space-y-6">
            <div className="flex flex-col items-center gap-4">
                <div className="bg-muted p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setGender('male')}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${gender === 'male' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        Male Reference
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${gender === 'female' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        Female Reference
                    </button>
                </div>
                <p className="text-sm text-muted-foreground">
                    Select your biological sex to see the most accurate reference photos.
                </p>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-sm bg-muted">
                {/* Male Image */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${gender === 'male' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <Image
                        src="/images/MBFpercent.jpg"
                        alt="Male Body Fat Percentage Visual Reference"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Female Image */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${gender === 'female' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <Image
                        src="/images/FBFPercent.jpg"
                        alt="Female Body Fat Percentage Visual Reference"
                        fill
                        className="object-contain"
                        priority={false}
                    />
                </div>
            </div>

            <div className="text-center text-xs text-muted-foreground italic">
                Credit: Visual references help calibrate your own estimation.
            </div>
        </div>
    );
}
