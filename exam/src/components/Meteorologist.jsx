import Card from '@mui/material/Card';
import Image from '../assets/meteorologist.jpg'
import "../styles/meteorologist.scss"

export function Meteorologist(){

    return(
        <>
            <div>
                <Card variant={"outlined"} className={"card"}>
                    <img src={Image} style={{width: "200px"}} alt={'Meteorologist'}/>
                    <h2>Наш головний метеоролог на станції</h2>
                    <blockquote className={"card-about"}>
                        "Як наш головний метеоролог Михайло Добкін Арменович визначає яка погода буде сьогодні ?
                        Все дуже просто ! Він виходить гуляти з Максом, і вони йдуть па рофлу до баби Макса, по дорозі Михайло визначає погоду по тому що їм трапляється на дорозі,
                        на приклад якщо їм по дорозі трапляється людина яка має
                        залежність від спиртних напоїв (алкаш) який виходить з магазину з пляшкою горілки, і випиває її залпом а потім цілить нею у смітник, якщо він попадає то це значить те що дощу не буде,
                        а якщо попадає і при цьому розочаровується і йде скликати засідання у верховній раді, тоді дощ буде. Далі по дорозі,
                        до підходу до будинку бабусі Макса Михайло помічає дивну людину яка біжить їм назустріч,
                        якщо ця людина пробігає поруч це значіть те що небо буде ясне без хмар, а якщо ця людина в них вбігає паралельно
                        відриваючи ручку пляшки з під води яку макс несе своїй бабусі і при цьому йде випорожнюватись на трансформаторну будку то небо буде хмарним і не сонячним."
                    </blockquote>
                </Card>
            </div>
        </>
    )
}