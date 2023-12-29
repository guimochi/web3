import { useContext } from 'react';
import { Context } from '../contexts/AnecdoteContext';
import { useNavigate } from 'react-router-dom'; // import useHistory
import { Button, Input, Form } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const CreateNew = () => {
	const {
		content,
		setContent,
		author,
		setAuthor,
		info,
		setInfo,
		addNew,
		setNotification,
	} = useContext(Context);
	const navigate = useNavigate('');

	const onFinish = (values) => {
		console.log('Success:', values);
		addNew({
			content: values.content,
			author: values.author,
			info: values.info,
			votes: 0,
		});
		setNotification(`a new anecdote ${content} created!`);
		navigate('/');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<h2>create a new anecdote</h2>
			<Form
				name='new anecdote'
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='content'
					name='content'
					rules={[
						{
							required: true,
							message: 'Please input a content!',
						},
					]}
				>
					<Input
						// value={content}
						// onChange={(e) => setContent(e.target.value)}
						placeholder='content'
					/>
				</Form.Item>
				<Form.Item
					label='author'
					name='author'
					rules={[
						{
							required: true,
							message: 'Please input an author!',
						},
					]}
				>
					<Input
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						placeholder='author'
					/>
				</Form.Item>
				<Form.Item
					label='info'
					name='info'
					rules={[
						{
							required: true,
							message: 'Please input an info!',
						},
					]}
				>
					<Input
						name='info'
						value={info}
						onChange={(e) => setInfo(e.target.value)}
						placeholder='url for more info'
					/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button
						type='primary'
						icon={<PlusCircleOutlined />}
						htmlType='submit'
					>
						create
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default CreateNew;
