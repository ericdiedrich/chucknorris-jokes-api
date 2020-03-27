import React, { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fireEvent } from '@testing-library/react';

function MultiJokes() {
  const [numJokes, setNumJokes] = useState(50);
  const [jokes, setJokes] = useState([]);
  const [isLoading] = useState(true);

    useEffect(() => {
        fetch(`http://api.icndb.com/jokes/random/${numJokes}`)
        .then(res => res.json())
        .then(json => displayJokes(json))
        .catch(err => console.log(err))
    },[numJokes]);

    const displayJokes = (data) => {
        setJokes(data.value);
    }

    const observer = React.useRef(
        new IntersectionObserver((entries) =>{
            const first = entries[0];
            console.log(first)
            if (first.isIntersecting){
              console.log('loading');
                loadJokes()
            }
        },
        {threshold:1})
    );

    const [element, setElement] = React.useState(null);
    React.useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if(currentElement){
            currentObserver.observe(currentElement)
        }

        return () => {
            if(currentElement){
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);
    
    const loadJokes = () => {
       return jokes.map((j, i) => {
            return <p ref={setElement} key={j.id}> {`"${j.joke}"`}</p>
        })
    }

  return (
    <div className=''>
      <h1 className="multi-header">Chuck Norris Jokes</h1>
      <div className="content">
        {jokes.map((j, i) => {
          return <p ref={setElement} key={j.id}> {`"${j.joke}"`}</p>
        })}
        {isLoading ? <p>Loading...</p> : <p>not loading</p>}

        {/* <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  }>
  {items}
</InfiniteScroll> */}
      </div>
    </div>
  );
}

export default MultiJokes;
