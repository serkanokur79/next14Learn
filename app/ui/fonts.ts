import { Inter, Lusitana } from 'next/font/google';

declare module 'next/font/google' {
    export const inter: any;
    export const lusitana: any;
}

export const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
