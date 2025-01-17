import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return <Loading />;
    }

    if(errMess) {
        return <h4>{errMess}</h4>;
    }

    return (
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Fade in duration={600}>
                    <RenderCard 
                        item={props.campsite}
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />
                    </Fade>
                </div>
                <div className="col-md m-1">
                    <Fade in duration={800}>
                    <RenderCard
                        item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}
                    />
                    </Fade>
                </div>
                <div className="col-md m-1">
                    <Fade in duration={1000}>
                    <RenderCard 
                        item={props.partner}
                        isLoading={props.partnerLoading}
                        errMess={props.partnerErrMess} 
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Home;