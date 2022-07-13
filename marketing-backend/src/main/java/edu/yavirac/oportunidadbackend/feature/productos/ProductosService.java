package edu.yavirac.oportunidadbackend.feature.productos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {
    
    @Autowired
    ProductosRepository productosRepository;

    //Crear 
    public Productos save(Productos productos){
        return productosRepository.save(productos);
    }

    //Read
    public Productos findById(long productoId){
        return productosRepository.findById(productoId).orElse(new Productos());
    }

    //actualizar = crear

    //delete
    public void deleteById(long productoId){
        productosRepository.deleteById(productoId);
    }

    //registros de permiso en una sola a traves de una lista

    public List<Productos>findAll(){
        return productosRepository.findAll();
    }
}