"use client";
import React, { useState, useEffect } from 'react';
import dataSelect from '../dataSelect';
interface Product {
  title: string;
}

// تعريف واجهة للخدمة والمنتجات المرتبطة بها
interface Service {
  id: string;
  product: Product[];
}

// بيانات الخدمات والمنتجات
const services: Service[] = dataSelect;

const ServiceProductForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const service = services.find((service) => service.id === selectedService);
    if (service) {
      setProducts(service.product);
    } else {
      setProducts([]);
    }
  }, [selectedService]);

  return (
    <>
  
      <div className="form-group">

        <select name='service'
          className="form-control"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option disabled value=''>يرجى تحديد الخدمة</option>
          {services.map((service, index) => (
            <option key={index} value={service.id}>{service.id}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select name='product' className="form-control" >
          <option disabled value=''>يرجى تحديد المنتج</option>
          {products.map((product, index) => (
            <option key={index} value={product.title}>{product.title}</option>
          ))}
        </select>
      </div>
      </>
  );
};

export default ServiceProductForm;
