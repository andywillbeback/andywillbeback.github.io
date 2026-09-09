import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Pu Jin — Language. With impact.',description:'Educator and member of the Laboratory for Neurodevelopment of Reading and Language at The Hong Kong Polytechnic University. Doctor of Applied Linguistic Science, in progress. IELTS Speaking 9.0.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
