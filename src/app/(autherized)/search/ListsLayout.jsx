import React from 'react';
import { useState } from 'react';
import { ListCard } from './ListCard';


export const ListsLayout = ({ lists, onSelectList, sort = 'relevance', onSortChange, onReset }) => {
    return (
        <div className="container mx-auto px-4 py-2">
            <div className="mb-3 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">{lists?.length || 0}</span> results
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-sm text-gray-600">Sort</label>
                    <select
                        id="sort"
                        className="h-9 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={sort}
                        onChange={(e) => onSortChange?.(e.target.value)}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="rating">Rating</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
            {(!lists || lists.length === 0) && (
                <div className="w-full py-16 border border-dashed border-gray-200 rounded-xl bg-white text-center">
                    <div className="max-w-md mx-auto px-4">
                        <p className="text-lg font-semibold text-gray-800">No results found</p>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting or clearing your filters to see more lists.</p>
                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={onReset}
                                className="h-10 px-4 rounded-md border border-gray-300 bg-white text-gray-800 hover:border-gray-400"
                            >
                                Reset filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lists.map(list => (
                    <div
                      key={list.id}
                      className="w-full cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => onSelectList && onSelectList(list)}
                      onKeyDown={(e) => { if (e.key === 'Enter') onSelectList && onSelectList(list); }}
                    >
                        <ListCard list={list} />
                    </div>
                ))}
            </div>
        </div>
    )
}