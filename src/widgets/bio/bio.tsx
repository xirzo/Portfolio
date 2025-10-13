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
            </div>
        </section>
    )
}

export default Bio;
