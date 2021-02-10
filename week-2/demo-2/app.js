function App(props) {
  const guyOne = {age: 100, species: "Cool guy", image: "./header.webp"}
  const guyTwo = {age: 101, species: "Lame guy", image: "./frown.png"}

  return (
    <div>
      <Header name="Luke Skywalker" />
      <Body person={guyOne} />
      <Body person={guyTwo} />
      <Footer />
    </div>
  );
}
