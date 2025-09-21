import './Article.css';

function Article(props)
{
    return(
        <article>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repellat possimus hic et accusamus! Nam consequuntur tempore explicabo quasi tenetur molestias ad eius voluptatum? Quos odit impedit placeat quis aut?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo suscipit id nisi. Doloribus explicabo et exercitationem deleniti voluptates delectus accusamus corrupti dolores. Magnam adipisci architecto facere in doloremque molestias!</p> */}
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </article>
    )
}
export default Article;