import React, {useEffect, useMemo, useRef, useState} from "react";
import {IOptions, IPost} from "../types";

export const useFilters = (posts: IPost[], {sort, filter}: IOptions): {sortedPosts: IPost[]} => {
    const currentPosts = useRef<IPost[]>(posts)

    useMemo(() => {
        if(!filter.name || !filter.value) return null

        currentPosts.current = posts.filter(post => {
            return post[filter.name].includes(filter.value)
        })
    }, [currentPosts, filter.name, filter.value])

    useMemo(() => {
        switch (sort) {
            case "ASC":
                currentPosts.current = [...currentPosts.current].sort((n1, n2) => n1.id - n2.id)
                break
            case "DESC":
                currentPosts.current = [...currentPosts.current].sort((n1, n2) => n2.id - n1.id)
                break
        }
    }, [sort, currentPosts])



    return { sortedPosts: currentPosts.current }
}