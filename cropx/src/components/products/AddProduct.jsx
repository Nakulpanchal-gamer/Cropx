import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const res = await axios.get("/category/categories");
            setCategories(res.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getSubcategoryByCategoryId = async (id) => {
        try {
            const res = await axios.get(`/subcategory/getsubcategorybycategory/${id}`);
            setSubcategories(res.data.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        data.farmerId = localStorage.getItem("id");

        if (!data.farmerId) {
            toast.error("You must be logged in as a farmer to add a product!");
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price_per_unit", data.price_per_unit);
        formData.append("unit" , data.unit)
        formData.append("quantity_available", data.quantity_available);
        formData.append("categoryId", data.categoryId);
        formData.append("subcategoryId", data.subcategoryId);
        formData.append("image", data.image[0]);
        formData.append("farmerId", data.farmerId);

        try {
            await axios.post("/product/addWithFile", formData);
            toast.success("Product added successfully! 🎉");
        } catch (error) {
            toast.error("Failed to add product ❌");
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light overflow-x-hidden">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-md-8 col-lg-7 col-xl-6 w-75">
                    <div className="card p-4 shadow-lg rounded-3 bg-white text-dark vh-90 overflow-auto">
                        <h2 className="text-center mb-4 text-danger">Add Product</h2>
                        <form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data" className="overflow-y-auto" style={{ maxHeight: "80vh" }}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Product Name</label>
                                <input type="text" className="form-control" {...register("name")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Description</label>
                                <textarea className="form-control" {...register("description")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Price per Unit</label>
                                <input type="number" className="form-control" {...register("price_per_unit")} />
                            </div>
                            <div>
                                <label className="form-label fw-semibold">Unit</label>
                                <select {...register("unit")}>
                                    <option value="">Select Unit</option>
                                    <option value="kg">Kg</option>
                                    <option value="dozen">Dozen</option>
                                    <option value="liters">Liters</option>
                                    <option value="pieces">Pieces</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Quantity Available</label>
                                <input type="number" className="form-control" {...register("quantity_available")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Category</label>
                                <select className="form-select" {...register("categoryId")} onChange={(event) => getSubcategoryByCategoryId(event.target.value)}>
                                    <option>Select Category</option>
                                    {categories?.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Subcategory</label>
                                <select className="form-select" {...register("subcategoryId")}>
                                    <option>Select Subcategory</option>
                                    {subcategories.length > 0 ? (
                                        subcategories.map((sub) => (
                                            <option key={sub._id} value={sub._id}>{sub.name}</option>
                                        ))
                                    ) : (
                                        <option disabled>No subcategories available</option>
                                    )}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Upload Product Image</label>
                                <input type="file" className="form-control" {...register("image")} />
                            </div>
                            <button type="submit" className="btn btn-danger w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
