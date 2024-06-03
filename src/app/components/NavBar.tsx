export default function NavBar(){
    return(
        <header className="">
            <div>
                <h1>DIRPPG-DV</h1>
            </div>
            <nav>
                <ul className="flex gap-10">
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Editais</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pós-graduação</a></li>
                </ul>
            </nav>
        </header>
    )
}