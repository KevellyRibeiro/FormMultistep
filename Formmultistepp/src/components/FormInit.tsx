import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FormOne } from './FormOne';
import {FormTwo} from './FormTwo';
import { FormTree } from './FormTree';
import './css/FormInit.css';

export default function FormInit() {
    const [step, setSteps] = useState<number>(1);

    const stepActivate = (stepValue: number) => {
        setSteps(stepValue);
    };

    return (
        <div className="ContentForm">
            <div className="stepFormCss">

                <div className={`emoji-form-one ${step === 1 ? 'active' : ''}`}>
                    <VscAccount />
                    <div className="nameMenu"><p  style={{ fontSize: "15px" ,fontFamily:"cursive",letterSpacing:"1.3px"}}>Identificação</p></div>
                </div>
                <div className={`emoji-form-two ${step === 2 ? 'active' : ''}`}>
                    <FaRegStar />
                    <div className="nameMenu"><p  style={{ fontSize: "15px" ,fontFamily:"cursive" ,letterSpacing:"1.3px" }}>Avaliação</p></div>
                </div>
                <div className={`emoji-form-three ${step === 3 ? 'active' : ''}`}>
                    <IoPaperPlaneOutline />
                    <div className="nameMenu"><p  style={{ fontSize: "15px" ,fontFamily:"cursive" ,letterSpacing:"1.3px"}}>Envio</p></div>
                </div>
            </div>
            <div>
                
            </div>

            <div className="area-checked-input">
                {step === 1 && <FormOne setStep={setSteps} />}
                {step === 2 && <FormTwo setStep={setSteps}/>}
                {step === 3 && <FormTree/>}
            </div>
            
            <div className="btn-activies">
                {step > 1 && (
                    <button className="btn-step-back" onClick={() => stepActivate(step - 1)}>
                        Voltar
                    </button>
                )}
                
            
            </div>
            <div className='homePage'>

                <h1>Gostou da nossa interação? </h1>
                <span>Sua opinião é muito importante para mim! Se você puder, avalie nossa conversa. Seu feedback me ajuda a melhorar cada vez mais para oferecer um suporte ainda melhor.</span>
                <div>Ao compartilhar sua opinião, você ajuda a melhorar a qualidade do suporte que ofereço. Cada feedback é uma oportunidade de aprendizado, permitindo que eu entenda o que está funcionando bem e onde posso melhorar. Sua avaliação não só contribui para aprimorar futuras interações, mas também garante que você e outros usuários tenham uma experiência ainda mais satisfatória. Obrigado por colaborar!</div>
            </div> 
        </div>
    );
}