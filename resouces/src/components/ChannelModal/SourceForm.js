import React from "react";
import {Form, Input} from "antd";
import Modal from "../Modal";


let SourceForm = React.createClass({

	render(){
		const FormItem = Form.Item;
		const {form, visible, onSave, onCancel} = this.props;
		const {getFieldProps} = form;
		const layouts = {
			labelCol: {span: 4},
			wrapperCol: {span: 18}
		};

		const agentNameProps = getFieldProps("name", {
			rules: [{required: true, message: "Source名称不可以为空"}]
		});

		return (
			<Modal title="新建Source" visible={visible} onCancel={onCancel} onSave={onSave}>
				<Form  horizontal>
					<FormItem label="Source：" {...layouts} required>
						<Input {...agentNameProps} placeholder="请输入Sources名称"/>
					</FormItem>
				</Form>

			</Modal>
		);
	}
});

SourceForm.propTypes = {
	visible:React.PropTypes.bool.isRequired,
	onSave: React.PropTypes.func.isRequired,
	onCancel: React.PropTypes.func.isRequired,
};


SourceForm = Form.create()(SourceForm);

export default SourceForm;

