package edu.yavirac.oportunidadbackend.feature.productos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/productos")
public class ProductosController {

    @Autowired
    ProductosService productosService;

    @PostMapping("/save")
    public Productos save(@RequestBody Productos productos){
        return productosService.save(productos);
    }

    @GetMapping("/findById/{productoId}")
    public Productos findById(@PathVariable long productoId) {
        return productosService.findById(productoId);
    }

    @PutMapping("/update")
    public Productos update(@RequestBody Productos productos){
        return productosService.save(productos);
    }
    
    @DeleteMapping("/deleteById/{productoId}")
    public void deleteById(@PathVariable long productoId){
        productosService.deleteById(productoId);
    }

    @GetMapping("/findAll")
    public List findAll(){
        return productosService.findAll();
    }

    @GetMapping("/findByName/{term}")//no tocar por que esto busca el producto,alado de las migas de pan
    public List<Productos> findByName(@PathVariable String term){
        return productosService.findByName(term+"%"); 
    }
}