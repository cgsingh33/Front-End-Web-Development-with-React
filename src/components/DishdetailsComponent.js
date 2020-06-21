import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap'


   function RenderComments({comments}){
        const cmnts = comments.map(comment =>{
            return(
                <li key={Comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    { new Intl.DateTimeFormat('en-US',{
                        year:'numeric',
                        month:'short',
                        day:'2-digit',
                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                    </li>
            )
        })

        return(
            <div>
                <h4> Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

function RenderDish({dish}) {
        if(dish != null){
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    
}

function DishDetails(props) {
    const dish =props.dish
    if(dish==null){
        return(
            <div></div>
        )
    }
    else{
    return(
        <div className="container">
        <div className='row'>
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments} />
        </div>
        </div>
        </div>
    )
   }
}
        

export default DishDetails