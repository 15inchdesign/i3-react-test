import React from 'react';
import Fade from 'react-reveal/Fade';
// https://github.com/rnosov/react-reveal/issues/101
import img1 from '../assets/bunny.png';
import icon1 from '../assets/icons/investment.png';
import icon2 from '../assets/icons/handshake.png';
import icon3 from '../assets/icons/loud-speaker.png';

console.log(img1);
console.log(icon1);
console.log(icon2);
console.log(icon3);

class About extends React.Component {
    render(){
        return(
            <div className='container'>
                <main>
                    <section className='article'>
                     <div className='text'>
                        <h4 className='intro'>The new common language #More simple language</h4>
                            <p>
                            The European languages are members of the same family. 
                            Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. 
                            The languages only differ in their grammar, their pronunciation and their most common words.</p>
                            <p>
                            Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. 
                            To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. 
                            If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. 
                            The new common language will be more simple and regular than the existing European languages.
                            </p>
                            <div className='presentation'>
                              <Fade bottom>
                                <div className="row-1">
                                    <div className='icon-holder'>
                                    <img src={icon1} className='icon1' alt="investment"/>
                                    </div>
                                     <div className='text-p'>
                                        <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                                        a large language ocean.
                                        </p>
                                    </div>
                                </div>
                                <div className="row-2">
                                <div className='icon-holder'>
                                    <img src={icon2} className='icon1' alt="handshake"/>
                                </div>
                                    <div className='text-p'>
                                        <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                                        a large language ocean.
                                        </p>
                                    </div>
                                </div>
                                <div className="row-3">
                                    <div className='icon-holder'>
                                    <img src={icon3} className='icon1' alt="loud-speaker"/>
                                    </div>
                                    <div className='text-p'>
                                        <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                                        a large language ocean.
                                        </p>
                                    </div>
                                </div>
                             </Fade>
                            </div>
                        </div>
                     <img src={img1} className='placeholder hidde-placeholder' alt="bunny" />
                    </section>
                </main>
            </div>
        );
    }
}

export default About;