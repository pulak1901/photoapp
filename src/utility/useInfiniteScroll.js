
import { useRef, useCallback } from "react";

const useInfiniteScroll = (callback, isFetching) => {
	// Store a DOM node that will persist regardless of re-renders
	const observer = useRef();

	// Create function to be memoized
	const lastElementRef = useCallback(
		(node) => {
			if (isFetching) return;

			// reset observer
			if (observer.current) observer.current.disconnect();

			// create a new intersection observer
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					// incase there is an intersection, call the callback
					callback();
				}
			});

			//if there is a node, let the intersection observer watch that node
			if (node) observer.current.observe(node);
		},
		[callback, isFetching]
	);

	// return memoized function reference
	return [lastElementRef];
};

export default useInfiniteScroll;