import React from "react";
import './main.global.css';
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider, postsContext } from "./shared/context/PostsContext";
import { PostBlock } from "./shared/CardsList/PostsBlock";


export function Index() {
    const [token] = useToken()
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>                    
                        <PostsContextProvider>
                            <CardsList />
                            <PostBlock/>
                        </PostsContextProvider>
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}
