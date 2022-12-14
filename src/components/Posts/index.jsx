import { Component } from "react";
import { PostCard } from "../Cards";
import './styles.css'

export class Posts extends Component{
    render ( ) {
        return (
            <div className="posts">
            {this.props.posts.map( post => (
                <PostCard
                key={post._id}
                name={post.name}
                films={post.films}
                tvShows={post.tvShows}
                shortFilms={post.shortFilms}
                imageUrl={post.imageUrl}
                />
            ))}
          </div>
        )
    }
}