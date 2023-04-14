import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/barberiabbr.appspot.com/o/barber23.jpg?alt=media&token=b1aa87b1-70cd-41ad-ac77-92c0797fcd63" className="img-fluid w-100" alt="imgbarber" />
                    </div>
                    <div className="col-12 col-md-4">
                        <Agenda/>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}