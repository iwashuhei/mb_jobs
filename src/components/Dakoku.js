import React from 'react';
import PropTypes from 'prop-types';

export default function Dakoku({id,year,month}){
    return(
        <div>
            <h2>打刻コンポーネント</h2>
            <p>id :{id}</p>
            <p>year : {year}</p>
            <p>month :{month}</p>
        </div>
    )
}

Dakoku.PropTypes ={
    id:PropTypes.number,
    year:PropTypes.string,
    month:PropTypes.string
};

// TODO: id だけ受け取って、デフォルトは今の月とかにしたい
Dakoku.defaultProps = {
    id : 1,
    year : "2018",
    month : "06"
};