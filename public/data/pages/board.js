



                   
export default {    
    template: `
     <div>
       
     <div class="table100-body js-pscroll ps ps--active-x">

     <style>
     #peteTable td, #peteTable th{
         text-align:center;
     }
     </style>
   
       <table class="table table-bordered" id="peteTable">
           <thead>
               <tr class="row100 head">
                   <th colspan="1" style="width: 25px;font-size:26px; font-weight: 800;">CURRENCY</th>
                   <th v-for="(item,i) in rates" :key="i"  colspan="3" style="font-size:28px;text-align:center;font-weight: 800;">{{item.local_currency}}</th>
                   
               </tr>

              
           </thead>

           <tbody>
               <tr class="row100 body">
                   <td  style="font-size:24px; font-weight: 700;"><img src="./data/usd.png" alt="USD" style="height: 50px;  margin-top: 2px;"> USD</td>
                   <td v-for="(item,i) in rates" :key="i"  colspan="3" style="font-size:27px; font-weight: 700;"><span>Buying @ {{item.buy_rate}}</span> <br> <span>Selling @ {{item.sell_rate}}</span></td>
                   
               </tr>

               <!--
               <tr class="row100 body">
                   <td style="font-size:24px; font-weight: 700;"><img src="./data/zar.png" alt="USD" style="height: 50px; margin-top: 2px;">  ZAR</td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;"> -</td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;"> -</td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;"> -</td>
               </tr>



               <tr class="row100 body">
                   <td style="font-size:24px; font-weight: 700;"><img src="./data/gbp.png" alt="USD" style="height: 50px;  margin-top: 2px;"> GBP </td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;">-</td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;">-</td>
                   <td colspan="3" style="font-size:27px; font-weight: 700;">-</td>
               </tr>
               -->
      
           </tbody>
       </table>
        <br>

       <!-- Interbank Rate Table
       <table class="table table-bordered" id="peteTable" style="background: #00294aa1;">
            <tbody>
               <tr class="row100 body">
                    <td colspan="1" style="width: 160px;font-size:24px; font-weight: 700;"></td>
                    <td colspan="3" style="font-size:24px; font-weight: 700;"></td>
                    <td colspan="3" style="font-size:24px; font-weight: 700;">OFFICIAL BANK RATE</td>
                    <td colspan="3" style="font-size:24px; font-weight: 700;"> {{interbank}} </td>
               </tr>
           </tbody>

        
       </table>
       -->
   </div>

    </div>
    `,
    name: 'Board',
    
    data() {
      return {
        rates:[],
        interbank:"85.7467"
      }
    },
    mounted() {
        this.reload()
    },
    methods: { 
       async reload(){

            

               // console.log(logintext)
                await axios.get(`http://localhost:8081/getRateBoard`)
                  .then(response => {
                   
                    this.rates = response.data.data.one.recordset
                   
                  })
                  .catch(error => {    
                          
                    console.log(error);
                  });

               
            }
          
            
             
        
       

    },
    
  };