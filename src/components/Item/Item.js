import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import "./Item.css";

export const Item = ({inversiones}) => {
    return (
        <>
        <div className="card__dolares">
            <h5 className="dolarNombre">{inversiones.denominacion}</h5>
            <img className="dolarFoto" src={inversiones.foto} alt={inversiones.descripcion}/>
            <h5 className="dolarPrecio">${inversiones.valor}</h5>
            <div>
                <ItemCount initial={1} stock={10}/>
            </div>
        </div>
        </>
    );
};

