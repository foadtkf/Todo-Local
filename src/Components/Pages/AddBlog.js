
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const blogs =JSON.parse(localStorage.getItem('blogs')||"[]")
    blogs.push(data)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast('Blog is added successfully')
  };
    return (
        <div className='my-5'>
            <div className="w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-3">
          <input type="text" class="form-control" id="floatingInput" {...register("heading")} placeholder="Heading"></input>
            
          </div>
          <Form.Select class="form-control mb-3" aria-label="Default select example" {...register("type")}>
      <option value="tech">Tech</option>
      <option value="entertainment">Entertainment</option>
      <option value="community">Community</option>
    </Form.Select>
          <div className=" mb-3">
          <input type="text" class="form-control" id="floatingInput" {...register("image")} placeholder="Image URL"></input>
          </div>
          <div className=" mb-3">
          <Form.Control as="textarea" placeholder="Description" aria-label="With textarea"  {...register("description")}/>
          </div>
            <input className="btn btn-primary w-100 text-center" type="submit" value="Submit" />
        </form>
      </div>
        </div>
    );
};

export default AddBlog;