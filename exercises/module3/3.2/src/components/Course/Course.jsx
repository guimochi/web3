import Total from 'components/Total/Total';
import Part from 'components/Part/Part';

const Course = ({ course }) => {
	return (
		<>
			<h1>{course.name}</h1>
			{course.parts.map((part) => (
				<Part key={part.id} part={part} />
			))}
			<Total parts={course.parts} />
		</>
	);
};

export default Course;
