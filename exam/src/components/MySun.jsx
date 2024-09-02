import Card from '@mui/material/Card';
import Image from '../assets/mySun.jpg'
import "../styles/mySun.scss"

export function MySun(){

    return(
        <>
            <div>
                <Card variant={"outlined"} className={"card"} sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    display : 'flex'
                }}>
                    <div className="containerImage">
                        <img src={Image} style={{width: "200px"}} alt={'Meteorologist'}/>
                    </div>
                    <div className="containerText">
                        <h2>Мій головний радник по дизайну та просто сонечко</h2>
                        <blockquote className={"card-about"}>
                           "Без цієї чудової та яскравої людини у цього веб-сайту не був би такий якскравий та сучасний
                            дизайн.Я з нею раджусь коли потрібно щось зробити по красоті,чи просто,щоб спитати поради.
                            Я надзвичайно вдячний що вона в мене є,і що вона ніколи не відмовить мені в допомозі та підримці.
                            Кохаю тебе,маленька ❤️"
                        </blockquote>
                    </div>
                </Card>
            </div>
        </>
    )
}