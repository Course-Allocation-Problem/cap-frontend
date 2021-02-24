import React, {useState, useEffect} from 'react';
import './Board.css';
import { API } from "../api-service";

function Board(props)
{

    const [course_group, setCourse_group] = useState([]);

    useEffect(()=>{
      API.getLast_ranking()
        .then(resp => setCourse_group(resp))
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <div className='container'>
                <div className='course_group'>
                    <h1>דירוג עדיפויות</h1>
                    <div>{ course_group.map((course_group, index) => {
                        return (
                            <div key={index} className='item'>
                                <div className='name'>{course_group.name}</div>
                                <div className='index'>{index+1}</div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <button class="btn btn-lg btn-primary" onClick={props.EditClicked}>עריכה</button>
        </div>
        
    );
}

export default Board