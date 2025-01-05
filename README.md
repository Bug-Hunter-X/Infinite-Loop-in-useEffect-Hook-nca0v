# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by the `useEffect` hook.  The `useEffect` hook is incorrectly used, leading to an infinite loop that crashes the application.

## Bug Description
The `useEffect` hook is designed to perform side effects based on changes in state or props. However, if the effect function modifies state in a way that triggers its own re-execution, an infinite loop will occur.  This example shows how this can happen when dependencies are not properly managed in the dependency array.

## Solution
The solution involves correctly defining the dependency array of the useEffect hook. 