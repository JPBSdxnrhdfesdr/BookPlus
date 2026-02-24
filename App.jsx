import React, { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <Hero />
            <Catalog />
            <Footer />
        </div>
    );
}

// Header Component
function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-10">
                <div className="flex items-center gap-2 shrink-0">
                    <div className="text-navy flex items-center">
                        <span className="material-symbols-outlined text-3xl">auto_stories</span>
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter text-navy">BOOK PLUS</h1>
                </div>

                <div className="flex-1 max-w-xl">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-navy">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input
                            className="w-full bg-gray-50 border-gray-100 border rounded-full py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-navy/10 focus:bg-white focus:border-navy transition-all placeholder:text-gray-400"
                            placeholder="Encontre sua próxima leitura..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8 shrink-0">
                    <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                        <a className="hover:text-navy transition-colors" href="#">Catálogo</a>
                        <a className="hover:text-navy transition-colors" href="#">Lançamentos</a>
                        <a className="hover:text-navy transition-colors" href="#">Mais Vendidos</a>
                    </nav>
                    <button className="bg-navy text-white text-[11px] font-bold uppercase tracking-[0.2em] px-7 py-3 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md">
                        Login Admin
                    </button>
                </div>
            </div>
        </header>
    );
}

// Hero Section Component
function Hero() {
    return (
        <section className="relative h-[560px] w-full overflow-hidden">
            <div className="absolute inset-0">
                <img
                    alt="Ambiente de leitura aconchegante"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv"
                />
            </div>
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center items-start">
                <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/20">
            Curadoria Exclusiva
          </span>
                    <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none">
                        Descubra seu <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">próximo capítulo.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
                        Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
                    </p>
                    <div className="flex gap-4">
                        <a className="bg-white text-navy px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1" href="#catalogo">
                            Explorar Catálogo
                        </a>
                        <a className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all" href="#">
                            Ver Promoções
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Book Card Component
function BookCard({ category, title, author, imageUrl }) {
    return (
        <div className="group flex flex-col gap-5">
            <div className="relative overflow-hidden aspect-[3/4.5] bg-gray-100 rounded-xl shadow-md transition-shadow hover:shadow-xl">
                <img
                    alt={`Capa do livro ${title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={imageUrl}
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500"></div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 text-navy px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    Ver detalhes
                </button>
            </div>
            <div className="flex flex-col gap-1.5 px-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-navy/50">{category}</span>
                <h3 className="text-navy font-bold text-lg leading-tight group-hover:text-blue-900 transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm italic font-light">{author}</p>
            </div>
        </div>
    );
}

// Catalog Component
function Catalog() {
    const [sortBy, setSortBy] = useState('Relevância');

    const books = [
        { id: 1, category: 'Poesia', title: 'O Silêncio do Mar', author: 'Helena Vasconcelos', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt' },
        { id: 2, category: 'Romance', title: 'Caminhos de Areia', author: 'Marcos Dutra', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV0Fo6K0kg37JnY2R67Fc9vlpJ4pwABfTQsIXi9LAdJOi8oz6Y3xsHDbk_5w5Hp8YSNjmdpSpjYuOlnVUm-uy7b45GWzXqhhI9-ao9rt8Q2lrG9nNo2lgys-BBnYPVXxc8VVcqUNy_PPpbX7N2Z5hRfoziivBV6HIgVrjo8zW0sqjyXYCFaEmdF9Cb-fRdOKMYPed3WE9LQybhTTrWaUn0WJftRaZvSO8udDnj2HI10poLHdjIE2qfvT7Qz7F5D9LYyPF_qnOT-z-D' },
        { id: 3, category: 'Ensaios', title: 'Arquitetura da Alma', author: 'Beatriz Muniz', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8VyP47_-PgunXI5hTdpn5e_owd_pT-1_tY6trdpnEXHEe9sO6ybipb7pxSkP7hu54OJxwfj2LJ3K_885etjv0OXG2Msa_37dVO0YgCsEfyl9Ih6YRCy8b4pcTAiPHNScTg9f7P1suLyTLjbQpvOF2fu3MA4cFToqfJY_8CcPJPiVvdvzxDU91Vboa9fzVFZCf3OLKL3lUiPKgJHTgdqYKD9uPo55yF2b2WY68rg-K8cwOom3jkFjsXIK8lit88024T_n8yjqD1kaL' },
        { id: 4, category: 'Mistério', title: 'O Último Inverno', author: 'Ricardo Almeida', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAURKfYJHJw6LLOsifFzm7CAan-Kw4sdvlY2yyE-RjNdqOuAhBvlXXJZBQSt01H_rmgrFGXhpsGxir_GPmSqxfW6zsRfFDKE1yyLi91QXM4ZltWse8vjQ5qwflgoj1jLHyhH8EmKzueAbeYhY-2ynolxHQxWikUS9t4-CZyLYjgy77QmqitnknAwAuHjuQchnjtv7CR6Z2Z3iwI3dD_cChz7-azkF60eFyKoHhjpOy8R8Xvtoe5PEsHZlL_ij7Unm-GwXENrTrkdpa-' },
        { id: 5, category: 'Crônicas', title: 'Crônicas da Capital', author: 'Fernanda Costa', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCKr_gIoXXy95TZvHUJeV5yR_iaxKnqfvrnMCL13IkIE9jYcb59TxKX69WSPlIiD_Bt_PgP55FqBWijBPwT2Ihcay2S3dG8ahjRClm5bPYOHYvSMlgjo1CJTSsBnMRb_d-ZDCiVMzHon5-ebB3-3OL4prNKMOWYrAXcfbKgggIQVO8fvS2emtJ99rbOal5320paTrt9fCV9P_secqgFk7rW2PMj5M-HBIbm0zJm-JP3l05io5rNJw27c23fpHnrRslyHJ4NVI7230k' },
        { id: 6, category: 'Aventura', title: 'Além do Horizonte', author: 'Juliano Mendes', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgr_vyBigWMwwVrRouBgS916W22Ws3OqI2rZhMRgoO6PX_iVW2VGAgmrJdorj4ffehQFjklPhZJ_Am7rHl0469VKQiz-HHNvRYxXzpq7vPG-BZGCWapyG2Lk8fkh-VKw-OSbk61Kfb8IJgBhilmM9KlPYlssH4z5oqAs985k4CdaupuonOrBFhzGow36ifDJVsx-vYdyogku1ag9FUwpi6WGyrKJdpgXpnN43ClCKAsSLXdKYT5ojtWLw5gNqi-hAauUdsg0NXKQR' },
        { id: 7, category: 'Psicologia', title: 'O Despertar da Mente', author: 'Dra. Sônia Luz', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIrOniwwx7O8UYZpSiLJUgTJXhZna95wsoFrsm-nZTeLuJkMTHrgkmPvjcq1ZsrD5L_VsN-dig-V9df78pKgQflbtzZAS9x8xTuMWeMOlXQKdRiINMpABc62S6Yfm2Ne72hh4Z3eOoM2NTRKyvoGXXA-Cs2ttpKTnB3HiAk3lET2KeQ0Jry5uwO9LgDRuDWfNDJHdXCKJLru6YRxJIPdp1pLAa1Mw4F2pjW5va6Dby_ukqe6rY3yBOe6ToBV62BSJ72_QKPow_iOqE' },
        { id: 8, category: 'Contos', title: 'Fragmentos', author: 'Carlos Eduardo', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL-p7VMFKMrJ3m2mgNbTHioDJnF--bq4fgkF2CMeH_ZlX5876uyFH0_SBCKuGWl0zGNM6QqQ6BudDR4njMloF7JX49DmXoonlUO0mMf7rTbxcZSDSLth-GKJw9C5rjkhb1NB4_Go1OJ9-MmEZckBFxD_JAfENWKZhavhiQw-ETy_lsD1lS1ioEwnP8MLTEc4Wb8TuaI4R7IBwkrUi-TPIEqh8oTj5OKvZBDUn9o5-YYUGusr6AgNmG8PrLMa24ACBs4PCWU_4rKTiI' },
        { id: 9, category: 'Ficção', title: 'Luz e Sombra', author: 'Patrícia Lima', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbecKio3xro7kgbDmdD5jUiNAkzgWcfTOjbZi7iWXl_fzEavnubnulN_POs4g-6qNfk6wMnQjQ0mO-k_XYG3U_LWGTmPlVzISCU776heCbx9zeFxvcTQqzj1trhylmNN_bzEvYadHW2LlCvxvEDjjQfMAfEjFsiSy7ZXyOGKDP4sI6ejnK7o8LefZzrqkm5xkRfwqmLpiI6UTat6AaESrl9MoJZt2VSlsNYPDHwSxxUJYkZ2d9RzpD3uVgZRfPoF4VZTMc1QbyOvo5' },
        { id: 10, category: 'Botânica', title: 'O Jardim Suspenso', author: 'Mariana Rocha', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM3ZBORHmk162uKNaSa-WFyUxyw28GESaomS1hWZPyM_gAXj6_KJBCVWzm5VeltLEUk2HVBDCLLaR8hiN0s2Yypu2dQrLaEq_onPTi70tfQxrDPlN_HXVz1lufQrZmc75rZdshIccrcBMaUGl24yPQe9uUH1YvAK2I5ZikgqwUeEFOwlCG3h4qpkTOIPZsBqmoUMzpG7VVv4iJqnptVarRuirYRLW8choCFUnyrRu2hZQiQfNloFzxI9d99I5b0pfXwmt6DR88LRP2' },
    ];

    return (
        <main className="max-w-[1280px] mx-auto py-24 px-6" id="catalogo">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-[2px] bg-navy"></div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">Novidades</span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-navy tracking-tight">Destaques da Semana</h2>
                </div>

                <div className="flex gap-4">
                    <button className="p-2 border border-gray-200 rounded-full hover:border-navy hover:text-navy transition-colors">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <select
                        className="border-gray-200 rounded-full text-sm font-medium pr-10 focus:ring-navy focus:border-navy"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Ordenar por: Relevância</option>
                        <option>Mais recentes</option>
                        <option>Menor preço</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-16">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        category={book.category}
                        title={book.title}
                        author={book.author}
                        imageUrl={book.imageUrl}
                    />
                ))}
            </div>

            <div className="mt-24 flex justify-center">
                <button className="px-12 py-4 border border-navy text-navy rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-navy hover:text-white transition-all">
                    Ver Catálogo Completo
                </button>
            </div>
        </main>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="border-t border-gray-100 py-20 px-6 bg-gray-50/50">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-navy">
                            <span className="material-symbols-outlined text-3xl">auto_stories</span>
                            <span className="text-2xl font-black tracking-tighter">BOOK PLUS</span>
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all" href="#">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all" href="#">
                                <span className="material-symbols-outlined text-xl">favorite</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Explorar</h4>
                            <nav className="flex flex-col gap-3 text-sm text-gray-500">
                                <a className="hover:text-navy" href="#">Lançamentos</a>
                                <a className="hover:text-navy" href="#">Mais Vendidos</a>
                                <a className="hover:text-navy" href="#">E-books</a>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Suporte</h4>
                            <nav className="flex flex-col gap-3 text-sm text-gray-500">
                                <a className="hover:text-navy" href="#">Ajuda</a>
                                <a className="hover:text-navy" href="#">Envios</a>
                                <a className="hover:text-navy" href="#">Trocas</a>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Institucional</h4>
                            <nav className="flex flex-col gap-3 text-sm text-gray-500">
                                <a className="hover:text-navy" href="#">Sobre Nós</a>
                                <a className="hover:text-navy" href="#">Contato</a>
                                <a className="hover:text-navy" href="#">Privacidade</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        © 2024 Book Plus. Todos os direitos reservados.
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Desenvolvido com</span>
                        <span className="material-symbols-outlined text-sm text-red-400 fill-1">favorite</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">em SENAI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default App;