```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: The dependency array is empty, so the effect runs only once after the initial render.
    // For example, this could be used for fetching data once when the component mounts.
    // Add a cleanup function if an asynchronous operation is performed
    const intervalID = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return <div>Count: {count}</div>;
}
```