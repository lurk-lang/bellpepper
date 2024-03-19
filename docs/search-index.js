var searchIndex = new Map(JSON.parse('[\
["bellpepper",{"doc":"","t":"QCQCKCCCMCCCCCCHFGPPPNNNNNNNNNNNNNNNHHNNNNNNNNNNNNNNNNNNNNNNNNNHNNHHHHHFNNNNNNNNNNNNNNNNNNHHHHHFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNHHHFNNNNNNNNNNNNNNNNNNNNNNNKIMCMNMCMMCFNNNNNNNNNNNNNNNNNNNFNNNNNNNNNNNNNNNNNNNNNNNNNKFNNNNNNNNNNNNNNNNNNMNNNNNNNNMMMNNNNNNNNNN","n":["and","gadgets","or","util_cs","Assignment","blake2s","boolean","boolean_utils","get","lookup","multieq","multipack","num","sha256","uint32","blake2s","AllocatedBit","Boolean","Constant","Is","Not","alloc","alloc_conditionally","and","and","and_not","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","constant","enforce_equal","field_into_allocated_bits_le","field_into_boolean_vec_le","fmt","fmt","from","from","from","get_value","get_value","get_variable","into","into","is_constant","lc","nor","not","or","sha256_ch","sha256_maj","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","u64_into_boolean_vec_le","xor","xor","and_v","or_v","or_v_unchecked_for_optimization","lookup3_xy","lookup3_xy_with_conditional_negation","MultiEq","alloc","alloc_input","borrow","borrow_mut","drop","enforce","enforce_equal","fmt","from","get_root","into","new","one","pop_namespace","push_namespace","try_from","try_into","type_id","bytes_to_bits","bytes_to_bits_le","compute_multipacking","pack_bits","pack_into_inputs","AllocatedNum","Num","add","add","add_bool_with_coeff","alloc","alloc_infallible","alloc_input","alloc_maybe_input","assert_nonzero","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","conditionally_reverse","deserialize","fmt","fmt","from","from","from","get_value","get_value","get_variable","inputize","into","into","lc","mul","scale","serialize","square","to_bits_le","to_bits_le_strict","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","zero","sha256","sha256_block_no_padding","sha256_compression_function","UInt32","addmany","alloc","borrow","borrow_mut","clone","clone_into","constant","fmt","from","from_bits","from_bits_be","into","into_bits","into_bits_be","rotr","sha256_ch","sha256_maj","shr","to_owned","try_from","try_into","type_id","xor","Comparable","Constraint","aux","bench_cs","constraints","delta","inputs","metric_cs","num_constraints","num_inputs","witness_cs","BenchCS","alloc","alloc_input","borrow","borrow_mut","default","enforce","fmt","from","get_root","into","new","new","num_constraints","num_inputs","pop_namespace","push_namespace","try_from","try_into","type_id","MetricCS","alloc","alloc_input","aux","borrow","borrow_mut","constraints","default","enforce","fmt","from","get_root","inputs","into","new","num_constraints","num_constraints","num_inputs","num_inputs","pop_namespace","pretty_print","pretty_print_list","push_namespace","try_from","try_into","type_id","SizedWitness","WitnessCS","alloc","alloc_input","allocate_empty","aux_assignment","aux_slice","borrow","borrow_mut","clone","clone_into","enforce","eq","extend","extend_aux","extend_inputs","fmt","from","from_assignments","generate_witness","generate_witness_into","generate_witness_into_cs","get_root","input_assignment","inputs_slice","into","is_extensible","is_witness_generator","new","num_aux","num_constraints","num_inputs","pop_namespace","push_namespace","scalar_aux","scalar_inputs","to_assignments","to_owned","try_from","try_into","type_id","with_capacity"],"q":[[0,"bellpepper"],[4,"bellpepper::gadgets"],[15,"bellpepper::gadgets::blake2s"],[16,"bellpepper::gadgets::boolean"],[66,"bellpepper::gadgets::boolean_utils"],[69,"bellpepper::gadgets::lookup"],[71,"bellpepper::gadgets::multieq"],[90,"bellpepper::gadgets::multipack"],[95,"bellpepper::gadgets::num"],[142,"bellpepper::gadgets::sha256"],[145,"bellpepper::gadgets::uint32"],[169,"bellpepper::util_cs"],[180,"bellpepper::util_cs::bench_cs"],[200,"bellpepper::util_cs::metric_cs"],[226,"bellpepper::util_cs::witness_cs"],[268,"bellpepper_core::constraint_system"],[269,"core::result"],[270,"alloc::vec"],[271,"ff"],[272,"bellpepper_core::constraint_system"],[273,"ff"],[274,"core::fmt"],[275,"bellpepper_core::lc"],[276,"alloc::string"],[277,"core::convert"],[278,"core::ops::function"],[279,"core::fmt"],[280,"serde::de"],[281,"serde::de"],[282,"serde::ser"],[283,"core::cmp"]],"d":["","Self-contained sub-circuit implementations for various …","","","This basically is just an extension to <code>Option</code> which allows …","The BLAKE2s hash function with personalization support.","Gadgets for allocating bits in the circuit and performing …","","","Window table lookup gadgets.","","Helpers for packing vectors of bits into scalar field …","Gadgets representing numbers in the scalar field of the …","Circuits for the SHA-256 hash function and its internal …","Circuit representation of a <code>u32</code>, with helpers for the […","","Represents a variable in the constraint system which is …","This is a boolean value which may be either a constant or …","Constant (not an allocated variable)","Existential view of the boolean variable","Negated view of the boolean variable","Allocate a variable in the constraint system which can …","Allocate a variable in the constraint system which can …","Performs an AND operation over the two operands, returning …","Perform AND over two boolean operands","Calculates <code>a AND (NOT b)</code>.","","","","","","","","","Construct a boolean from a known constant","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Calculates <code>(NOT a) AND (NOT b)</code>.","Return a negated interpretation of this boolean.","Perform OR over two boolean operands","Computes (a and b) xor ((not a) and c)","Computes (a and b) xor (a and c) xor (b and c)","","","","","","","","","","Performs an XOR operation over the two operands, returning …","Perform XOR over two boolean operands","Variadic and.","Variadic or.","Unchecked variadic or.","Performs a 3-bit window table lookup. <code>bits</code> is in …","Performs a 3-bit window table lookup, where one of the …","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","Takes a sequence of booleans and exposes them as a single …","Takes a sequence of booleans and exposes them as compact …","","","","","","Allocate a <code>Variable(Aux)</code> in a <code>ConstraintSystem</code>.","Allocate a <code>Variable(Aux)</code> in a <code>ConstraintSystem</code>. Requires an","Allocate a <code>Variable(Input)</code> in a <code>ConstraintSystem</code>.","Allocate a <code>Variable</code> of either <code>Aux</code> or <code>Input</code> in a …","","","","","","","","","","Takes two allocated numbers (a, b) and returns (b, a) if …","","","","Returns the argument unchanged.","","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","Convert the allocated number into its little-endian …","Deconstructs this allocated number into its boolean …","","","","","","","","","","","","","Represents an interpretation of 32 <code>Boolean</code> objects as an …","Perform modular addition of several <code>UInt32</code> objects.","Allocate a <code>UInt32</code> in the constraint system","","","","","Construct a constant <code>UInt32</code> from a <code>u32</code>","","Returns the argument unchanged.","Converts a little-endian byte order representation of bits …","","Calls <code>U::from(self)</code>.","Turns this <code>UInt32</code> into its little-endian byte order …","","","Compute the <code>ch</code> value <code>(a and b) xor ((not a) and c)</code> during …","Compute the <code>maj</code> value (a and b) xor (a and c) xor (b and c)","","","","","","XOR this <code>UInt32</code> with another <code>UInt32</code>","","","","","","","","","","The <code>Comparable</code> trait allows comparison of two constraint …","Support for efficiently generating R1CS witness using …","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","A <code>ConstraintSystem</code> which calculates witness values for a …","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,4,4,4,12,12,12,4,12,12,4,12,4,12,4,12,4,4,4,0,0,12,4,12,4,4,12,4,12,12,4,4,4,12,4,4,4,4,12,4,12,4,12,4,12,4,0,12,4,0,0,0,0,0,0,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,0,0,0,0,0,0,0,21,22,22,21,21,21,21,21,21,22,21,22,21,22,21,22,21,21,21,22,21,22,22,21,22,21,21,21,22,22,21,22,21,21,21,21,21,22,21,22,21,22,21,22,22,0,0,0,0,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,0,0,39,0,39,39,39,0,39,39,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,0,0,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,46,46,46,44,44,44,44,44,44,44,46,46,46,44,44,44,44,44,44,44,44,44,44],"f":[0,0,0,0,0,0,0,0,[1,[[3,[-1,2]]],[]],0,0,0,0,0,0,[[-2,[5,[4]],[5,[6]]],[[3,[[7,[4]],2]]],8,[[9,[-1]]]],0,0,0,0,0,[[-2,[11,[10]]],[[3,[12,2]]],8,[[9,[-1]]]],[[-2,[11,[10]],12],[[3,[12,2]]],8,[[9,[-1]]]],[[-2,12,12],[[3,[12,2]]],8,[[9,[-1]]]],[[-2,4,4],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,12,12],[[3,[12,2]]],8,[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[12,12],[4,4],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[10,4],[[-2,4,4],[[3,[13,2]]],8,[[9,[-1]]]],[[-2,[11,[-1]]],[[3,[[7,[12]],2]]],[8,14],[[9,[-1]]]],[[-2,[11,[-1]]],[[3,[[7,[4]],2]]],[8,14],[[9,[-1]]]],[[12,15],[[3,[13,16]]]],[[4,15],[[3,[13,16]]]],[-1,-1,[]],[-1,-1,[]],[12,4],[12,[[11,[10]]]],[4,[[11,[10]]]],[12,17],[-1,-2,[],[]],[-1,-2,[],[]],[4,10],[[4,17,-1],[[18,[-1]]],8],[[-2,12,12],[[3,[12,2]]],8,[[9,[-1]]]],[4,4],[[-2,4,4],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,4,4,4],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,4,4,4],[[3,[4,2]]],8,[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],[-1,19,[]],[[-2,[11,[20]]],[[3,[[7,[4]],2]]],8,[[9,[-1]]]],[[-2,12,12],[[3,[12,2]]],8,[[9,[-1]]]],[[-2,4,4],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,[5,[4]]],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,[5,[4]]],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,[5,[4]]],[[3,[4,2]]],8,[[9,[-1]]]],[[-2,[5,[4]],[5,[[13,[-1,-1]]]]],[[3,[[13,[[21,[-1]],[21,[-1]]]],2]]],8,[[9,[-1]]]],[[-2,[5,[4]],[5,[[13,[-1,-1]]]]],[[3,[[13,[[22,[-1]],[22,[-1]]]],2]]],8,[[9,[-1]]]],0,[[[23,[-1,-2]],-4,-5],[[3,[17,2]]],8,[[9,[-1]]],[[25,[24]]],[[27,[],[[26,[-3]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[23,[-1,-2]],-4,-5],[[3,[17,2]]],8,[[9,[-1]]],[[25,[24]]],[[27,[],[[26,[-3]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[[23,[-1,-2]]],13,8,[[9,[-1]]]],[[[23,[-1,-2]],-4,-5,-6,-7],13,8,[[9,[-1]]],[[25,[24]]],[[27,[],[[26,[-3]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]]],[[[23,[-1,-2]],28,[18,[-1]],[18,[-1]]],13,8,[[9,[-1]]]],[[[23,[-1,-2]],15],29,[30,8],[30,[9,[-1]]]],[-1,-1,[]],[[[23,[-1,-2]]],-3,8,[[9,[-1]]],[]],[-1,-2,[],[]],[-2,[[23,[-1,-2]]],8,[[9,[-1]]]],[[],17],[[[23,[-1,-2]]],13,8,[[9,[-1]]]],[[[23,[-1,-2]],-4],13,8,[[9,[-1]]],[[25,[24]]],[[27,[],[[26,[-3]]]]]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],[[[5,[6]]],[[7,[10]]]],[[[5,[6]]],[[7,[10]]]],[[[5,[10]]],[[7,[-1]]],8],[[-2,[5,[4]]],[[3,[[21,[-1]],2]]],8,[[9,[-1]]]],[[-2,[5,[4]]],[[3,[13,2]]],8,[[9,[-1]]]],0,0,[[[21,[-1]],-2,[21,[-1]]],[[3,[[21,[-1]],2]]],8,[[9,[-1]]]],[[[22,[-1]],[22,[-1]]],[[22,[-1]]],8],[[[22,[-1]],17,4,-1],[[22,[-1]]],8],[[-2,-3],[[3,[[21,[-1]],2]]],8,[[9,[-1]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[-2,-3],[[21,[-1]]],8,[[9,[-1]]],[[27,[],[[26,[-1]]]]]],[[-2,-3],[[3,[[21,[-1]],2]]],8,[[9,[-1]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[-2,10,-3],[[3,[[21,[-1]],2]]],8,[[9,[-1]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[21,[-1]],-2],[[3,[13,2]]],8,[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[21,[-1]]],[[21,[-1]]],8],[[[22,[-1]]],[[22,[-1]]],[31,8]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-2,[21,[-1]],[21,[-1]],4],[[3,[[13,[[21,[-1]],[21,[-1]]]],2]]],8,[[9,[-1]]]],[-1,[[3,[[21,[-2]]]]],32,[8,33]],[[[21,[-1]],15],[[3,[13,16]]],[30,8]],[[[22,[-1]],15],[[3,[13,16]]],[30,8]],[-1,-1,[]],[[[21,[-1]]],[[22,[-1]]],8],[-1,-1,[]],[[[21,[-1]]],[[11,[-1]]],8],[[[22,[-1]]],[[11,[-1]]],8],[[[21,[-1]]],17,8],[[[21,[-1]],-2],[[3,[13,2]]],8,[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[[22,[-1]],-1],[[18,[-1]]],8],[[[21,[-1]],-2,[21,[-1]]],[[3,[[21,[-1]],2]]],8,[[9,[-1]]]],[[[22,[-1]],-1],[[22,[-1]]],8],[[[21,[-1]],-2],3,[8,34],35],[[[21,[-1]],-2],[[3,[[21,[-1]],2]]],8,[[9,[-1]]]],[[[21,[-1]],-2],[[3,[[7,[4]],2]]],[14,8],[[9,[-1]]]],[[[21,[-1]],-2],[[3,[[7,[4]],2]]],[14,8],[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],[-1,19,[]],[[],[[22,[-1]]],8],[[-2,[5,[4]]],[[3,[[7,[4]],2]]],8,[[9,[-1]]]],[[-2,[5,[4]]],[[3,[[7,[4]],2]]],8,[[9,[-1]]]],[[-2,[5,[4]],[5,[36]]],[[3,[[7,[36]],2]]],8,[[9,[-1]]]],0,[[-3,[5,[36]]],[[3,[36,2]]],8,[[9,[-1]]],[[9,[-1],[[37,[[23,[-1,-2]]]]]]]],[[-2,[11,[38]]],[[3,[36,2]]],8,[[9,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[36,36],[[-1,-2],13,[],[]],[38,36],[[36,15],29],[-1,-1,[]],[[[5,[4]]],36],[[[5,[4]]],36],[-1,-2,[],[]],[36,[[7,[4]]]],[36,[[7,[4]]]],[[36,28],36],[[-2,36,36,36],[[3,[36,2]]],8,[[9,[-1]]]],[[-2,36,36,36],[[3,[36,2]]],8,[[9,[-1]]]],[[36,28],36],[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],[[36,-2,36],[[3,[36,2]]],8,[[9,[-1]]]],0,0,[39,[[7,[24]]]],0,[39,[[5,[[13,[[18,[-1]],[18,[-1]],[18,[-1]],24]]]]],8],[[39,-2,10],[[40,[-1]]],[8,8],[[39,[-1]]]],[39,[[7,[24]]]],0,[39,28],[39,28],0,0,[[[41,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[41,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[],[[41,[-1]]],8],[[[41,[-1]],-3,-4,-5,-6],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]]],[[[41,[-1]],15],29,[30,8]],[-1,-1,[]],[[[41,[-1]]],-2,8,[]],[-1,-2,[],[]],[[],[[41,[-1]]],8],[[],[[41,[-1]]],8],[[[41,[-1]]],28,8],[[[41,[-1]]],28,8],[[[41,[-1]]],13,8],[[[41,[-1]],-3],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],0,[[[42,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[42,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[42,[-1]]],[[7,[24]]],8],[-1,-2,[],[]],[-1,-2,[],[]],[[[42,[-1]]],[[5,[[43,[-1]]]]],8],[[],[[42,[-1]]],8],[[[42,[-1]],-3,-4,-5,-6],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]]],[[[42,[-1]],15],29,[30,8]],[-1,-1,[]],[[[42,[-1]]],-2,8,[]],[[[42,[-1]]],[[7,[24]]],8],[-1,-2,[],[]],[[],[[42,[-1]]],8],[[[42,[-1]]],28,8],[[[42,[-1]]],28,8],[[[42,[-1]]],28,8],[[[42,[-1]]],28,8],[[[42,[-1]]],13,8],[[[42,[-1]]],24,8],[[[42,[-1]]],[[7,[24]]],8],[[[42,[-1]],-3],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],0,0,[[[44,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[44,[-1]],-3,-4],[[3,[17,2]]],8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[],[[26,[[3,[-1,2]]]]]]]],[[[44,[-1]],28,28],[[13,[[5,[-1]],[5,[-1]]]]],8],[[[44,[-1]]],[[5,[-1]]],8],[[[44,[-1]]],[[5,[-1]]],8],[-1,-2,[],[]],[-1,-2,[],[]],[[[44,[-1]]],[[44,[-1]]],[8,31]],[[-1,-2],13,[],[]],[[[44,[-1]],-3,-4,-5,-6],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]],[[27,[[18,[-1]]],[[26,[[18,[-1]]]]]]]],[[[44,[-1]],[44,[-1]]],10,[8,45]],[[[44,[-1]],[44,[-1]]],13,8],[[[44,[-1]],[5,[-1]]],13,8],[[[44,[-1]],[5,[-1]]],13,8],[[[44,[-1]],15],29,[8,30]],[-1,-1,[]],[[[7,[-1]],[7,[-1]]],[[44,[-1]]],8],[46,[[13,[[7,[-1]],[7,[-1]],-1]]],8],[[46,[5,[-1]],[5,[-1]]],-1,8],[[46,-2],-1,8,[[9,[-1]]]],[[[44,[-1]]],-2,8,[]],[[[44,[-1]]],[[5,[-1]]],8],[[[44,[-1]]],[[5,[-1]]],8],[-1,-2,[],[]],[[],10],[[[44,[-1]]],10,8],[[],[[44,[-1]]],8],[46,28],[46,28],[46,28],[[[44,[-1]]],13,8],[[[44,[-1]],-3],13,8,[[25,[24]]],[[27,[],[[26,[-2]]]]]],[[[44,[-1]]],[[7,[-1]]],8],[[[44,[-1]]],[[7,[-1]]],8],[[[44,[-1]]],[[13,[[7,[-1]],[7,[-1]]]]],8],[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,19,[]],[[28,28],[[44,[-1]]],8]],"c":[260,261],"p":[[10,"Assignment",4],[6,"SynthesisError",268],[6,"Result",269],[6,"Boolean",16],[1,"slice"],[1,"u8"],[5,"Vec",270],[10,"PrimeField",271],[10,"ConstraintSystem",268],[1,"bool"],[6,"Option",272],[5,"AllocatedBit",16],[1,"tuple"],[10,"PrimeFieldBits",271],[5,"Formatter",273],[5,"Error",273],[5,"Variable",274],[5,"LinearCombination",274],[5,"TypeId",275],[1,"u64"],[5,"AllocatedNum",95],[5,"Num",95],[5,"MultiEq",71],[5,"String",276],[10,"Into",277],[17,"Output"],[10,"FnOnce",278],[1,"usize"],[8,"Result",273],[10,"Debug",273],[10,"Clone",279],[10,"Deserializer",280],[10,"Deserialize",280],[10,"Serialize",281],[10,"Serializer",281],[5,"UInt32",145],[17,"Root"],[1,"u32"],[10,"Comparable",169],[6,"Delta",282],[5,"BenchCS",180],[5,"MetricCS",200],[8,"Constraint",169],[5,"WitnessCS",226],[10,"PartialEq",283],[10,"SizedWitness",226]],"b":[[191,"impl-BenchCS%3CScalar%3E"],[192,"impl-ConstraintSystem%3CScalar%3E-for-BenchCS%3CScalar%3E"],[215,"impl-Comparable%3CScalar%3E-for-MetricCS%3CScalar%3E"],[216,"impl-MetricCS%3CScalar%3E"],[217,"impl-MetricCS%3CScalar%3E"],[218,"impl-Comparable%3CScalar%3E-for-MetricCS%3CScalar%3E"]]}],\
["bellpepper_core",{"doc":"<code>bellpepper</code> is a crate for building zk-SNARK circuits. It …","t":"PPSKKIPPKGPPPPGPPPPFPPPFPPRGPPPFNNNNNMNMNNNNNNNNMNNNCNNNNNNNNNNNNNNNNNNNNMNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNCMMNNNMNMNNNNNNNNNMCNNNNNNNNNNNNNNNNNNNNNNNNFGPPPNNNNNNNNNNNNNNNHHNNNNNNNNNNNNNNNNNNNNNNNNNHNNFFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN","n":["AssignmentMissing","Aux","BELLPEPPER_VERSION","Circuit","Comparable","Constraint","ConstraintCountMismatch","ConstraintMismatch","ConstraintSystem","Delta","Different","DivisionByZero","Equal","IncompatibleLengthVector","Index","Input","InputCountMismatch","InvalidPairing","IoError","LinearCombination","MalformedProofs","MalformedSrs","MalformedVerifyingKey","Namespace","NonPowerOfTwo","PolynomialDegreeTooLarge","Root","SynthesisError","UnconstrainedVariable","UnexpectedIdentity","Unsatisfiable","Variable","add","add","add","add","add_unsimplified","alloc","alloc","alloc_input","alloc_input","allocate_empty","allocate_empty","allocate_empty","allocate_empty_aux","allocate_empty_aux","allocate_empty_inputs","allocate_empty_inputs","aux","aux_slice","aux_slice","aux_slice","boolean","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","constraints","default","delta","delta","deserialize","deserialize","drop","enforce","enforce","eq","eq","eq","eq","eval","extend","extend","extend_aux","extend_aux","extend_aux","extend_inputs","extend_inputs","extend_inputs","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from_coeff","from_variable","get_root","get_root","get_unchecked","hash","hash","inputs","inputs_slice","inputs_slice","inputs_slice","into","into","into","into","into","into","is_empty","is_extensible","is_extensible","is_witness_generator","is_witness_generator","is_witness_generator","iter","iter_aux","iter_inputs","iter_mut","len","namespace","namespace","new","new","new_unchecked","num","num_constraints","num_inputs","one","one","one","pop_namespace","pop_namespace","push_namespace","push_namespace","serialize","serialize","source","sub","sub","sub","sub","sub_unsimplified","synthesize","test_cs","to_owned","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","zero","AllocatedBit","Boolean","Constant","Is","Not","alloc","alloc_conditionally","and","and","and_not","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","constant","enforce_equal","field_into_allocated_bits_le","field_into_boolean_vec_le","fmt","fmt","from","from","from","get_value","get_value","get_variable","into","into","is_constant","lc","nor","not","or","sha256_ch","sha256_maj","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","u64_into_boolean_vec_le","xor","xor","AllocatedNum","Num","add","add","add_bool_with_coeff","alloc","alloc_infallible","alloc_input","alloc_maybe_input","assert_nonzero","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","conditionally_reverse","deserialize","fmt","fmt","from","from","from","get_value","get_value","get_variable","inputize","into","into","lc","mul","scale","serialize","square","to_bits_le","to_bits_le_strict","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","zero","TestConstraintSystem","alloc","alloc_input","aux","borrow","borrow_mut","constraints","default","enforce","fmt","from","get","get_input","get_inputs","get_root","hash","inputs","into","is_satisfied","new","num_constraints","num_constraints","num_inputs","num_inputs","pop_namespace","pretty_print","pretty_print_list","push_namespace","scalar_aux","scalar_inputs","set","try_from","try_into","type_id","verify","which_is_unsatisfied"],"q":[[0,"bellpepper_core"],[186,"bellpepper_core::boolean"],[236,"bellpepper_core::num"],[283,"bellpepper_core::test_cs"],[319,"ff"],[320,"core::result"],[321,"alloc::string"],[322,"core::convert"],[323,"core::ops::function"],[324,"alloc::vec"],[325,"core::clone"],[326,"serde::de"],[327,"core::cmp"],[328,"core::fmt"],[329,"core::fmt"],[330,"core::hash"],[331,"core::iter::traits::iterator"],[332,"serde::ser"],[333,"core::error"],[334,"core::option"],[335,"core::any"],[336,"ff"]],"d":["During synthesis, we lacked knowledge of a variable …","","","Computations are expressed in terms of arithmetic …","","","","","Represents a constraint system which can have new variables","","","During synthesis, we divided by zero.","","","Represents the index of either an input variable or …","","","","During proof generation, we encountered an I/O error with …","This represents a linear combination of some variables, …","During GPU multiexp/fft, some GPU related error happened","","During verification, our verifying key was malformed.","This is a “namespaced” constraint system which borrows …","","During synthesis, our polynomials ended up being too high …","Represents the type of the “root” of this constraint …","This is an error that could occur during circuit synthesis …","During CRS generation, we observed an unconstrained …","During proof generation, we encountered an identity in the …","During synthesis, we constructed an unsatisfiable …","Represents a variable in our constraint system.","","","","","","Allocate a private variable in the constraint system. The …","","Allocate a public variable in the constraint system. The …","","Allocate empty space for the auxiliary inputs and the main …","Allocate empty space for the auxiliary inputs and the main …","","Allocate empty space for the auxiliary inputs of the …","Allocate empty space for the auxiliary inputs of the …","Allocate empty space for the main inputs of the …","Allocate empty space for the main inputs of the …","","Returns the constraint system’s aux witness as a slice …","Returns the constraint system’s aux witness as a slice …","","Gadgets for allocating bits in the circuit and performing …","","","","","","","","","","","","","","","","","","","","","","","","","","","","Enforce that <code>A</code> * <code>B</code> = <code>C</code>. The <code>annotation</code> function is invoked …","","","","","","","Extend concatenates thew  <code>other</code> constraint systems to the …","Extend concatenates thew  <code>other</code> constraint systems to the …","Extend the auxiliary inputs of the <code>ConstraintSystem</code>.","Extend the auxiliary inputs of the <code>ConstraintSystem</code>.","","Extend the inputs of the <code>ConstraintSystem</code>.","Extend the inputs of the <code>ConstraintSystem</code>.","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","","Gets the “root” constraint system, bypassing the …","","This returns the index underlying the variable. Circuit …","","","","Returns the constraint system’s inputs as a slice of …","Returns the constraint system’s inputs as a slice of …","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Most implementations of ConstraintSystem are not ‘…","Most implementations of ConstraintSystem are not ‘…","Determines if the current <code>ConstraintSystem</code> instance is a …","Determines if the current <code>ConstraintSystem</code> instance is a …","","","","","","","Begin a namespace for this constraint system.","Begin a namespace for this constraint system.","","","This constructs a variable with an arbitrary index. …","Gadgets representing numbers in the scalar field of the …","","The <code>Comparable</code> trait allows comparison of two constraint …","Return the “one” input variable","Return the “one” input variable","","Exit out of the existing namespace. Not intended for …","","Create a new (sub)namespace and enter into it. Not intended","","","","","","","","","","Synthesize the circuit into a rank-1 quadratic constraint …","","","","","","","","","","","","","","","","","","","","","","","","","","Represents a variable in the constraint system which is …","This is a boolean value which may be either a constant or …","Constant (not an allocated variable)","Existential view of the boolean variable","Negated view of the boolean variable","Allocate a variable in the constraint system which can …","Allocate a variable in the constraint system which can …","Performs an AND operation over the two operands, returning …","Perform AND over two boolean operands","Calculates <code>a AND (NOT b)</code>.","","","","","","","","","Construct a boolean from a known constant","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Calculates <code>(NOT a) AND (NOT b)</code>.","Return a negated interpretation of this boolean.","Perform OR over two boolean operands","Computes (a and b) xor ((not a) and c)","Computes (a and b) xor (a and c) xor (b and c)","","","","","","","","","","Performs an XOR operation over the two operands, returning …","Perform XOR over two boolean operands","","","","","","Allocate a <code>Variable(Aux)</code> in a <code>ConstraintSystem</code>.","Allocate a <code>Variable(Aux)</code> in a <code>ConstraintSystem</code>. Requires an","Allocate a <code>Variable(Input)</code> in a <code>ConstraintSystem</code>.","Allocate a <code>Variable</code> of either <code>Aux</code> or <code>Input</code> in a …","","","","","","","","","","Takes two allocated numbers (a, b) and returns (b, a) if …","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","Convert the allocated number into its little-endian …","Deconstructs this allocated number into its boolean …","","","","","","","","","","Constraint system for testing purposes.","","","","","","","","","","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","",""],"i":[7,18,0,0,0,0,20,20,0,0,20,7,20,7,0,18,20,7,7,0,7,7,7,0,7,7,6,0,7,7,7,0,1,1,1,1,1,6,13,6,13,6,6,13,6,6,6,6,16,6,6,13,0,3,18,1,7,13,20,3,18,1,7,13,20,3,18,1,20,3,18,1,20,16,1,16,16,3,18,13,6,13,3,18,1,20,1,6,6,6,6,13,6,6,13,3,18,1,7,7,13,20,3,18,1,7,7,13,20,1,1,6,13,3,3,18,16,6,6,13,3,18,1,7,13,20,1,6,6,6,6,13,1,1,1,1,1,6,6,6,6,3,0,16,16,6,6,13,6,13,6,13,3,18,7,1,1,1,1,1,35,0,3,18,1,20,7,3,18,1,7,13,20,3,18,1,7,13,20,3,18,1,7,13,20,1,0,0,38,38,38,37,37,37,38,37,37,38,37,38,37,38,37,38,38,38,0,0,37,38,37,38,38,37,38,37,37,38,38,38,37,38,38,38,38,37,38,37,38,37,38,37,38,0,37,38,0,0,41,42,42,41,41,41,41,41,41,42,41,42,41,42,41,42,41,41,41,42,41,42,42,41,42,41,41,41,42,42,41,42,41,41,41,41,41,42,41,42,41,42,41,42,42,0,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[[1,[-1]],[1,[-1]]],[[1,[-1]]],2],[[[1,[-1]],[4,[-1,3]]],[[1,[-1]]],2],[[[1,[-1]],3],[[1,[-1]]],2],[[[1,[-1]],[4,[-1,[1,[-1]]]]],[[1,[-1]]],2],[[[1,[-1]],[4,[-1,3]]],[[1,[-1]]],2],[[[6,[],[[5,[-1]]]],-4,-5],[[8,[3,7]]],[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[],[[11,[[8,[-2,7]]]]]]]],[[[13,[-1,-2]],-4,-5],[[8,[3,7]]],2,[[6,[-1]]],[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[[6,[],[[5,[-1]]]],-4,-5],[[8,[3,7]]],[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[],[[11,[[8,[-2,7]]]]]]]],[[[13,[-1,-2]],-4,-5],[[8,[3,7]]],2,[[6,[-1]]],[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[[6,[],[[5,[-1]]]],14,14],[[4,[[15,[-2]],[15,[-2]]]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],14,14],[[4,[[15,[-2]],[15,[-2]]]]],[[6,[-2]]],2],[[[13,[-1,-2]],14,14],[[4,[[15,[-1]],[15,[-1]]]]],2,[[6,[-1]]]],[[[6,[],[[5,[-1]]]],14],[[15,[-2]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],14],[[15,[-2]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],14],[[15,[-2]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],14],[[15,[-2]]],[[6,[-2]]],2],[16,[[17,[9]]]],[[[6,[],[[5,[-1]]]]],[[15,[-2]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]]],[[15,[-2]]],[[6,[-2]]],2],[[[13,[-1,-2]]],[[15,[-1]]],2,[[6,[-1]]]],0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[3,3],[18,18],[[[1,[-1]]],[[1,[-1]]],[19,2]],[[[20,[-1]]],[[20,[-1]]],[19,2]],[[-1,-2],4,[],[]],[[-1,-2],4,[],[]],[[-1,-2],4,[],[]],[[-1,-2],4,[],[]],[16,[[15,[[21,[-1]]]]],2],[[],[[1,[-1]]],2],[[16,-2,22],[[20,[-1]]],[2,2],[[16,[-1]]]],[[16,-2,22],[[20,[-1]]],[2,2],[[16,[-1]]]],[-1,[[8,[3]]],23],[-1,[[8,[18]]],23],[[[13,[-1,-2]]],4,2,[[6,[-1]]]],[[[6,[],[[5,[-1]]]],-4,-5,-6,-7],4,[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[[1,[-2]]],[[11,[[1,[-2]]]]]]],[[12,[[1,[-2]]],[[11,[[1,[-2]]]]]]],[[12,[[1,[-2]]],[[11,[[1,[-2]]]]]]]],[[[13,[-1,-2]],-4,-5,-6,-7],4,2,[[6,[-1]]],[[10,[9]]],[[12,[],[[11,[-3]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]]],[[3,3],22],[[18,18],22],[[[1,[-1]],[1,[-1]]],22,[24,2]],[[[20,[-1]],[20,[-1]]],22,[24,2]],[[[1,[-1]],[15,[-1]],[15,[-1]]],-1,2],[[[6,[],[[5,[-1]]]],[6,[],[[5,[-1]]]]],4,[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],[6,[],[[5,[-1]]]]],4,[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],[15,[-2]]],4,[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],[15,[-2]]],4,[[6,[-2]]],2],[[[13,[-1,-2]],[15,[-1]]],4,2,[[6,[-1]]]],[[[6,[],[[5,[-1]]]],[15,[-2]]],4,[[6,[-2]]],2],[[[6,[],[[5,[-1]]]],[15,[-2]]],4,[[6,[-2]]],2],[[[13,[-1,-2]],[15,[-1]]],4,2,[[6,[-1]]]],[[3,25],26],[[18,25],26],[[[1,[-1]],25],26,[27,2]],[[7,25],26],[[7,25],26],[[[13,[-1,-2]],25],26,[27,2],[27,[6,[-1]]]],[[[20,[-1]],25],26,[27,2]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[28,7],[-1,-1,[]],[-1,-1,[]],[[3,-1],[[1,[-1]]],2],[3,[[1,[-1]]],2],[[[6,[],[[5,[-1]]]]],-1,[[6,[-2]]],2],[[[13,[-1,-2]]],-3,2,[[6,[-1]]],[]],[3,18],[[3,-1],4,29],[[18,-1],4,29],[16,[[17,[9]]]],[[[6,[],[[5,[-1]]]]],[[15,[-2]]],[[6,[-2]]],2],[[[6,[],[[5,[-1]]]]],[[15,[-2]]],[[6,[-2]]],2],[[[13,[-1,-2]]],[[15,[-1]]],2,[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[1,[-1]]],22,2],[[],22],[[],22],[[[6,[],[[5,[-1]]]]],22,[[6,[-2]]],2],[[[6,[],[[5,[-1]]]]],22,[[6,[-2]]],2],[[[13,[-1,-2]]],22,2,[[6,[-1]]]],[[[1,[-1]]],[[0,[[31,[],[[30,[[4,[3,-1]]]]]]]]],2],[[[1,[-1]]],[[0,[[31,[],[[30,[[4,[14,-1]]]]]]]]],2],[[[1,[-1]]],[[0,[[31,[],[[30,[[4,[14,-1]]]]]]]]],2],[[[1,[-1]]],[[0,[[31,[],[[30,[[4,[3,-1]]]]]]]]],2],[[[1,[-1]]],14,2],[[[6,[],[[5,[-1]]]],-4],[[13,[-2,-1]]],[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]]],[[[6,[],[[5,[-1]]]],-4],[[13,[-2,-1]]],[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]]],[[],[[6,[],[[5,[-1]]]]],[[6,[-2]]],2],[[],[[6,[],[[5,[-1]]]]],[[6,[-2]]],2],[18,3],0,[16,14],[16,14],[[],3],[[],3],[[],3],[[[6,[],[[5,[-1]]]]],4,[[6,[-2]]],2],[[[13,[-1,-2]]],4,2,[[6,[-1]]]],[[[6,[],[[5,[-1]]]],-4],4,[[6,[-2]]],2,[[10,[9]]],[[12,[],[[11,[-3]]]]]],[[[13,[-1,-2]],-4],4,2,[[6,[-1]]],[[10,[9]]],[[12,[],[[11,[-3]]]]]],[[3,-1],8,32],[[18,-1],8,32],[7,[[34,[33]]]],[[[1,[-1]],[4,[-1,[1,[-1]]]]],[[1,[-1]]],2],[[[1,[-1]],[4,[-1,3]]],[[1,[-1]]],2],[[[1,[-1]],3],[[1,[-1]]],2],[[[1,[-1]],[1,[-1]]],[[1,[-1]]],2],[[[1,[-1]],[4,[-1,3]]],[[1,[-1]]],2],[[35,-2],[[8,[4,7]]],2,[[6,[-1]]]],0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,9,[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,36,[]],[-1,36,[]],[-1,36,[]],[-1,36,[]],[-1,36,[]],[-1,36,[]],[[],[[1,[-1]]],2],0,0,0,0,0,[[-2,[34,[22]]],[[8,[37,7]]],2,[[6,[-1]]]],[[-2,[34,[22]],37],[[8,[37,7]]],2,[[6,[-1]]]],[[-2,37,37],[[8,[37,7]]],2,[[6,[-1]]]],[[-2,38,38],[[8,[38,7]]],2,[[6,[-1]]]],[[-2,37,37],[[8,[37,7]]],2,[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[37,37],[38,38],[[-1,-2],4,[],[]],[[-1,-2],4,[],[]],[22,38],[[-2,38,38],[[8,[4,7]]],2,[[6,[-1]]]],[[-2,[34,[-1]]],[[8,[[17,[37]],7]]],[2,39],[[6,[-1]]]],[[-2,[34,[-1]]],[[8,[[17,[38]],7]]],[2,39],[[6,[-1]]]],[[37,25],26],[[38,25],26],[-1,-1,[]],[-1,-1,[]],[37,38],[37,[[34,[22]]]],[38,[[34,[22]]]],[37,3],[-1,-2,[],[]],[-1,-2,[],[]],[38,22],[[38,3,-1],[[1,[-1]]],2],[[-2,37,37],[[8,[37,7]]],2,[[6,[-1]]]],[38,38],[[-2,38,38],[[8,[38,7]]],2,[[6,[-1]]]],[[-2,38,38,38],[[8,[38,7]]],2,[[6,[-1]]]],[[-2,38,38,38],[[8,[38,7]]],2,[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,36,[]],[-1,36,[]],[[-2,[34,[40]]],[[8,[[17,[38]],7]]],2,[[6,[-1]]]],[[-2,37,37],[[8,[37,7]]],2,[[6,[-1]]]],[[-2,38,38],[[8,[38,7]]],2,[[6,[-1]]]],0,0,[[[41,[-1]],-2,[41,[-1]]],[[8,[[41,[-1]],7]]],2,[[6,[-1]]]],[[[42,[-1]],[42,[-1]]],[[42,[-1]]],2],[[[42,[-1]],3,38,-1],[[42,[-1]]],2],[[-2,-3],[[8,[[41,[-1]],7]]],2,[[6,[-1]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[-2,-3],[[41,[-1]]],2,[[6,[-1]]],[[12,[],[[11,[-1]]]]]],[[-2,-3],[[8,[[41,[-1]],7]]],2,[[6,[-1]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[-2,22,-3],[[8,[[41,[-1]],7]]],2,[[6,[-1]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[[41,[-1]],-2],[[8,[4,7]]],2,[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[41,[-1]]],[[41,[-1]]],2],[[[42,[-1]]],[[42,[-1]]],[19,2]],[[-1,-2],4,[],[]],[[-1,-2],4,[],[]],[[-2,[41,[-1]],[41,[-1]],38],[[8,[[4,[[41,[-1]],[41,[-1]]]],7]]],2,[[6,[-1]]]],[-1,[[8,[[41,[-2]]]]],23,[43,2]],[[[41,[-1]],25],26,[27,2]],[[[42,[-1]],25],26,[27,2]],[-1,-1,[]],[-1,-1,[]],[[[41,[-1]]],[[42,[-1]]],2],[[[41,[-1]]],[[34,[-1]]],2],[[[42,[-1]]],[[34,[-1]]],2],[[[41,[-1]]],3,2],[[[41,[-1]],-2],[[8,[4,7]]],2,[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[[42,[-1]],-1],[[1,[-1]]],2],[[[41,[-1]],-2,[41,[-1]]],[[8,[[41,[-1]],7]]],2,[[6,[-1]]]],[[[42,[-1]],-1],[[42,[-1]]],2],[[[41,[-1]],-2],8,[44,2],32],[[[41,[-1]],-2],[[8,[[41,[-1]],7]]],2,[[6,[-1]]]],[[[41,[-1]],-2],[[8,[[17,[38]],7]]],[39,2],[[6,[-1]]]],[[[41,[-1]],-2],[[8,[[17,[38]],7]]],[39,2],[[6,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,36,[]],[-1,36,[]],[[],[[42,[-1]]],2],0,[[[45,[-1]],-3,-4],[[8,[3,7]]],2,[[10,[9]]],[[12,[],[[11,[-2]]]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[[45,[-1]],-3,-4],[[8,[3,7]]],2,[[10,[9]]],[[12,[],[[11,[-2]]]]],[[12,[],[[11,[[8,[-1,7]]]]]]]],[[[45,[-1]]],[[17,[9]]],2],[-1,-2,[],[]],[-1,-2,[],[]],[[[45,[-1]]],[[15,[[21,[-1]]]]],2],[[],[[45,[-1]]],2],[[[45,[-1]],-3,-4,-5,-6],4,2,[[10,[9]]],[[12,[],[[11,[-2]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]],[[12,[[1,[-1]]],[[11,[[1,[-1]]]]]]]],[[[45,[-1]],25],26,[27,2]],[-1,-1,[]],[[[45,[-1]],46],-1,2],[[[45,[-1]],14,46],-1,2],[[[45,[-1]]],[[15,[[4,[-1,9]]]]],2],[[[45,[-1]]],-2,2,[]],[[[45,[-1]]],9,2],[[[45,[-1]]],[[17,[9]]],2],[-1,-2,[],[]],[[[45,[-1]]],22,2],[[],[[45,[-1]]],2],[[[45,[-1]]],14,2],[[[45,[-1]]],14,2],[[[45,[-1]]],14,2],[[[45,[-1]]],14,2],[[[45,[-1]]],4,2],[[[45,[-1]]],9,2],[[[45,[-1]]],[[17,[9]]],2],[[[45,[-1]],-3],4,2,[[10,[9]]],[[12,[],[[11,[-2]]]]]],[[[45,[-1]]],[[17,[-1]]],2],[[[45,[-1]]],[[17,[-1]]],2],[[[45,[-1]],46,-1],4,2],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,36,[]],[[[45,[-1]],[15,[-1]]],22,2],[[[45,[-1]]],[[34,[46]]],2]],"c":[],"p":[[5,"LinearCombination",0],[10,"PrimeField",319],[5,"Variable",0],[1,"tuple"],[17,"Root"],[10,"ConstraintSystem",0],[6,"SynthesisError",0],[6,"Result",320],[5,"String",321],[10,"Into",322],[17,"Output"],[10,"FnOnce",323],[5,"Namespace",0],[1,"usize"],[1,"slice"],[10,"Comparable",0],[5,"Vec",324],[6,"Index",0],[10,"Clone",325],[6,"Delta",0],[8,"Constraint",0],[1,"bool"],[10,"Deserializer",326],[10,"PartialEq",327],[5,"Formatter",328],[8,"Result",328],[10,"Debug",328],[5,"Error",329],[10,"Hasher",330],[17,"Item"],[10,"Iterator",331],[10,"Serializer",332],[10,"Error",333],[6,"Option",334],[10,"Circuit",0],[5,"TypeId",335],[5,"AllocatedBit",186],[6,"Boolean",186],[10,"PrimeFieldBits",319],[1,"u64"],[5,"AllocatedNum",236],[5,"Num",236],[10,"Deserialize",326],[10,"Serialize",332],[5,"TestConstraintSystem",283],[1,"str"]],"b":[[32,"impl-Add%3C%26LinearCombination%3CScalar%3E%3E-for-LinearCombination%3CScalar%3E"],[33,"impl-Add%3C(Scalar,+Variable)%3E-for-LinearCombination%3CScalar%3E"],[34,"impl-Add%3CVariable%3E-for-LinearCombination%3CScalar%3E"],[35,"impl-Add%3C(Scalar,+%26LinearCombination%3CScalar%3E)%3E-for-LinearCombination%3CScalar%3E"],[98,"impl-Debug-for-SynthesisError"],[99,"impl-Display-for-SynthesisError"],[155,"impl-Sub%3C(Scalar,+%26LinearCombination%3CScalar%3E)%3E-for-LinearCombination%3CScalar%3E"],[156,"impl-Sub%3C(Scalar,+Variable)%3E-for-LinearCombination%3CScalar%3E"],[157,"impl-Sub%3CVariable%3E-for-LinearCombination%3CScalar%3E"],[158,"impl-Sub%3C%26LinearCombination%3CScalar%3E%3E-for-LinearCombination%3CScalar%3E"],[303,"impl-TestConstraintSystem%3CScalar%3E"],[304,"impl-Comparable%3CScalar%3E-for-TestConstraintSystem%3CScalar%3E"],[305,"impl-Comparable%3CScalar%3E-for-TestConstraintSystem%3CScalar%3E"],[306,"impl-TestConstraintSystem%3CScalar%3E"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
