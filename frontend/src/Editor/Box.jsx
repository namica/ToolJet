import React, { memo } from 'react';
import { Button } from './Components/Button';
import { Image } from './Components/Image';
import { Text } from './Components/Text';
import { Table } from './Components/Table';
import { TextInput } from './Components/TextInput';

const AllComponents = {
    Button,
    Image,
    Text,
    TextInput,
    Table
}

let styles = {
    cursor: 'move',
};

export const Box = function Box({ id, yellow, preview, component, inCanvas, onComponentClick, onEvent, currentState, onComponentOptionChanged }) {
    const backgroundColor = yellow ? 'yellow' : '';

    console.log('rendering box', component);

    if(inCanvas) {
        styles = {
            ...styles,
        }
    }

    const ComponentToRender = AllComponents[component.component];

    return (<div style={{ ...styles, backgroundColor }} role={preview ? 'BoxPreview' : 'Box'}>

            {inCanvas ? 
                <ComponentToRender 
                    onComponentClick={onComponentClick}
                    onComponentOptionChanged={onComponentOptionChanged}
                    currentState={currentState}
                    onEvent={onEvent}
                    id={id} 
                    component={component}>
                </ComponentToRender>
            :
                <div className="row p-1 m-1">
                    <div className="col-md-3 component-image-holder">
                        <center><img src={component.icon}/></center>
                    </div>
                    <div className="col-md-9">
                        <span className="component-title" >{component.name}</span>
                        <small className="component-description">{component.description}</small>
                    </div>
                </div>
            }
		</div>);
};