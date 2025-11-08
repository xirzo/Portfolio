import Card from '../../shared/card/card';
import './bio.css'

export interface BioProps {
    email: string;
}

function Bio({ email }: BioProps) {
    return (
        <section>
            <h3>
                About me
            </h3>

            <div className='grid-container'>
                <Card>
                    <div className="bio-card-content">
                        <h4>
                            <i className="fa-solid fa-user" />
                            &nbsp;
                            Bio
                        </h4>
                        <div className="content-section">
                            <p>
                                Alongside my studies at ITMO, I dedicate time to experimenting with home lab setups and writing code for personal projects.
                            </p>

                            <p>
                                I like figuring out how things work by building them and also really favor recreational programming.
                            </p>

                            <p>
                                Looking forward to applying this approach to real-world development problems.
                            </p>

                            <p>
                                Already had real-life work experience on online math school <a target='_blank' rel='noopener noreferrer' href='https://minimath239.ru'> minimath239</a> as a frontend developer.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="bio-card-content">
                        <h4>
                            <i className="fa-solid fa-book" />
                            &nbsp;
                            Contact information
                        </h4>

                        <div className="content-section">
                            <h5>
                                <i className="fa-solid fa-flask" />
                                &nbsp;
                                ITMO University
                            </h5>
                            <p>
                                Bachelor of Software Engineering
                                <br />
                                Expected Graduation: 2028
                            </p>
                        </div>

                        <div className="content-section">
                            <h5>
                                <i className="fa-solid fa-envelope" />
                                &nbsp;
                                Email
                            </h5>
                            <p>
                                {email}
                            </p>
                        </div>

                        <div className="content-section">
                            <h5>
                                <i className="fa-solid fa-location-dot" />
                                &nbsp;
                                Location
                            </h5>
                            <p>
                                Saint-Petersburg, Russia
                            </p>
                        </div>
                    </div>
                </Card>
            </div >
        </section >
    )
}

export default Bio;
