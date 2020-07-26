import React from 'react';
import { action } from '@storybook/addon-actions';
import {DialogItem} from "./DialogItem";


export default {
    title: 'DialogItem',
    component: DialogItem,
};

export const Text = () => <DialogItem id={1} name={'ййй'}/>

