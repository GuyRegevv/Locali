import React from 'react';
import { useState } from 'react';
import mockData from '/public/mockData.json';
import { ListCard } from './ListCard';

export const NumOfLists = mockData.lists.length

export const ListsLayout = ({ lists }) => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lists.map(list => (
                    <div key={list.id} className="w-full">
                        <ListCard list={list} />
                    </div>
                ))}
            </div>
        </div>
    )
}