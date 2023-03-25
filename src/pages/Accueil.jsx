import { useState } from 'react';
import { themeList, cardList } from "../data/data";
import NavBar from '../Components/NavBar/NavBar';
import Theme from "../Components/Theme";
import Card from "../Components/Card";
import "../css/Theme.css"
import ScrollContainer from 'react-indiana-drag-scroll'
import BackgroundVideo from "../img/background.mp4"

function Mapmonde() {

    const [themeSelected, setThemeSelected] = useState()

    return (
        <section
        >
            <video id="background-video" loop autoPlay>
    <source src={BackgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
</video>
            <NavBar />
            <div className="earth-container">

                <ScrollContainer className="earth">
                    <div
                        style={{ height: "38em" }}
                    >
                        {themeList.map(theme =>
                            <Theme
                                id="theme"
                                setThemeSelected={setThemeSelected}
                                title={theme.title}
                                image={theme.url}
                            />)
                        }
                    </div>
                </ScrollContainer>

            </div>
            <div style={{ display: "flex", gap: "1em" }}>
                {cardList
                    .filter(card => card.theme === themeSelected)
                    .flatMap(card => card.card)
                    .map(card => <Card description={card.description} image={card.image} title={card.title} />)}
            </div>
        </section>
    );

}

export default Mapmonde;