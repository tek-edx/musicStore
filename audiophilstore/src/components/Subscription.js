import React from 'react';
import styled from 'styled-components';
import { Form, Formik ,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

function Subscription() {
   
    let initialValues = {
        name: '',
        email: ''
    }

   const onSubmit = (values) => {
    
    
        console.log('submit value',values)
    }
    
    
    // let validate = (values) => {
    //     let errors = {
    //         name: '',
    //         email: ''

    //     }

    //     if (!values.name) {
    //         errors.name = 'Required'
    //     }

    //     if (!values.email) {
    //         errors.email = 'Required'
    //     }

    //     return errors
    // }

    const validationSchema = Yup.object({
     
        name: Yup.string().required('Required!'),
        email: Yup.string().required('Required')
    });
   

      
   
        
    
    
    return (
        <SubscriptionStyle>
            <Formik
            initalValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>

            <Form>

                <section>

            <label htmlFor="name">Name
             <Field type="text" id='name' name='name' placeholder= "name"
           
            /> 
                            <ErrorMessage name='name' />
                </label>
                
                </section>
       
                <section>

             <label htmlFor="email">Email
             <Field type="email" id='email' name='email' placeholder='email' 
           
             />
                            <ErrorMessage name='email' /></label>

                  
                </section>
             
             <button type='submit'>Subscribe</button>

            </Form>
            </Formik>
        </SubscriptionStyle>
    )
}

const SubscriptionStyle = styled.form`
width: 98%;
height: 50vh;
margin: 0px auto;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke;

input{
    height: 3rem;
    width: 100% 100%;
    
    padding: 0;
    margin: 1rem auto;
    border: black solid 1px;
    border-radius: 10px;
   

}

button{
    height: 3rem;
    min-width: 100%;
    border-radius: 10px;
    margin: auto;
    border: none;
    background-color: green;
    color: white;
    
}


`

export default Subscription
