import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Modal, Button, ModalHeader, ModalBody, Label, Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import { Control, LocalForm, Errors} from 'react-redux-form'

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
                <CommentForm />
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
        <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr/>
        </div>
    </div>
        <div className='row'>
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
        </div>
        </div>
        <Modal>

        </Modal>
        </div>
    )
   }
}
        

export default DishDetails

const required =(val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

export class CommentForm extends Component{
    constructor(){
        super()
        this.state={
            isModalOpen: false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }
    handleSubmit(values){
        this.toggleModal()

        console.log('comment:', values)
        alert('comment' + JSON.stringify(values))
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>

                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                                <LocalForm onSubmit={(values) =>this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Control.select>
                
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                    <Label htmlFor="author" md={12}>Your name</Label>
                                    <Col md={12}>
                                        <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" 
                                        validators={{ required, minLength:  minLength(3), maxLength: maxLength(15)}} />
                                        <Errors className="text-danger" model=".author" show="touched" 
                                        messages={{ 
                                            required: 'Required', 
                                            minLength: 'Must be greater than 3 characters', 
                                            maxLength: 'Must be 15 charaters or less'}} />
                                    </Col>
                                    </Row>

                                <Row className="form-group">
                                    <Label htmlFor="feedback" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".message" id="message" name="message" rows="6" className="form-control" 
                                        validators={{ required }} />
                                        <Errors className="text-danger" model=".message" show="touched" 
                                        messages={{ required: 'Required'}} />
                                    </Col>
                                </Row>

                                <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}