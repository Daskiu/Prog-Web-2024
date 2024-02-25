const facts = [
    "1. El pulpo tiene tres corazones.",
    "2. El agujero negro más cercano a la Tierra está a 1,000 años luz de distancia.",
    "3. Las vacas tienen mejores amigas y pueden sufrir de estrés cuando se separan.",
    "4. El alfabeto hawaiano solo tiene 13 letras.",
    "5. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "6. La Gran Muralla China no es visible desde la Luna sin ayuda.",
    "7. Las nutrias marinas tienen un bolsillo especial en su piel para guardar sus herramientas y comida.",
    "8. En promedio, una persona pasa seis meses de su vida esperando semáforos en rojo.",
    "9. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "10. El ojo de un avestruz es más grande que su cerebro.",
    "11. El corazón de un colibrí late hasta 1,200 veces por minuto.",
    "12. En Australia, hay una carretera llamada 'Carretera de No Retorno' que es tan recta y larga que los conductores pueden quedar hipnotizados.",
    "13. Los flamencos rosados no nacen con ese color; lo obtienen de la comida que consumen.",
    "14. El cuerpo humano tiene suficiente hierro como para hacer un clavo pequeño.",
    "15. En promedio, las personas parpadean alrededor de 15 veces por minuto.",
    "16. Hay más estrellas en el universo observable que granos de arena en todas las playas de la Tierra.",
    "17. Las hormigas siempre caen hacia su lado derecho cuando mueren de una gran altura.",
    "18. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "19. La Gran Muralla China no es visible desde la Luna sin ayuda.",
    "20. Las abejas pueden reconocer rostros humanos.",
    "21. En el espacio, no puedes llorar porque no hay gravedad para que las lágrimas fluyan.",
    "22. El 40% de las personas en el mundo han tenido hipo en algún momento de sus vidas.",
    "23. Las cabras tienen un acento propio que adoptan de su grupo social.",
    "24. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "25. Los elefantes son los únicos animales que no pueden saltar.",
    "26. El promedio de sueños que tiene una persona en una vida es de 146,000.",
    "27. Las arañas a veces comen sus propias telarañas para reciclar la seda y ahorrar energía.",
    "28. El pelo humano puede soportar el peso de dos elefantes africanos.",
    "29. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "30. Los pingüinos tienen una sola pareja para toda la vida y se regalan piedras como muestra de afecto.",
    "31. En promedio, tardamos siete minutos en quedarnos dormidos.",
    "32. Un grupo de flamencos se llama 'flamenco'.",
    "33. Los cocodrilos no pueden sacar la lengua.",
    "34. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "35. El peso total de las hormigas en la Tierra es comparable al peso total de los humanos.",
    "36. El sol libera más energía en un segundo que toda la energía consumida por la humanidad a lo largo de la historia.",
    "37. Las jirafas pueden limpiar sus orejas con la lengua.",
    "38. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "39. Los flamencos rosados no nacen con ese color; lo obtienen de la comida que consumen.",
    "40. En promedio, una persona pasará seis meses de su vida esperando semáforos en rojo.",
    "41. Las nutrias marinas tienen un bolsillo especial en su piel para guardar sus herramientas y comida.",
    "42. En Australia, hay una carretera llamada 'Carretera de No Retorno' que es tan recta y larga que los conductores pueden quedar hipnotizados.",
    "43. Los cocodrilos no pueden sacar la lengua.",
    "44. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "45. El pulpo tiene tres corazones.",
    "46. En el espacio, no puedes llorar porque no hay gravedad para que las lágrimas fluyan.",
    "47. Las abejas pueden reconocer rostros humanos.",
    "48. Los flamencos rosados no nacen con ese color; lo obtienen de la comida que consumen.",
    "49. El promedio de sueños que tiene una persona en una vida es de 146,000.",
    "50. Los elefantes son los únicos animales que no pueden saltar.",
    "51. Las hormigas siempre caen hacia su lado derecho cuando mueren de una gran altura.",
    "52. El peso total de las hormigas en la Tierra es comparable al peso total de los humanos.",
    "53. Las jirafas pueden limpiar sus orejas con la lengua.",
    "54. La miel nunca se echa a perder. Se han encontrado frascos de miel en antiguas tumbas egipcias que aún son comestibles.",
    "55. Los flamencos rosados no nacen con ese color; lo obtienen de la comida que consumen.",
    "56. El agujero negro más cercano a la Tierra está a 1,000 años luz de distancia.",
    "57. Las nutrias marinas tienen un bolsillo especial en su piel para guardar sus herramientas y comida.",
    "58. El alfabeto hawaiano solo tiene 13 letras.",
    "59. El sol libera más energía en un segundo que toda la energía consumida por la humanidad a lo largo de la historia.",
    "60. En promedio, tardamos siete minutos en quedarnos dormidos."
]

export function Facts({ count }) {
    return (
        <div className="funFacts">
            <h3>ChatGPT random facts!</h3>
            {
                count > 0 ?
                    <h2>{facts[count - 1]}</h2>
                    :
                    <h2>Facts are not randomly organized!</h2>
            }
        </div>
    )
}