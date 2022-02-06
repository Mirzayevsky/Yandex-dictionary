import React, { useEffect, useState } from "react";
import {
    Container, Content, Dictionary, Nav,
    Translation, ResponseWrapper,
    Pronounciation, Text, Pos, Tr, Syn, Gen, Fr,TranslatedText, FirstRow
} from "./style";
import axios from "axios";

function YandexDictionary() {

    const [word, setWord] = useState("");
    const [langValue, setLangValue] = useState("en-ru");
    const [response, setResponse] = useState();
   
    const key = "dict.1.1.20201201T163137Z.5c6593134cc1fcb4.7ea53295a0777094051036688cd986b837fc9391";
    const mainLink = (`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=${langValue}&text=${word}`)

    const getData = () => {
        axios.get(mainLink)
            .then((res) => {
                setResponse(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData()
    }, [word])

    return (
        <Dictionary>
            <Nav>< span>Yandex</span> Dictionary</Nav>
            <Container>
                <Content>
                    <select value={langValue} onChange={(e) => { setLangValue(e.target.value) }}>
                        <option value="ru-ru" > Russian   - Russian</option>
                        <option value="ru-en" > Russian  - English</option>
                        <option value="en-ru" > English  - Russian</option>
                        <option value="ru-pl"> Russian  - Polandish</option>
                        <option value="ru-uk">Russian  - Ukrainian</option>
                        <option value="ru-de"> Russian  - German</option>
                        <option value="ru-fr"> Russian  - French</option>
                        <option value="ru-es"> Russian  - Spanish</option>
                        <option value="ru-it"> Russian  - Italian</option>
                        <option value="ru-tr"> Russian  - Turkish</option>
                        <option value="ru-ru"> Russian  - Russian</option>
                        <option value="en-en"> English  - English</option>
                        <option value="en-de"> English  - German</option>
                        <option value="en-fr"> English  - French</option>
                        <option value="en-es"> English  - Spanish</option>
                        <option value="en-it"> English  - Italian</option>
                        <option value="en-tr"> English  - Turkish</option>
                        <option value="pl-ru"> Polandish  - Russian</option>
                        <option value="uk-ru"> Polandish  - Russian</option>
                        <option value="de-ru"> German  - Russian</option>
                        <option value="de-en"> German  - English</option>
                        <option value="fr-ru"> French  - Russian</option>
                        <option value="fr-enl"> French  - English</option>
                        <option value="es-ru"> Spanish  - Russian</option>
                        <option value="se-en"> Spanish  - English</option>
                        <option value="it-ru"> Italian  - Russian</option>
                        <option value="it-en"> Italian  - English</option>
                        <option value="tr-ru"> Turkish  - Russian</option>
                        <option value="tr-en"> Turkish  - English</option>
                    </select>
                    <input value={word} onChange={(e) => setWord(e.target.value)} name="" placeholder="Type something to translate" />
                </Content>
                <Translation >
                    {response?.def?.map(({ text, ts, pos, tr }) => (
                        <ResponseWrapper>
                            <FirstRow>
                                    <Text>{text}</Text>
                                    <Pronounciation>[{ts}]</Pronounciation>
                                    <Pos>{pos}</Pos>
                            </FirstRow>
                            <Tr>{tr?.map(({ text,  gen,  syn }) => (
                                <> 
                                    <FirstRow>
                                        <TranslatedText>{text} ,</TranslatedText>
                                        <Gen>{gen}</Gen>
                                        {syn?.map(({ text,}) => (
                                            <div>
                                                <TranslatedText>{text},</TranslatedText>
                                            </div>
                                        ))}
                                    </FirstRow>
                                    <>
                                        {tr?.mean?.map(({ text }) => (
                                            <TranslatedText>{text}</TranslatedText>
                                        ))}

                                    </>

                                    <>
                                        {tr?.ex?.map(({ text }) => {
                                            <>
                                                <TranslatedText>{tr?.ex?.text}</TranslatedText>
                                                {tr?.map(({ text }) => (
                                                    <TranslatedText>
                                                        {text}
                                                    </TranslatedText>
                                                ))}
                                            </>

                                        })}

                                    </>

                                </>

                            ))}</Tr>

                        </ResponseWrapper>
                    ))
                    }
                </Translation>
            </Container>
        </Dictionary>
    )
}
export default YandexDictionary;
