(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_array_concat=runtime.caml_array_concat,
     caml_array_get=runtime.caml_array_get,
     caml_array_set=runtime.caml_array_set,
     caml_array_sub=runtime.caml_array_sub,
     caml_ba_change_layout=runtime.caml_ba_change_layout,
     caml_ba_create=runtime.caml_ba_create,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_num_dims=runtime.caml_ba_num_dims,
     caml_ba_reshape=runtime.caml_ba_reshape,
     caml_ba_slice=runtime.caml_ba_slice,
     caml_blit_bytes=runtime.caml_blit_bytes,
     caml_blit_string=runtime.caml_blit_string,
     caml_bswap16=runtime.caml_bswap16,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_bytes_get16=runtime.caml_bytes_get16,
     caml_bytes_get32=runtime.caml_bytes_get32,
     caml_bytes_get64=runtime.caml_bytes_get64,
     caml_bytes_of_string=runtime.caml_bytes_of_string,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_bytes_set16=runtime.caml_bytes_set16,
     caml_bytes_set32=runtime.caml_bytes_set32,
     caml_bytes_set64=runtime.caml_bytes_set64,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_compare=runtime.caml_compare,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_div=runtime.caml_div,
     caml_ephe_set_key=runtime.caml_ephe_set_key,
     caml_ephe_unset_key=runtime.caml_ephe_unset_key,
     caml_equal=runtime.caml_equal,
     caml_fill_bytes=runtime.caml_fill_bytes,
     caml_float_compare=runtime.caml_float_compare,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_floatarray_create=runtime.caml_floatarray_create,
     caml_format_float=runtime.caml_format_float,
     caml_format_int=runtime.caml_format_int,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_get_exception_raw_backtrace=runtime.caml_get_exception_raw_backtrace,
     caml_get_public_method=runtime.caml_get_public_method,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_greaterthan=runtime.caml_greaterthan,
     caml_hash=runtime.caml_hash,
     caml_input_value=runtime.caml_input_value,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_add=runtime.caml_int64_add,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_compare=runtime.caml_int64_compare,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     caml_int64_format=runtime.caml_int64_format,
     caml_int64_mul=runtime.caml_int64_mul,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_of_string=runtime.caml_int64_of_string,
     caml_int64_or=runtime.caml_int64_or,
     caml_int64_shift_left=runtime.caml_int64_shift_left,
     caml_int64_sub=runtime.caml_int64_sub,
     caml_int_compare=runtime.caml_int_compare,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_lessequal=runtime.caml_lessequal,
     caml_lessthan=runtime.caml_lessthan,
     caml_make_vect=runtime.caml_make_vect,
     caml_marshal_data_size=runtime.caml_marshal_data_size,
     caml_md5_string=runtime.caml_md5_string,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_channel_size=runtime.caml_ml_channel_size,
     caml_ml_channel_size_64=runtime.caml_ml_channel_size_64,
     caml_ml_close_channel=runtime.caml_ml_close_channel,
     caml_ml_flush=runtime.caml_ml_flush,
     caml_ml_input=runtime.caml_ml_input,
     caml_ml_input_char=runtime.caml_ml_input_char,
     caml_ml_open_descriptor_in=runtime.caml_ml_open_descriptor_in,
     caml_ml_open_descriptor_out=runtime.caml_ml_open_descriptor_out,
     caml_ml_output=runtime.caml_ml_output,
     caml_ml_output_bytes=runtime.caml_ml_output_bytes,
     caml_ml_output_char=runtime.caml_ml_output_char,
     caml_ml_set_binary_mode=runtime.caml_ml_set_binary_mode,
     caml_ml_set_channel_name=runtime.caml_ml_set_channel_name,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_mod=runtime.caml_mod,
     caml_mul=runtime.caml_mul,
     caml_new_string=runtime.caml_new_string,
     caml_nextafter_float=runtime.caml_nextafter_float,
     caml_notequal=runtime.caml_notequal,
     caml_obj_block=runtime.caml_obj_block,
     caml_obj_set_tag=runtime.caml_obj_set_tag,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_obj_truncate=runtime.caml_obj_truncate,
     caml_output_value=runtime.caml_output_value,
     caml_register_global=runtime.caml_register_global,
     caml_register_named_value=runtime.caml_register_named_value,
     caml_restore_raw_backtrace=runtime.caml_restore_raw_backtrace,
     caml_set_oo_id=runtime.caml_set_oo_id,
     caml_signbit_float=runtime.caml_signbit_float,
     caml_spacetime_enabled=runtime.caml_spacetime_enabled,
     caml_spacetime_only_works_for_native_code=
      runtime.caml_spacetime_only_works_for_native_code,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_bytes=runtime.caml_string_of_bytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_sys_open=runtime.caml_sys_open,
     caml_sys_random_seed=runtime.caml_sys_random_seed,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst$0=caml_new_string("%,"),
     cst_really_input=caml_new_string("really_input"),
     cst_input=caml_new_string("input"),
     cst_output_substring=caml_new_string("output_substring"),
     cst_output=caml_new_string("output"),
     cst_12g=caml_new_string("%.12g"),
     cst=caml_new_string("."),
     cst_false$1=caml_new_string("false"),
     cst_true$1=caml_new_string("true"),
     cst_false$0=caml_new_string("false"),
     cst_true$0=caml_new_string("true"),
     cst_bool_of_string=caml_new_string("bool_of_string"),
     cst_true=caml_new_string("true"),
     cst_false=caml_new_string("false"),
     cst_char_of_int=caml_new_string("char_of_int"),
     cst_Stdlib_Exit=caml_new_string("Stdlib.Exit"),
     cst_Stdlib_Pervasives_Exit=caml_new_string("Stdlib.Pervasives.Exit"),
     cst_option_is_None=caml_new_string("option is None"),
     cst_result_is_Ok=caml_new_string("result is Ok _"),
     cst_result_is_Error=caml_new_string("result is Error _"),
     cst_true$2=caml_new_string("true"),
     cst_false$2=caml_new_string("false"),
     cst$1=caml_new_string("\\\\"),
     cst$2=caml_new_string("\\'"),
     cst_b=caml_new_string("\\b"),
     cst_t=caml_new_string("\\t"),
     cst_n=caml_new_string("\\n"),
     cst_r=caml_new_string("\\r"),
     cst_Char_chr=caml_new_string("Char.chr"),
     cst_is_not_a_latin1_character=
      caml_new_string(" is not a latin1 character"),
     cst_04X=caml_new_string("%04X"),
     cst_U=caml_new_string("U+"),
     cst_is_not_an_Unicode_scalar_value=
      caml_new_string(" is not an Unicode scalar value"),
     cst_X=caml_new_string("%X"),
     err_no_pred=caml_new_string("U+0000 has no predecessor"),
     err_no_succ=caml_new_string("U+10FFFF has no successor"),
     cst_Stdlib_Sys_Break=caml_new_string("Stdlib.Sys.Break"),
     ocaml_version=caml_new_string("4.08.1"),
     cst_List_map2=caml_new_string("List.map2"),
     cst_List_iter2=caml_new_string("List.iter2"),
     cst_List_fold_left2=caml_new_string("List.fold_left2"),
     cst_List_fold_right2=caml_new_string("List.fold_right2"),
     cst_List_for_all2=caml_new_string("List.for_all2"),
     cst_List_exists2=caml_new_string("List.exists2"),
     cst_List_combine=caml_new_string("List.combine"),
     cst_List_rev_map2=caml_new_string("List.rev_map2"),
     cst_List_init=caml_new_string("List.init"),
     cst_List_nth$0=caml_new_string("List.nth"),
     cst_nth=caml_new_string("nth"),
     cst_List_nth=caml_new_string("List.nth"),
     cst_tl=caml_new_string("tl"),
     cst_hd=caml_new_string("hd"),
     cst_Bytes_of_seq_cannot_grow_bytes=
      caml_new_string("Bytes.of_seq: cannot grow bytes"),
     cst_String_rcontains_from_Bytes_rcontains_from=
      caml_new_string("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes_contains_from=
      caml_new_string("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Bytes_rindex_from_opt=
      caml_new_string("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_rindex_from=
      caml_new_string("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Bytes_index_from_opt=
      caml_new_string("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_index_from=
      caml_new_string("String.index_from / Bytes.index_from"),
     cst_Bytes_concat=caml_new_string("Bytes.concat"),
     cst_String_blit_Bytes_blit_string=
      caml_new_string("String.blit / Bytes.blit_string"),
     cst_Bytes_blit=caml_new_string("Bytes.blit"),
     cst_String_fill_Bytes_fill=caml_new_string("String.fill / Bytes.fill"),
     cst_Bytes_extend=caml_new_string("Bytes.extend"),
     cst_String_sub_Bytes_sub=caml_new_string("String.sub / Bytes.sub"),
     cst_String_rcontains_from_Bytes_rcontains_from$0=
      caml_new_string("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes_contains_from$0=
      caml_new_string("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Bytes_rindex_from_opt$0=
      caml_new_string("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_rindex_from$0=
      caml_new_string("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Bytes_index_from_opt$0=
      caml_new_string("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_index_from$0=
      caml_new_string("String.index_from / Bytes.index_from"),
     cst$4=caml_new_string(""),
     cst$3=caml_new_string(""),
     cst_String_concat=caml_new_string("String.concat"),
     cst$5=caml_new_string("()"),
     cst_Marshal_from_bytes=caml_new_string("Marshal.from_bytes"),
     cst_Marshal_from_bytes$0=caml_new_string("Marshal.from_bytes"),
     cst_Marshal_data_size=caml_new_string("Marshal.data_size"),
     cst_Marshal_to_buffer_substring_out_of_bounds=
      caml_new_string("Marshal.to_buffer: substring out of bounds"),
     cst_Obj_Ephemeron_blit_key=caml_new_string("Obj.Ephemeron.blit_key"),
     cst_Obj_Ephemeron_check_key=caml_new_string("Obj.Ephemeron.check_key"),
     cst_Obj_Ephemeron_unset_key=caml_new_string("Obj.Ephemeron.unset_key"),
     cst_Obj_Ephemeron_set_key=caml_new_string("Obj.Ephemeron.set_key"),
     cst_Obj_Ephemeron_get_key_copy=
      caml_new_string("Obj.Ephemeron.get_key_copy"),
     cst_Obj_Ephemeron_get_key=caml_new_string("Obj.Ephemeron.get_key"),
     cst_Obj_Ephemeron_create=caml_new_string("Obj.Ephemeron.create"),
     cst_Obj_extension_constructor$0=
      caml_new_string("Obj.extension_constructor"),
     cst_Obj_extension_constructor=
      caml_new_string("Obj.extension_constructor"),
     cst_Array_map2_arrays_must_have_the_same_length=
      caml_new_string("Array.map2: arrays must have the same length"),
     cst_Array_iter2_arrays_must_have_the_same_length=
      caml_new_string("Array.iter2: arrays must have the same length"),
     cst_Array_blit=caml_new_string("Array.blit"),
     cst_Array_fill=caml_new_string("Array.fill"),
     cst_Array_sub=caml_new_string("Array.sub"),
     cst_Array_init=caml_new_string("Array.init"),
     cst_Stdlib_Array_Bottom=caml_new_string("Stdlib.Array.Bottom"),
     cst_Float_Array_map2_arrays_must_have_the_same_length=
      caml_new_string("Float.Array.map2: arrays must have the same length"),
     cst_Float_Array_iter2_arrays_must_have_the_same_length=
      caml_new_string("Float.Array.iter2: arrays must have the same length"),
     cst_Float_array_blit=caml_new_string("Float.array.blit"),
     cst_Float_array_blit$0=caml_new_string("Float.array.blit"),
     cst_Float_Array_fill=caml_new_string("Float.Array.fill"),
     cst_Float_Array_sub=caml_new_string("Float.Array.sub"),
     cst_Float_Array_concat=caml_new_string("Float.Array.concat"),
     cst_Float_Array_init=caml_new_string("Float.Array.init"),
     cst_Stdlib_Float_Array_Bottom=
      caml_new_string("Stdlib.Float.Array.Bottom"),
     cst_d=caml_new_string("%d"),
     cst_d$0=caml_new_string("%d"),
     zero$2=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     one$2=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     minus_one$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     min_int$2=runtime.caml_int64_create_lo_mi_hi(0,0,32768),
     max_int$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767),
     cst_d$1=caml_new_string("%d"),
     cst_Lexing_lex_refill_cannot_grow_buffer=
      caml_new_string("Lexing.lex_refill: cannot grow buffer"),
     dummy_pos=[0,caml_new_string(""),0,0,-1],
     zero_pos=[0,caml_new_string(""),1,0,0],
     cst_syntax_error=caml_new_string("syntax error"),
     cst_Stdlib_Parsing_YYexit=caml_new_string("Stdlib.Parsing.YYexit"),
     cst_Stdlib_Parsing_Parse_error=
      caml_new_string("Stdlib.Parsing.Parse_error"),
     cst_Set_remove_min_elt=caml_new_string("Set.remove_min_elt"),
     cst_Set_bal=caml_new_string("Set.bal"),
     cst_Set_bal$0=caml_new_string("Set.bal"),
     cst_Set_bal$1=caml_new_string("Set.bal"),
     cst_Set_bal$2=caml_new_string("Set.bal"),
     cst_Map_remove_min_elt=caml_new_string("Map.remove_min_elt"),
     cst_Map_bal=caml_new_string("Map.bal"),
     cst_Map_bal$0=caml_new_string("Map.bal"),
     cst_Map_bal$1=caml_new_string("Map.bal"),
     cst_Map_bal$2=caml_new_string("Map.bal"),
     cst_Stdlib_Stack_Empty=caml_new_string("Stdlib.Stack.Empty"),
     cst_Stdlib_Queue_Empty=caml_new_string("Stdlib.Queue.Empty"),
     cst_CamlinternalLazy_Undefined=
      caml_new_string("CamlinternalLazy.Undefined"),
     cst_count=caml_new_string("{count = "),
     cst_data=caml_new_string("; data = "),
     cst$6=caml_new_string("}"),
     cst_Sempty=caml_new_string("Sempty"),
     cst_Scons=caml_new_string("Scons ("),
     cst$7=caml_new_string(", "),
     cst$8=caml_new_string(")"),
     cst_Sapp=caml_new_string("Sapp ("),
     cst$9=caml_new_string(", "),
     cst$10=caml_new_string(")"),
     cst_Slazy=caml_new_string("Slazy"),
     cst_Sgen=caml_new_string("Sgen"),
     cst_Sbuffio=caml_new_string("Sbuffio"),
     cst_Stdlib_Stream_Failure=caml_new_string("Stdlib.Stream.Failure"),
     cst_Stdlib_Stream_Error=caml_new_string("Stdlib.Stream.Error"),
     cst_Buffer_truncate=caml_new_string("Buffer.truncate"),
     cst_Buffer_add_channel=caml_new_string("Buffer.add_channel"),
     cst_Buffer_add_substring_add_subbytes=
      caml_new_string("Buffer.add_substring/add_subbytes"),
     cst_Buffer_add_cannot_grow_buffer=
      caml_new_string("Buffer.add: cannot grow buffer"),
     cst_Buffer_nth=caml_new_string("Buffer.nth"),
     cst_Buffer_blit=caml_new_string("Buffer.blit"),
     cst_Buffer_sub=caml_new_string("Buffer.sub"),
     cst_c=caml_new_string("%c"),
     cst_s=caml_new_string("%s"),
     cst_i=caml_new_string("%i"),
     cst_li=caml_new_string("%li"),
     cst_ni=caml_new_string("%ni"),
     cst_Li=caml_new_string("%Li"),
     cst_f=caml_new_string("%f"),
     cst_B=caml_new_string("%B"),
     cst$21=caml_new_string("%{"),
     cst$22=caml_new_string("%}"),
     cst$23=caml_new_string("%("),
     cst$24=caml_new_string("%)"),
     cst_a=caml_new_string("%a"),
     cst_t$0=caml_new_string("%t"),
     cst$25=caml_new_string("%?"),
     cst_r$0=caml_new_string("%r"),
     cst_r$1=caml_new_string("%_r"),
     cst_u$0=caml_new_string("%u"),
     cst_Printf_bad_conversion=caml_new_string("Printf: bad conversion %["),
     cst_Printf_bad_conversion$0=caml_new_string("Printf: bad conversion %_"),
     cst$29=caml_new_string("@{"),
     cst$30=caml_new_string("@["),
     cst$31=caml_new_string("@{"),
     cst$32=caml_new_string("@["),
     cst$33=caml_new_string("@{"),
     cst$34=caml_new_string("@["),
     cst_0=caml_new_string("0"),
     cst_padding=caml_new_string("padding"),
     cst_precision=caml_new_string("precision"),
     cst$39=caml_new_string("'*'"),
     cst$37=caml_new_string("'-'"),
     cst_0$2=caml_new_string("'0'"),
     cst$38=caml_new_string("'*'"),
     cst_0$0=caml_new_string("0"),
     cst_0$1=caml_new_string("0"),
     cst_precision$0=caml_new_string("precision"),
     cst_precision$1=caml_new_string("precision"),
     cst$40=caml_new_string("'+'"),
     cst$41=caml_new_string("'#'"),
     cst$42=caml_new_string("' '"),
     cst_padding$0=caml_new_string("`padding'"),
     cst_precision$2=caml_new_string("`precision'"),
     cst$43=caml_new_string("'+'"),
     cst$44=caml_new_string("'_'"),
     sub_format=[0,0,caml_new_string("")],
     formatting_lit=[0,caml_new_string("@;"),1,0],
     cst_digit=caml_new_string("digit"),
     cst_character=caml_new_string("character ')'"),
     cst_character$0=caml_new_string("character '}'"),
     cst$48=caml_new_string("'#'"),
     cst$47=caml_new_string("'+'"),
     cst$46=caml_new_string("'+'"),
     cst$45=caml_new_string("' '"),
     cst$51=caml_new_string("'+'"),
     cst$50=caml_new_string("'+'"),
     cst$49=caml_new_string("' '"),
     cst_non_zero_widths_are_unsupported_for_c_conversions=
      caml_new_string("non-zero widths are unsupported for %c conversions"),
     cst_unexpected_end_of_format=caml_new_string("unexpected end of format"),
     cst$35=caml_new_string(""),
     cst$36=caml_new_string(""),
     cst_b$0=caml_new_string("b"),
     cst_h=caml_new_string("h"),
     cst_hov=caml_new_string("hov"),
     cst_hv=caml_new_string("hv"),
     cst_v=caml_new_string("v"),
     cst_nan=caml_new_string("nan"),
     cst$28=caml_new_string("."),
     cst_neg_infinity=caml_new_string("neg_infinity"),
     cst_infinity=caml_new_string("infinity"),
     cst_12g$0=caml_new_string("%.12g"),
     cst_nd$0=caml_new_string("%+nd"),
     cst_nd$1=caml_new_string("% nd"),
     cst_ni$1=caml_new_string("%+ni"),
     cst_ni$2=caml_new_string("% ni"),
     cst_nx=caml_new_string("%nx"),
     cst_nx$0=caml_new_string("%#nx"),
     cst_nX=caml_new_string("%nX"),
     cst_nX$0=caml_new_string("%#nX"),
     cst_no=caml_new_string("%no"),
     cst_no$0=caml_new_string("%#no"),
     cst_nd=caml_new_string("%nd"),
     cst_ni$0=caml_new_string("%ni"),
     cst_nu=caml_new_string("%nu"),
     cst_ld$0=caml_new_string("%+ld"),
     cst_ld$1=caml_new_string("% ld"),
     cst_li$1=caml_new_string("%+li"),
     cst_li$2=caml_new_string("% li"),
     cst_lx=caml_new_string("%lx"),
     cst_lx$0=caml_new_string("%#lx"),
     cst_lX=caml_new_string("%lX"),
     cst_lX$0=caml_new_string("%#lX"),
     cst_lo=caml_new_string("%lo"),
     cst_lo$0=caml_new_string("%#lo"),
     cst_ld=caml_new_string("%ld"),
     cst_li$0=caml_new_string("%li"),
     cst_lu=caml_new_string("%lu"),
     cst_Ld$0=caml_new_string("%+Ld"),
     cst_Ld$1=caml_new_string("% Ld"),
     cst_Li$1=caml_new_string("%+Li"),
     cst_Li$2=caml_new_string("% Li"),
     cst_Lx=caml_new_string("%Lx"),
     cst_Lx$0=caml_new_string("%#Lx"),
     cst_LX=caml_new_string("%LX"),
     cst_LX$0=caml_new_string("%#LX"),
     cst_Lo=caml_new_string("%Lo"),
     cst_Lo$0=caml_new_string("%#Lo"),
     cst_Ld=caml_new_string("%Ld"),
     cst_Li$0=caml_new_string("%Li"),
     cst_Lu=caml_new_string("%Lu"),
     cst_d$3=caml_new_string("%+d"),
     cst_d$4=caml_new_string("% d"),
     cst_i$1=caml_new_string("%+i"),
     cst_i$2=caml_new_string("% i"),
     cst_x=caml_new_string("%x"),
     cst_x$0=caml_new_string("%#x"),
     cst_X$0=caml_new_string("%X"),
     cst_X$1=caml_new_string("%#X"),
     cst_o=caml_new_string("%o"),
     cst_o$0=caml_new_string("%#o"),
     cst_d$2=caml_new_string("%d"),
     cst_i$0=caml_new_string("%i"),
     cst_u=caml_new_string("%u"),
     cst$26=caml_new_string("%!"),
     cst$27=caml_new_string("@{"),
     cst_0c=caml_new_string("0c"),
     cst$20=caml_new_string("%%"),
     cst$12=caml_new_string("@]"),
     cst$13=caml_new_string("@}"),
     cst$14=caml_new_string("@?"),
     cst$15=caml_new_string("@\n"),
     cst$16=caml_new_string("@."),
     cst$17=caml_new_string("@@"),
     cst$18=caml_new_string("@%"),
     cst$19=caml_new_string("@"),
     cst$11=caml_new_string(".*"),
     cst_CamlinternalFormat_Type_mismatch=
      caml_new_string("CamlinternalFormat.Type_mismatch"),
     cst$59=caml_new_string(""),
     cst$60=caml_new_string("\n"),
     cst_a_boolean=caml_new_string("a boolean"),
     cst_an_integer=caml_new_string("an integer"),
     cst_an_integer$0=caml_new_string("an integer"),
     cst_a_float=caml_new_string("a float"),
     cst_a_float$0=caml_new_string("a float"),
     cst$56=caml_new_string(""),
     cst$57=caml_new_string(" "),
     cst$58=caml_new_string(""),
     cst_one_of=caml_new_string("one of: "),
     cst_Arg_Expand_is_is_only_allowed_with_Arg_parse_and_expand_argv_dynamic=
      caml_new_string
       ("Arg.Expand is is only allowed with Arg.parse_and_expand_argv_dynamic"),
     cst_no_argument=caml_new_string("no argument"),
     cst$55=caml_new_string("(?)"),
     cst_help$3=caml_new_string("--help"),
     cst_help$4=caml_new_string("-help"),
     cst_help$2=caml_new_string("-help"),
     cst_Display_this_list_of_options=
      caml_new_string(" Display this list of options"),
     cst_help=caml_new_string("-help"),
     cst_help$1=caml_new_string("--help"),
     cst_Display_this_list_of_options$0=
      caml_new_string(" Display this list of options"),
     cst_help$0=caml_new_string("--help"),
     cst$52=caml_new_string("}"),
     cst$53=caml_new_string("|"),
     cst$54=caml_new_string("{"),
     cst_none=caml_new_string("<none>"),
     cst_Stdlib_Arg_Bad=caml_new_string("Stdlib.Arg.Bad"),
     cst_Stdlib_Arg_Help=caml_new_string("Stdlib.Arg.Help"),
     cst_Stdlib_Arg_Stop=caml_new_string("Stdlib.Arg.Stop"),
     cst$62=caml_new_string(""),
     cst_Program_not_linked_with_g_cannot_print_stack_backtrace=
      caml_new_string
       ("(Program not linked with -g, cannot print stack backtrace)\n"),
     cst_Raised_at=caml_new_string("Raised at"),
     cst_Re_raised_at=caml_new_string("Re-raised at"),
     cst_Raised_by_primitive_operation_at=
      caml_new_string("Raised by primitive operation at"),
     cst_Called_from=caml_new_string("Called from"),
     cst_inlined=caml_new_string(" (inlined)"),
     cst$65=caml_new_string(""),
     partial=[4,0,0,0,0],
     cst_Out_of_memory=caml_new_string("Out of memory"),
     cst_Stack_overflow=caml_new_string("Stack overflow"),
     cst_Pattern_matching_failed=caml_new_string("Pattern matching failed"),
     cst_Assertion_failed=caml_new_string("Assertion failed"),
     cst_Undefined_recursive_module=
      caml_new_string("Undefined recursive module"),
     cst$63=caml_new_string(""),
     cst$64=caml_new_string(""),
     cst$61=caml_new_string("_"),
     locfmt=
      [0,
       [11,
        caml_new_string('File "'),
        [2,
         0,
         [11,
          caml_new_string('", line '),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[11,caml_new_string(": "),[2,0,0]]]]]]]]]],
       caml_new_string('File "%s", line %d, characters %d-%d: %s')],
     cst_Stdlib_Fun_Finally_raised=
      caml_new_string("Stdlib.Fun.Finally_raised"),
     cst_Digest_from_hex$0=caml_new_string("Digest.from_hex"),
     cst_Digest_from_hex=caml_new_string("Digest.from_hex"),
     cst_Digest_to_hex=caml_new_string("Digest.to_hex"),
     cst_Digest_substring=caml_new_string("Digest.substring"),
     cst_Random_int64=caml_new_string("Random.int64"),
     cst_Random_int32=caml_new_string("Random.int32"),
     cst_Random_int=caml_new_string("Random.int"),
     cst_x$1=caml_new_string("x"),
     cst_OCAMLRUNPARAM=caml_new_string("OCAMLRUNPARAM"),
     cst_CAMLRUNPARAM=caml_new_string("CAMLRUNPARAM"),
     cst$66=caml_new_string(""),
     cst_Weak_Make_hash_bucket_cannot_grow_more=
      caml_new_string("Weak.Make: hash bucket cannot grow more"),
     cst_Weak_fill=caml_new_string("Weak.fill"),
     cst_Weak_blit=caml_new_string("Weak.blit"),
     cst_Weak_check=caml_new_string("Weak.check"),
     cst_Weak_get_copy=caml_new_string("Weak.get_copy"),
     cst_Weak_get=caml_new_string("Weak.get"),
     cst_Weak_set=caml_new_string("Weak.set"),
     cst_Weak_create=caml_new_string("Weak.create"),
     cst$84=caml_new_string(""),
     cst$85=caml_new_string(""),
     cst$83=caml_new_string("."),
     cst$80=caml_new_string(">"),
     cst$81=caml_new_string("<\/"),
     cst$82=caml_new_string(""),
     cst$77=caml_new_string(">"),
     cst$78=caml_new_string("<"),
     cst$79=caml_new_string(""),
     cst$76=caml_new_string("\n"),
     cst_Format_pp_set_geometry_max_indent_2=
      caml_new_string("Format.pp_set_geometry: max_indent < 2"),
     cst_Format_pp_set_geometry_margin_max_indent=
      caml_new_string("Format.pp_set_geometry: margin <= max_indent"),
     cst$72=caml_new_string(""),
     cst$73=caml_new_string(""),
     cst$74=caml_new_string(""),
     cst$75=caml_new_string(""),
     cst$68=caml_new_string(""),
     cst$69=caml_new_string(""),
     cst$70=caml_new_string(""),
     cst$71=caml_new_string(""),
     cst$67=caml_new_string(""),
     cst_Stdlib_Format_String_tag=caml_new_string("Stdlib.Format.String_tag"),
     cst_end_of_input_not_found=caml_new_string("end of input not found"),
     cst_scanf_bad_conversion_a=caml_new_string('scanf: bad conversion "%a"'),
     cst_scanf_bad_conversion_t=caml_new_string('scanf: bad conversion "%t"'),
     cst_scanf_missing_reader=caml_new_string("scanf: missing reader"),
     cst_scanf_bad_conversion_custom_converter=
      caml_new_string('scanf: bad conversion "%?" (custom converter)'),
     cst_scanf_bad_conversion=caml_new_string('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$1=caml_new_string('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$0=caml_new_string('scanf: bad conversion "%-"'),
     cst_scanf_bad_conversion$2=caml_new_string('scanf: bad conversion "%*"'),
     cst$91=caml_new_string('"'),
     cst$92=caml_new_string('"'),
     cst$89=caml_new_string('"'),
     cst$90=caml_new_string('"'),
     cst$88=caml_new_string('"'),
     cst_in_format=caml_new_string(' in format "'),
     cst_an=caml_new_string("an"),
     cst_x$2=caml_new_string("x"),
     cst_nfinity=caml_new_string("nfinity"),
     cst_digits=caml_new_string("digits"),
     cst_decimal_digits=caml_new_string("decimal digits"),
     cst_0b=caml_new_string("0b"),
     cst_0o=caml_new_string("0o"),
     cst_0u=caml_new_string("0u"),
     cst_0x=caml_new_string("0x"),
     cst_false$3=caml_new_string("false"),
     cst_true$3=caml_new_string("true"),
     cst_not_a_valid_float_in_hexadecimal_notation=
      caml_new_string("not a valid float in hexadecimal notation"),
     cst_no_dot_or_exponent_part_found_in_float_token=
      caml_new_string("no dot or exponent part found in float token"),
     cst$87=caml_new_string("-"),
     cst_unnamed_function=caml_new_string("unnamed function"),
     cst_unnamed_character_string=caml_new_string("unnamed character string"),
     cst_unnamed_Stdlib_input_channel=
      caml_new_string("unnamed Stdlib input channel"),
     cst$86=caml_new_string("-"),
     cst_Stdlib_Scanf_Scan_failure=
      caml_new_string("Stdlib.Scanf.Scan_failure"),
     cst_binary=caml_new_string("binary"),
     cst_octal=caml_new_string("octal"),
     cst_hexadecimal=caml_new_string("hexadecimal"),
     cst_a_Char=caml_new_string("a Char"),
     cst_a_String=caml_new_string("a String"),
     cst$93=caml_new_string(""),
     cst$94=caml_new_string(""),
     cst$95=caml_new_string(""),
     cst$96=caml_new_string(""),
     cst$97=caml_new_string(""),
     cst$99=caml_new_string(""),
     cst$98=caml_new_string(""),
     cst_Illegal_character=caml_new_string("Illegal character "),
     cst_Filename_chop_extension=caml_new_string("Filename.chop_extension"),
     cst$110=caml_new_string(""),
     cst_Filename_chop_suffix=caml_new_string("Filename.chop_suffix"),
     cst$109=caml_new_string(""),
     cst$107=caml_new_string("./"),
     cst$106=caml_new_string(".\\"),
     cst$105=caml_new_string("../"),
     cst$104=caml_new_string("..\\"),
     cst$103=caml_new_string("./"),
     cst$102=caml_new_string("../"),
     cst$101=caml_new_string(""),
     cst$100=caml_new_string(""),
     current_dir_name=caml_new_string("."),
     parent_dir_name=caml_new_string(".."),
     dir_sep=caml_new_string("/"),
     cst_TMPDIR=caml_new_string("TMPDIR"),
     cst_tmp=caml_new_string("/tmp"),
     quotequote=caml_new_string("'\\''"),
     current_dir_name$0=caml_new_string("."),
     parent_dir_name$0=caml_new_string(".."),
     dir_sep$0=caml_new_string("\\"),
     cst_TEMP=caml_new_string("TEMP"),
     cst$108=caml_new_string("."),
     current_dir_name$1=caml_new_string("."),
     parent_dir_name$1=caml_new_string(".."),
     dir_sep$1=caml_new_string("/"),
     cst_Cygwin=caml_new_string("Cygwin"),
     cst_Win32=caml_new_string("Win32"),
     zero$4=[254,0.,0.],
     one$4=[254,1.,0.],
     i=[254,0.,1.],
     cst_Series_is_closed$0=caml_new_string("Series is closed"),
     cst_Series_is_closed=caml_new_string("Series is closed"),
     cst_Bigarray_array3_of_genarray=
      caml_new_string("Bigarray.array3_of_genarray"),
     cst_Bigarray_array2_of_genarray=
      caml_new_string("Bigarray.array2_of_genarray"),
     cst_Bigarray_array1_of_genarray=
      caml_new_string("Bigarray.array1_of_genarray"),
     cst_Bigarray_array0_of_genarray=
      caml_new_string("Bigarray.array0_of_genarray"),
     cst_Bigarray_Array3_of_array_non_cubic_data=
      caml_new_string("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array3_of_array_non_cubic_data$0=
      caml_new_string("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array2_of_array_non_rectangular_data=
      caml_new_string("Bigarray.Array2.of_array: non-rectangular data"),
     Invalid_argument=global_data.Invalid_argument,
     Failure=global_data.Failure,
     Match_failure=global_data.Match_failure,
     Assert_failure=global_data.Assert_failure,
     Not_found=global_data.Not_found,
     Out_of_memory=global_data.Out_of_memory,
     Stack_overflow=global_data.Stack_overflow,
     Sys_error=global_data.Sys_error,
     End_of_file=global_data.End_of_file,
     Division_by_zero=global_data.Division_by_zero,
     Sys_blocked_io=global_data.Sys_blocked_io,
     Undefined_recursive_module=global_data.Undefined_recursive_module,
     _l_=[0,0,[0,6,0]],
     _k_=[0,0,[0,7,0]],
     _j_=[0,1,[0,3,[0,4,[0,6,0]]]],
     _i_=[0,1,[0,3,[0,4,[0,7,0]]]],
     _g_=[0,1],
     _h_=[0,0],
     _a_=runtime.caml_int64_create_lo_mi_hi(0,0,32752),
     _b_=runtime.caml_int64_create_lo_mi_hi(0,0,65520),
     _c_=runtime.caml_int64_create_lo_mi_hi(1,0,32752),
     _d_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32751),
     _e_=runtime.caml_int64_create_lo_mi_hi(0,0,16),
     _f_=runtime.caml_int64_create_lo_mi_hi(0,0,15536),
     _q_=[0,0,0],
     _r_=[0,caml_new_string("list.ml"),282,11],
     _v_=[0,caml_new_string("array.ml"),236,4],
     _x_=[0,caml_new_string("float.ml"),381,6],
     _w_=[0,caml_new_string("float.ml"),208,14],
     _I_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     _H_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _G_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _F_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _J_=[0,0,0,0],
     _K_=[0,0,0],
     _L_=[0,caml_new_string("set.ml"),547,18],
     _M_=[0,0,0,0],
     _N_=[0,caml_new_string("map.ml"),398,10],
     _O_=[0,0,0],
     _P_=[0,caml_new_string("stream.ml"),53,12],
     _Q_=[0,0],
     _R_=[0,caml_new_string("stream.ml"),82,12],
     _Y_=[0,caml_new_string("buffer.ml"),205,9],
     _X_=[0,caml_new_string("buffer.ml"),141,19],
     _W_=[0,caml_new_string("buffer.ml"),159,8],
     _V_=[0,caml_new_string("buffer.ml"),120,19],
     _U_=[0,caml_new_string("buffer.ml"),138,8],
     _T_=[0,caml_new_string("buffer.ml"),84,19],
     _S_=[0,caml_new_string("buffer.ml"),117,8],
     _Z_=[0,caml_new_string("camlinternalFormat.ml"),847,23],
     _ai_=[0,caml_new_string("camlinternalFormat.ml"),811,21],
     _aa_=[0,caml_new_string("camlinternalFormat.ml"),812,21],
     _aj_=[0,caml_new_string("camlinternalFormat.ml"),815,21],
     _ab_=[0,caml_new_string("camlinternalFormat.ml"),816,21],
     _ak_=[0,caml_new_string("camlinternalFormat.ml"),819,19],
     _ac_=[0,caml_new_string("camlinternalFormat.ml"),820,19],
     _al_=[0,caml_new_string("camlinternalFormat.ml"),823,22],
     _ad_=[0,caml_new_string("camlinternalFormat.ml"),824,22],
     _am_=[0,caml_new_string("camlinternalFormat.ml"),828,30],
     _ae_=[0,caml_new_string("camlinternalFormat.ml"),829,30],
     _ag_=[0,caml_new_string("camlinternalFormat.ml"),833,26],
     ___=[0,caml_new_string("camlinternalFormat.ml"),834,26],
     _ah_=[0,caml_new_string("camlinternalFormat.ml"),843,28],
     _$_=[0,caml_new_string("camlinternalFormat.ml"),844,28],
     _af_=[0,caml_new_string("camlinternalFormat.ml"),848,23],
     _an_=[0,caml_new_string("camlinternalFormat.ml"),1556,4],
     _ao_=[0,caml_new_string("camlinternalFormat.ml"),1624,39],
     _ap_=[0,caml_new_string("camlinternalFormat.ml"),1647,31],
     _aq_=[0,caml_new_string("camlinternalFormat.ml"),1648,31],
     _ar_=[0,caml_new_string("camlinternalFormat.ml"),1828,8],
     _aV_=
      [0,
       [11,
        caml_new_string("bad input: format type mismatch between "),
        [3,0,[11,caml_new_string(" and "),[3,0,0]]]],
       caml_new_string("bad input: format type mismatch between %S and %S")],
     _aU_=
      [0,
       [11,
        caml_new_string("bad input: format type mismatch between "),
        [3,0,[11,caml_new_string(" and "),[3,0,0]]]],
       caml_new_string("bad input: format type mismatch between %S and %S")],
     _ax_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,0,0,0,[11,caml_new_string(", duplicate flag "),[1,0]]]]]],
       caml_new_string
        ("invalid format %S: at character number %d, duplicate flag %C")],
     _ay_=[0,1,0],
     _az_=[0,0],
     _aB_=[1,0],
     _aA_=[1,1],
     _aD_=[1,1],
     _aC_=[1,1],
     _aH_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", flag "),
            [1,
             [11,
              caml_new_string(" is only allowed after the '"),
              [12,
               37,
               [11,caml_new_string("', before padding and precision"),0]]]]]]]]],
       caml_new_string
        ("invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision")],
     _aE_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(', invalid conversion "'),
            [12,37,[0,[12,34,0]]]]]]]],
       caml_new_string
        ('invalid format %S: at character number %d, invalid conversion "%%%c"')],
     _aF_=[0,0],
     _aG_=[0,0],
     _aI_=[0,[12,64,0]],
     _aJ_=[0,caml_new_string("@ "),1,0],
     _aK_=[0,caml_new_string("@,"),0,0],
     _aL_=[2,60],
     _aM_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": '"),
          [12,
           37,
           [11,
            caml_new_string("' alone is not accepted in character sets, use "),
            [12,
             37,
             [12,
              37,
              [11,
               caml_new_string(" instead at position "),
               [4,0,0,0,[12,46,0]]]]]]]]]],
       caml_new_string
        ("invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d.")],
     _aN_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": integer "),
          [4,
           0,
           0,
           0,
           [11,caml_new_string(" is greater than the limit "),[4,0,0,0,0]]]]]],
       caml_new_string
        ("invalid format %S: integer %d is greater than the limit %d")],
     _aO_=[0,caml_new_string("camlinternalFormat.ml"),2843,11],
     _aP_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(': unclosed sub-format, expected "'),
          [12,
           37,
           [0,[11,caml_new_string('" at character number '),[4,0,0,0,0]]]]]]],
       caml_new_string
        ('invalid format %S: unclosed sub-format, expected "%%%c" at character number %d')],
     _aQ_=[0,caml_new_string("camlinternalFormat.ml"),2905,34],
     _aR_=[0,caml_new_string("camlinternalFormat.ml"),2941,28],
     _aS_=[0,caml_new_string("camlinternalFormat.ml"),2975,25],
     _aT_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", "),
            [2,
             0,
             [11,
              caml_new_string(" is incompatible with '"),
              [0,[11,caml_new_string("' in sub-format "),[3,0,0]]]]]]]]]],
       caml_new_string
        ("invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S")],
     _aw_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", "),
            [2,0,[11,caml_new_string(" expected, read "),[1,0]]]]]]]],
       caml_new_string
        ("invalid format %S: at character number %d, %s expected, read %C")],
     _av_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", '"),
            [0,[11,caml_new_string("' without "),[2,0,0]]]]]]]],
       caml_new_string
        ("invalid format %S: at character number %d, '%c' without %s")],
     _au_=
      [0,
       [11,
        caml_new_string("invalid format "),
        [3,
         0,
         [11,
          caml_new_string(": at character number "),
          [4,0,0,0,[11,caml_new_string(", "),[2,0,0]]]]]],
       caml_new_string("invalid format %S: at character number %d, %s")],
     _at_=
      [0,
       [11,caml_new_string("invalid box description "),[3,0,0]],
       caml_new_string("invalid box description %S")],
     _as_=[0,0,4],
     _bf_=[0,[2,0,[0,0]],caml_new_string("%s%c")],
     _a$_=[0,[2,0,0],caml_new_string("%s")],
     _ba_=[0,[2,0,0],caml_new_string("%s")],
     _a9_=[0,[2,0,0],caml_new_string("%s")],
     _a__=[0,[2,0,0],caml_new_string("%s")],
     _a7_=[0,[2,0,0],caml_new_string("%s")],
     _a8_=[0,[2,0,0],caml_new_string("%s")],
     _a1_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(": unknown option '"),
         [2,0,[11,caml_new_string("'.\n"),0]]]],
       caml_new_string("%s: unknown option '%s'.\n")],
     _a4_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(": wrong argument '"),
         [2,
          0,
          [11,
           caml_new_string("'; option '"),
           [2,
            0,
            [11,
             caml_new_string("' expects "),
             [2,0,[11,caml_new_string(".\n"),0]]]]]]]],
       caml_new_string("%s: wrong argument '%s'; option '%s' expects %s.\n")],
     _a5_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(": option '"),
         [2,0,[11,caml_new_string("' needs an argument.\n"),0]]]],
       caml_new_string("%s: option '%s' needs an argument.\n")],
     _a6_=
      [0,
       [2,0,[11,caml_new_string(": "),[2,0,[11,caml_new_string(".\n"),0]]]],
       caml_new_string("%s: %s.\n")],
     _a2_=[0,caml_new_string("-help")],
     _a3_=[0,caml_new_string("--help")],
     _a0_=[0,[2,0,0],caml_new_string("%s")],
     _aZ_=[0,[2,0,[12,10,0]],caml_new_string("%s\n")],
     _aY_=[0,caml_new_string("-help")],
     _aW_=
      [0,
       [11,caml_new_string("  "),[2,0,[12,32,[2,0,[12,10,0]]]]],
       caml_new_string("  %s %s\n")],
     _aX_=
      [0,
       [11,caml_new_string("  "),[2,0,[12,32,[2,0,[2,0,[12,10,0]]]]]],
       caml_new_string("  %s %s%s\n")],
     _bk_=
      [0,[11,caml_new_string(", "),[2,0,[2,0,0]]],caml_new_string(", %s%s")],
     _bt_=[0,[2,0,[12,10,0]],caml_new_string("%s\n")],
     _br_=[0,[2,0,[12,10,0]],caml_new_string("%s\n")],
     _bs_=
      [0,
       [11,
        caml_new_string
         ("(Program not linked with -g, cannot print stack backtrace)\n"),
        0],
       caml_new_string
        ("(Program not linked with -g, cannot print stack backtrace)\n")],
     _bp_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(' file "'),
         [2,
          0,
          [12,
           34,
           [2,
            0,
            [11,
             caml_new_string(", line "),
             [4,
              0,
              0,
              0,
              [11,caml_new_string(", characters "),[4,0,0,0,[12,45,partial]]]]]]]]]],
       caml_new_string('%s file "%s"%s, line %d, characters %d-%d')],
     _bq_=
      [0,
       [2,0,[11,caml_new_string(" unknown location"),0]],
       caml_new_string("%s unknown location")],
     _bo_=
      [0,
       [11,caml_new_string("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_new_string("Uncaught exception: %s\n")],
     _bn_=
      [0,
       [11,caml_new_string("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_new_string("Uncaught exception: %s\n")],
     _bl_=[0,[12,40,[2,0,[2,0,[12,41,0]]]],caml_new_string("(%s%s)")],
     _bm_=[0,[12,40,[2,0,[12,41,0]]],caml_new_string("(%s)")],
     _bj_=[0,[4,0,0,0,0],caml_new_string("%d")],
     _bi_=[0,[3,0,0],caml_new_string("%S")],
     _bC_=
      [0,
       [11,caml_new_string("minor_collections: "),[4,0,0,0,[12,10,0]]],
       caml_new_string("minor_collections: %d\n")],
     _bD_=
      [0,
       [11,caml_new_string("major_collections: "),[4,0,0,0,[12,10,0]]],
       caml_new_string("major_collections: %d\n")],
     _bE_=
      [0,
       [11,caml_new_string("compactions:       "),[4,0,0,0,[12,10,0]]],
       caml_new_string("compactions:       %d\n")],
     _bF_=[0,[12,10,0],caml_new_string("\n")],
     _bG_=[0,[8,0,0,[0,0],0],caml_new_string("%.0f")],
     _bH_=
      [0,
       [11,caml_new_string("minor_words:    "),[8,0,[1,1],[0,0],[12,10,0]]],
       caml_new_string("minor_words:    %*.0f\n")],
     _bI_=
      [0,
       [11,caml_new_string("promoted_words: "),[8,0,[1,1],[0,0],[12,10,0]]],
       caml_new_string("promoted_words: %*.0f\n")],
     _bJ_=
      [0,
       [11,caml_new_string("major_words:    "),[8,0,[1,1],[0,0],[12,10,0]]],
       caml_new_string("major_words:    %*.0f\n")],
     _bK_=[0,[12,10,0],caml_new_string("\n")],
     _bL_=[0,[4,0,0,0,0],caml_new_string("%d")],
     _bM_=
      [0,
       [11,caml_new_string("top_heap_words: "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("top_heap_words: %*d\n")],
     _bN_=
      [0,
       [11,caml_new_string("heap_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("heap_words:     %*d\n")],
     _bO_=
      [0,
       [11,caml_new_string("live_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("live_words:     %*d\n")],
     _bP_=
      [0,
       [11,caml_new_string("free_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("free_words:     %*d\n")],
     _bQ_=
      [0,
       [11,caml_new_string("largest_free:   "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("largest_free:   %*d\n")],
     _bR_=
      [0,
       [11,caml_new_string("fragments:      "),[4,0,[1,1],0,[12,10,0]]],
       caml_new_string("fragments:      %*d\n")],
     _bS_=[0,[12,10,0],caml_new_string("\n")],
     _bT_=
      [0,
       [11,caml_new_string("live_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_new_string("live_blocks: %d\n")],
     _bU_=
      [0,
       [11,caml_new_string("free_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_new_string("free_blocks: %d\n")],
     _bV_=
      [0,
       [11,caml_new_string("heap_chunks: "),[4,0,0,0,[12,10,0]]],
       caml_new_string("heap_chunks: %d\n")],
     _bY_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _bZ_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _b0_=
      [0,
       987910699,
       495797812,
       364182224,
       414272206,
       318284740,
       990407751,
       383018966,
       270373319,
       840823159,
       24560019,
       536292337,
       512266505,
       189156120,
       730249596,
       143776328,
       51606627,
       140166561,
       366354223,
       1003410265,
       700563762,
       981890670,
       913149062,
       526082594,
       1021425055,
       784300257,
       667753350,
       630144451,
       949649812,
       48546892,
       415514493,
       258888527,
       511570777,
       89983870,
       283659902,
       308386020,
       242688715,
       482270760,
       865188196,
       1027664170,
       207196989,
       193777847,
       619708188,
       671350186,
       149669678,
       257044018,
       87658204,
       558145612,
       183450813,
       28133145,
       901332182,
       710253903,
       510646120,
       652377910,
       409934019,
       801085050],
     _b4_=[0,0],
     _b3_=[0,caml_new_string("hashtbl.ml"),108,23],
     _b7_=[3,0,3],
     _b6_=[0,caml_new_string("")],
     _b5_=[0,caml_new_string(""),0,caml_new_string("")],
     _cl_=[0,91],
     _ck_=[0,123],
     _cm_=[0,caml_new_string("scanf.ml"),1455,13],
     _cn_=[0,[3,0,[10,0]],caml_new_string("%S%!")],
     _cj_=[0,37,caml_new_string("")],
     _ci_=
      [0,
       [11,
        caml_new_string("scanf: bad input at char number "),
        [4,3,0,0,[11,caml_new_string(": "),[2,0,0]]]],
       caml_new_string("scanf: bad input at char number %i: %s")],
     _ch_=
      [0,
       [11,
        caml_new_string("the character "),
        [1,[11,caml_new_string(" cannot start a boolean"),0]]],
       caml_new_string("the character %C cannot start a boolean")],
     _cg_=
      [0,
       [11,caml_new_string("bad character hexadecimal encoding \\"),[0,[0,0]]],
       caml_new_string("bad character hexadecimal encoding \\%c%c")],
     _cf_=
      [0,
       [11,caml_new_string("bad character decimal encoding \\"),[0,[0,[0,0]]]],
       caml_new_string("bad character decimal encoding \\%c%c%c")],
     _ce_=
      [0,
       [11,
        caml_new_string("character "),
        [1,
         [11,
          caml_new_string(" is not a valid "),
          [2,0,[11,caml_new_string(" digit"),0]]]]],
       caml_new_string("character %C is not a valid %s digit")],
     _cd_=
      [0,
       [11,
        caml_new_string("character "),
        [1,[11,caml_new_string(" is not a decimal digit"),0]]],
       caml_new_string("character %C is not a decimal digit")],
     _cc_=[0,caml_new_string("scanf.ml"),555,9],
     _cb_=
      [0,
       [11,caml_new_string("invalid boolean '"),[2,0,[12,39,0]]],
       caml_new_string("invalid boolean '%s'")],
     _ca_=
      [0,
       [11,
        caml_new_string("looking for "),
        [1,[11,caml_new_string(", found "),[1,0]]]],
       caml_new_string("looking for %C, found %C")],
     _b$_=
      [0,
       [11,
        caml_new_string("scanning of "),
        [2,
         0,
         [11,
          caml_new_string
           (" failed: premature end of file occurred before end of token"),
          0]]],
       caml_new_string
        ("scanning of %s failed: premature end of file occurred before end of token")],
     _b__=
      [0,
       [11,
        caml_new_string("scanning of "),
        [2,
         0,
         [11,
          caml_new_string
           (" failed: the specified length was too short for token"),
          0]]],
       caml_new_string
        ("scanning of %s failed: the specified length was too short for token")],
     _b9_=
      [0,
       [11,caml_new_string("illegal escape character "),[1,0]],
       caml_new_string("illegal escape character %C")],
     _cu_=[0,caml_new_string("camlinternalOO.ml"),438,17],
     _ct_=[0,caml_new_string("camlinternalOO.ml"),420,13],
     _cs_=[0,caml_new_string("camlinternalOO.ml"),417,13],
     _cr_=[0,caml_new_string("camlinternalOO.ml"),414,13],
     _cq_=[0,caml_new_string("camlinternalOO.ml"),411,13],
     _cp_=[0,caml_new_string("camlinternalOO.ml"),408,13],
     _co_=[0,caml_new_string("camlinternalOO.ml"),281,50],
     _cx_=[0,0],
     _cw_=[0,0],
     _cv_=[0,0],
     _cB_=[0,7,0],
     _cA_=[0,1,[0,3,[0,5,0]]],
     _cz_=[0,[2,0,[4,6,[0,2,6],0,[2,0,0]]],caml_new_string("%s%06x%s")],
     _cC_=[254,0.,0.];
    function erase_rel(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,erase_rel(rest)];
         case 1:var rest$0=param[1];return [1,erase_rel(rest$0)];
         case 2:var rest$1=param[1];return [2,erase_rel(rest$1)];
         case 3:var rest$2=param[1];return [3,erase_rel(rest$2)];
         case 4:var rest$3=param[1];return [4,erase_rel(rest$3)];
         case 5:var rest$4=param[1];return [5,erase_rel(rest$4)];
         case 6:var rest$5=param[1];return [6,erase_rel(rest$5)];
         case 7:var rest$6=param[1];return [7,erase_rel(rest$6)];
         case 8:
          var rest$7=param[2],ty=param[1];return [8,ty,erase_rel(rest$7)];
         case 9:
          var rest$8=param[3],ty1=param[1];
          return [9,ty1,ty1,erase_rel(rest$8)];
         case 10:var rest$9=param[1];return [10,erase_rel(rest$9)];
         case 11:var rest$10=param[1];return [11,erase_rel(rest$10)];
         case 12:var rest$11=param[1];return [12,erase_rel(rest$11)];
         case 13:var rest$12=param[1];return [13,erase_rel(rest$12)];
         default:var rest$13=param[1];return [14,erase_rel(rest$13)]}}
    function concat_fmtty(fmtty1,fmtty2)
     {if(typeof fmtty1 === "number")
       return fmtty2;
      else
       switch(fmtty1[0])
        {case 0:var rest=fmtty1[1];return [0,concat_fmtty(rest,fmtty2)];
         case 1:var rest$0=fmtty1[1];return [1,concat_fmtty(rest$0,fmtty2)];
         case 2:var rest$1=fmtty1[1];return [2,concat_fmtty(rest$1,fmtty2)];
         case 3:var rest$2=fmtty1[1];return [3,concat_fmtty(rest$2,fmtty2)];
         case 4:var rest$3=fmtty1[1];return [4,concat_fmtty(rest$3,fmtty2)];
         case 5:var rest$4=fmtty1[1];return [5,concat_fmtty(rest$4,fmtty2)];
         case 6:var rest$5=fmtty1[1];return [6,concat_fmtty(rest$5,fmtty2)];
         case 7:var rest$6=fmtty1[1];return [7,concat_fmtty(rest$6,fmtty2)];
         case 8:
          var rest$7=fmtty1[2],ty=fmtty1[1];
          return [8,ty,concat_fmtty(rest$7,fmtty2)];
         case 9:
          var rest$8=fmtty1[3],ty2=fmtty1[2],ty1=fmtty1[1];
          return [9,ty1,ty2,concat_fmtty(rest$8,fmtty2)];
         case 10:var rest$9=fmtty1[1];return [10,concat_fmtty(rest$9,fmtty2)];
         case 11:
          var rest$10=fmtty1[1];return [11,concat_fmtty(rest$10,fmtty2)];
         case 12:
          var rest$11=fmtty1[1];return [12,concat_fmtty(rest$11,fmtty2)];
         case 13:
          var rest$12=fmtty1[1];return [13,concat_fmtty(rest$12,fmtty2)];
         default:
          var rest$13=fmtty1[1];return [14,concat_fmtty(rest$13,fmtty2)]}}
    function concat_fmt(fmt1,fmt2)
     {if(typeof fmt1 === "number")
       return fmt2;
      else
       switch(fmt1[0])
        {case 0:var rest=fmt1[1];return [0,concat_fmt(rest,fmt2)];
         case 1:var rest$0=fmt1[1];return [1,concat_fmt(rest$0,fmt2)];
         case 2:
          var rest$1=fmt1[2],pad=fmt1[1];
          return [2,pad,concat_fmt(rest$1,fmt2)];
         case 3:
          var rest$2=fmt1[2],pad$0=fmt1[1];
          return [3,pad$0,concat_fmt(rest$2,fmt2)];
         case 4:
          var rest$3=fmt1[4],prec=fmt1[3],pad$1=fmt1[2],iconv=fmt1[1];
          return [4,iconv,pad$1,prec,concat_fmt(rest$3,fmt2)];
         case 5:
          var rest$4=fmt1[4],prec$0=fmt1[3],pad$2=fmt1[2],iconv$0=fmt1[1];
          return [5,iconv$0,pad$2,prec$0,concat_fmt(rest$4,fmt2)];
         case 6:
          var rest$5=fmt1[4],prec$1=fmt1[3],pad$3=fmt1[2],iconv$1=fmt1[1];
          return [6,iconv$1,pad$3,prec$1,concat_fmt(rest$5,fmt2)];
         case 7:
          var rest$6=fmt1[4],prec$2=fmt1[3],pad$4=fmt1[2],iconv$2=fmt1[1];
          return [7,iconv$2,pad$4,prec$2,concat_fmt(rest$6,fmt2)];
         case 8:
          var rest$7=fmt1[4],prec$3=fmt1[3],pad$5=fmt1[2],fconv=fmt1[1];
          return [8,fconv,pad$5,prec$3,concat_fmt(rest$7,fmt2)];
         case 9:
          var rest$8=fmt1[2],pad$6=fmt1[1];
          return [9,pad$6,concat_fmt(rest$8,fmt2)];
         case 10:var rest$9=fmt1[1];return [10,concat_fmt(rest$9,fmt2)];
         case 11:
          var rest$10=fmt1[2],str=fmt1[1];
          return [11,str,concat_fmt(rest$10,fmt2)];
         case 12:
          var rest$11=fmt1[2],chr=fmt1[1];
          return [12,chr,concat_fmt(rest$11,fmt2)];
         case 13:
          var rest$12=fmt1[3],fmtty=fmt1[2],pad$7=fmt1[1];
          return [13,pad$7,fmtty,concat_fmt(rest$12,fmt2)];
         case 14:
          var rest$13=fmt1[3],fmtty$0=fmt1[2],pad$8=fmt1[1];
          return [14,pad$8,fmtty$0,concat_fmt(rest$13,fmt2)];
         case 15:var rest$14=fmt1[1];return [15,concat_fmt(rest$14,fmt2)];
         case 16:var rest$15=fmt1[1];return [16,concat_fmt(rest$15,fmt2)];
         case 17:
          var rest$16=fmt1[2],fmting_lit=fmt1[1];
          return [17,fmting_lit,concat_fmt(rest$16,fmt2)];
         case 18:
          var rest$17=fmt1[2],fmting_gen=fmt1[1];
          return [18,fmting_gen,concat_fmt(rest$17,fmt2)];
         case 19:var rest$18=fmt1[1];return [19,concat_fmt(rest$18,fmt2)];
         case 20:
          var rest$19=fmt1[3],char_set=fmt1[2],width_opt=fmt1[1];
          return [20,width_opt,char_set,concat_fmt(rest$19,fmt2)];
         case 21:
          var rest$20=fmt1[2],counter=fmt1[1];
          return [21,counter,concat_fmt(rest$20,fmt2)];
         case 22:var rest$21=fmt1[1];return [22,concat_fmt(rest$21,fmt2)];
         case 23:
          var rest$22=fmt1[2],ign=fmt1[1];
          return [23,ign,concat_fmt(rest$22,fmt2)];
         default:
          var rest$23=fmt1[3],f=fmt1[2],arity=fmt1[1];
          return [24,arity,f,concat_fmt(rest$23,fmt2)]}}
    var CamlinternalFormatBasics=[0,concat_fmtty,erase_rel,concat_fmt];
    caml_register_global
     (706,CamlinternalFormatBasics,"CamlinternalFormatBasics");
    function failwith(s){throw [0,Failure,s]}
    function invalid_arg(s){throw [0,Invalid_argument,s]}
    var Exit=[248,cst_Stdlib_Exit,caml_fresh_oo_id(0)];
    function min(x,y){return caml_lessequal(x,y)?x:y}
    function max(x,y){return caml_greaterequal(x,y)?x:y}
    function abs(x){return 0 <= x?x:- x | 0}
    function lnot(x){return x ^ -1}
    var
     infinity=caml_int64_float_of_bits(_a_),
     neg_infinity=caml_int64_float_of_bits(_b_),
     nan=caml_int64_float_of_bits(_c_),
     max_float=caml_int64_float_of_bits(_d_),
     min_float=caml_int64_float_of_bits(_e_),
     epsilon=caml_int64_float_of_bits(_f_),
     max_int=2147483647,
     min_int=-2147483648;
    function symbol(s1,s2)
     {var
       l1=caml_ml_string_length(s1),
       l2=caml_ml_string_length(s2),
       s=caml_create_bytes(l1 + l2 | 0);
      caml_blit_string(s1,0,s,0,l1);
      caml_blit_string(s2,0,s,l1,l2);
      return caml_string_of_bytes(s)}
    function char_of_int(n)
     {if(0 <= n)if(! (255 < n))return n;return invalid_arg(cst_char_of_int)}
    function string_of_bool(b){return b?cst_true:cst_false}
    function bool_of_string(param)
     {return caml_string_notequal(param,cst_false$0)
              ?caml_string_notequal(param,cst_true$0)
                ?invalid_arg(cst_bool_of_string)
                :1
              :0}
    function bool_of_string_opt(param)
     {return caml_string_notequal(param,cst_false$1)
              ?caml_string_notequal(param,cst_true$1)?0:_g_
              :_h_}
    function string_of_int(n){return caml_new_string("" + n)}
    function int_of_string_opt(s)
     {try
       {var _Az_=[0,caml_int_of_string(s)];return _Az_}
      catch(_AA_)
       {_AA_ = caml_wrap_exception(_AA_);
        if(_AA_[1] === Failure)return 0;
        throw _AA_}}
    function valid_float_lexem(s)
     {var l=caml_ml_string_length(s),i=0;
      for(;;)
       {if(l <= i)return symbol(s,cst);
        var
         match=caml_string_get(s,i),
         switch$0=48 <= match?58 <= match?0:1:45 === match?1:0;
        if(switch$0){var i$0=i + 1 | 0,i=i$0;continue}
        return s}}
    function to_string(f)
     {return valid_float_lexem(caml_format_float(cst_12g,f))}
    function of_string_opt(s)
     {try
       {var _Ax_=[0,caml_float_of_string(s)];return _Ax_}
      catch(_Ay_)
       {_Ay_ = caml_wrap_exception(_Ay_);
        if(_Ay_[1] === Failure)return 0;
        throw _Ay_}}
    function append(l1,l2)
     {if(l1){var tl=l1[2],hd=l1[1];return [0,hd,append(tl,l2)]}return l2}
    var
     stdin=caml_ml_open_descriptor_in(0),
     stdout=caml_ml_open_descriptor_out(1),
     stderr=caml_ml_open_descriptor_out(2);
    function open_out_gen(mode,perm,name)
     {var c=caml_ml_open_descriptor_out(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_out(name){return open_out_gen(_i_,438,name)}
    function open_out_bin(name){return open_out_gen(_j_,438,name)}
    function flush_all(param)
     {function iter(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var l=param$0[2],a=param$0[1];
            try
             {caml_ml_flush(a)}
            catch(_Aw_)
             {_Aw_ = caml_wrap_exception(_Aw_);
              if(_Aw_[1] !== Sys_error)throw _Aw_;
              var _Av_=_Aw_}
            var param$0=l;
            continue}
          return 0}}
      return iter(runtime.caml_ml_out_channels_list(0))}
    function output_bytes(oc,s)
     {return caml_ml_output_bytes(oc,s,0,caml_ml_bytes_length(s))}
    function output_string(oc,s)
     {return caml_ml_output(oc,s,0,caml_ml_string_length(s))}
    function output(oc,s,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(s) - len | 0) < ofs))
         return caml_ml_output_bytes(oc,s,ofs,len);
      return invalid_arg(cst_output)}
    function output_substring(oc,s,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_string_length(s) - len | 0) < ofs))
         return caml_ml_output(oc,s,ofs,len);
      return invalid_arg(cst_output_substring)}
    function output_value(chan,v){return caml_output_value(chan,v,0)}
    function close_out(oc){caml_ml_flush(oc);return caml_ml_close_channel(oc)}
    function close_out_noerr(oc)
     {try {caml_ml_flush(oc)}catch(_Au_){}
      try
       {var _As_=caml_ml_close_channel(oc);return _As_}
      catch(_At_){return 0}}
    function open_in_gen(mode,perm,name)
     {var c=caml_ml_open_descriptor_in(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_in(name){return open_in_gen(_k_,0,name)}
    function open_in_bin(name){return open_in_gen(_l_,0,name)}
    function input(ic,s,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(s) - len | 0) < ofs))
         return caml_ml_input(ic,s,ofs,len);
      return invalid_arg(cst_input)}
    function unsafe_really_input(ic,s,ofs,len)
     {var ofs$0=ofs,len$0=len;
      for(;;)
       {if(0 < len$0)
         {var r=caml_ml_input(ic,s,ofs$0,len$0);
          if(0 === r)throw End_of_file;
          var len$1=len$0 - r | 0,ofs$1=ofs$0 + r | 0,ofs$0=ofs$1,len$0=len$1;
          continue}
        return 0}}
    function really_input(ic,s,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(s) - len | 0) < ofs))
         return unsafe_really_input(ic,s,ofs,len);
      return invalid_arg(cst_really_input)}
    function really_input_string(ic,len)
     {var s=caml_create_bytes(len);
      really_input(ic,s,0,len);
      return caml_string_of_bytes(s)}
    function input_line(chan)
     {function build_result(buf,pos,param)
       {var pos$0=pos,param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1],len=caml_ml_bytes_length(hd);
            caml_blit_bytes(hd,0,buf,pos$0 - len | 0,len);
            var pos$1=pos$0 - len | 0,pos$0=pos$1,param$0=tl;
            continue}
          return buf}}
      var accu=0,len=0;
      for(;;)
       {var n=runtime.caml_ml_input_scan_line(chan);
        if(0 === n)
         {if(! accu)throw End_of_file;
          var _Ar_=build_result(caml_create_bytes(len),len,accu)}
        else
         {if(! (0 < n))
           {var beg=caml_create_bytes(- n | 0);
            caml_ml_input(chan,beg,0,- n | 0);
            var len$1=len - n | 0,accu$0=[0,beg,accu],accu=accu$0,len=len$1;
            continue}
          var res=caml_create_bytes(n - 1 | 0);
          caml_ml_input(chan,res,0,n - 1 | 0);
          caml_ml_input_char(chan);
          if(accu)
           var
            len$0=(len + n | 0) - 1 | 0,
            _Ar_=build_result(caml_create_bytes(len$0),len$0,[0,res,accu]);
          else
           var _Ar_=res}
        return caml_string_of_bytes(_Ar_)}}
    function close_in_noerr(ic)
     {try
       {var _Ap_=caml_ml_close_channel(ic);return _Ap_}
      catch(_Aq_){return 0}}
    function print_char(c){return caml_ml_output_char(stdout,c)}
    function print_string(s){return output_string(stdout,s)}
    function print_bytes(s){return output_bytes(stdout,s)}
    function print_int(i)
     {return output_string(stdout,caml_new_string("" + i))}
    function print_float(f){return output_string(stdout,to_string(f))}
    function print_endline(s)
     {output_string(stdout,s);
      caml_ml_output_char(stdout,10);
      return caml_ml_flush(stdout)}
    function print_newline(param)
     {caml_ml_output_char(stdout,10);return caml_ml_flush(stdout)}
    function prerr_char(c){return caml_ml_output_char(stderr,c)}
    function prerr_string(s){return output_string(stderr,s)}
    function prerr_bytes(s){return output_bytes(stderr,s)}
    function prerr_int(i)
     {return output_string(stderr,caml_new_string("" + i))}
    function prerr_float(f){return output_string(stderr,to_string(f))}
    function prerr_endline(s)
     {output_string(stderr,s);
      caml_ml_output_char(stderr,10);
      return caml_ml_flush(stderr)}
    function prerr_newline(param)
     {caml_ml_output_char(stderr,10);return caml_ml_flush(stderr)}
    function read_line(param){caml_ml_flush(stdout);return input_line(stdin)}
    function read_int(param){return caml_int_of_string(read_line(0))}
    function read_int_opt(param){return int_of_string_opt(read_line(0))}
    function read_float(param){return caml_float_of_string(read_line(0))}
    function read_float_opt(param){return of_string_opt(read_line(0))}
    function string_of_format(param){var str=param[2];return str}
    function symbol$0(param,_An_)
     {var
       str2=_An_[2],
       fmt2=_An_[1],
       str1=param[2],
       fmt1=param[1],
       _Ao_=symbol(str1,symbol(cst$0,str2));
      return [0,concat_fmt(fmt1,fmt2),_Ao_]}
    var exit_function=[0,flush_all];
    function at_exit(f)
     {var g=exit_function[1],f_already_ran=[0,0];
      exit_function[1]
      =
      function(param)
       {if(1 - f_already_ran[1]){f_already_ran[1] = 1;caml_call1(f,0)}
        return caml_call1(g,0)};
      return 0}
    function do_at_exit(param){return caml_call1(exit_function[1],0)}
    function exit(retcode)
     {do_at_exit(0);return runtime.caml_sys_exit(retcode)}
    var
     set_binary_mode_in=caml_ml_set_binary_mode,
     close_in=caml_ml_close_channel,
     in_channel_length=caml_ml_channel_size,
     pos_in=runtime.caml_ml_pos_in,
     seek_in=runtime.caml_ml_seek_in,
     input_value=caml_input_value,
     input_binary_int=runtime.caml_ml_input_int,
     input_byte=caml_ml_input_char,
     input_char=caml_ml_input_char,
     set_binary_mode_out=caml_ml_set_binary_mode,
     out_channel_length=caml_ml_channel_size,
     pos_out=runtime.caml_ml_pos_out,
     seek_out=runtime.caml_ml_seek_out,
     output_binary_int=runtime.caml_ml_output_int,
     output_byte=caml_ml_output_char,
     output_char=caml_ml_output_char,
     flush=caml_ml_flush,
     Stdlib=
      [0,
       invalid_arg,
       failwith,
       Exit,
       Match_failure,
       Assert_failure,
       Invalid_argument,
       Failure,
       Not_found,
       Out_of_memory,
       Stack_overflow,
       Sys_error,
       End_of_file,
       Division_by_zero,
       Sys_blocked_io,
       Undefined_recursive_module,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       symbol,
       char_of_int,
       string_of_bool,
       bool_of_string_opt,
       bool_of_string,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int_opt,
       read_int,
       read_float_opt,
       read_float,
       open_out,
       open_out_bin,
       open_out_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close_out,
       close_out_noerr,
       set_binary_mode_out,
       open_in,
       open_in_bin,
       open_in_gen,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close_in,
       close_in_noerr,
       set_binary_mode_in,
       [0,
        runtime.caml_ml_seek_out_64,
        runtime.caml_ml_pos_out_64,
        caml_ml_channel_size_64,
        runtime.caml_ml_seek_in_64,
        runtime.caml_ml_pos_in_64,
        caml_ml_channel_size_64],
       string_of_format,
       symbol$0,
       exit,
       at_exit,
       valid_float_lexem,
       unsafe_really_input,
       do_at_exit];
    caml_register_global(719,Stdlib,"Stdlib");
    var
     Exit$0=[248,cst_Stdlib_Pervasives_Exit,caml_fresh_oo_id(0)],
     Stdlib_pervasives=
      [0,
       invalid_arg,
       failwith,
       Exit$0,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       symbol,
       char_of_int,
       string_of_bool,
       bool_of_string,
       bool_of_string_opt,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int,
       read_int_opt,
       read_float,
       read_float_opt,
       open_out,
       open_out_bin,
       open_out_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close_out,
       close_out_noerr,
       set_binary_mode_out,
       open_in,
       open_in_bin,
       open_in_gen,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close_in,
       close_in_noerr,
       set_binary_mode_in,
       string_of_format,
       symbol$0,
       exit,
       at_exit,
       valid_float_lexem,
       do_at_exit];
    caml_register_global(720,Stdlib_pervasives,"Stdlib__pervasives");
    function empty(param){return 0}
    function return$0(x,param){return [0,x,empty]}
    function map(f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var
         next=match[2],
         x=match[1],
         _Al_=function(_Am_){return map(f,next,_Am_)};
        return [0,caml_call1(f,x),_Al_]}
      return 0}
    function filter_map(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1],match$0=caml_call1(f,x);
          if(match$0)
           {var y=match$0[1];
            return [0,y,function(_Ak_){return filter_map(f,next,_Ak_)}]}
          var seq$0=next;
          continue}
        return 0}}
    function filter(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          if(caml_call1(f,x))
           return [0,x,function(_Aj_){return filter(f,next,_Aj_)}];
          var seq$0=next;
          continue}
        return 0}}
    function flat_map$0(counter,f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1],_Ai_=caml_call1(f,x),_Ah_=0;
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return flat_map_app$0(counter$0,f,_Ai_,next,_Ah_)}
        return caml_trampoline_return(flat_map_app$0,[0,f,_Ai_,next,_Ah_])}
      return 0}
    function flat_map_app$0(counter,f,seq,tail,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1];
        return [0,x,function(_Ag_){return flat_map_app(f,next,tail,_Ag_)}]}
      var _Af_=0;
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return flat_map$0(counter$0,f,tail,_Af_)}
      return caml_trampoline_return(flat_map$0,[0,f,tail,_Af_])}
    function flat_map(f,seq,param)
     {return caml_trampoline(flat_map$0(0,f,seq,param))}
    function flat_map_app(f,seq,tail,param)
     {return caml_trampoline(flat_map_app$0(0,f,seq,tail,param))}
    function fold_left(f,acc,seq)
     {var acc$0=acc,seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var
           next=match[2],
           x=match[1],
           acc$1=caml_call2(f,acc$0,x),
           acc$0=acc$1,
           seq$0=next;
          continue}
        return acc$0}}
    function iter(f,seq)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          caml_call1(f,x);
          var seq$0=next;
          continue}
        return 0}}
    var
     Stdlib_seq=
      [0,empty,return$0,map,filter,filter_map,flat_map,fold_left,iter];
    caml_register_global(721,Stdlib_seq,"Stdlib__seq");
    var none=0;
    function some(v){return [0,v]}
    function value(o,default$0){if(o){var v=o[1];return v}return default$0}
    function get(param)
     {if(param){var v=param[1];return v}
      return invalid_arg(cst_option_is_None)}
    function bind(o,f){if(o){var v=o[1];return caml_call1(f,v)}return 0}
    function join(param)
     {if(param){var _Ae_=param[1];if(_Ae_)return _Ae_}return 0}
    function map$0(f,o){if(o){var v=o[1];return [0,caml_call1(f,v)]}return 0}
    function fold(none,some,param)
     {if(param){var v=param[1];return caml_call1(some,v)}return none}
    function iter$0(f,param)
     {if(param){var v=param[1];return caml_call1(f,v)}return 0}
    function is_none(param){return param?0:1}
    function is_some(param){return param?1:0}
    function equal(eq,o0,o1)
     {if(o0)
       {if(o1){var v1=o1[1],v0=o0[1];return caml_call2(eq,v0,v1)}}
      else
       if(! o1)return 1;
      return 0}
    function compare(cmp,o0,o1)
     {if(o0)
       {var _Ad_=o0[1];
        if(o1){var v1=o1[1];return caml_call2(cmp,_Ad_,v1)}
        return 1}
      return o1?-1:0}
    function to_result(none,param)
     {if(param){var v=param[1];return [0,v]}return [1,none]}
    function to_list(param){if(param){var v=param[1];return [0,v,0]}return 0}
    function to_seq(param)
     {if(param){var v=param[1];return function(_Ac_){return return$0(v,_Ac_)}}
      return empty}
    var
     Stdlib_option=
      [0,
       none,
       some,
       value,
       get,
       bind,
       join,
       map$0,
       fold,
       iter$0,
       is_none,
       is_some,
       equal,
       compare,
       to_result,
       to_list,
       to_seq];
    caml_register_global(722,Stdlib_option,"Stdlib__option");
    function ok(v){return [0,v]}
    function error(e){return [1,e]}
    function value$0(r,default$0)
     {if(0 === r[0]){var v=r[1];return v}return default$0}
    function get_ok(param)
     {if(0 === param[0]){var v=param[1];return v}
      return invalid_arg(cst_result_is_Error)}
    function get_error(param)
     {if(0 === param[0])return invalid_arg(cst_result_is_Ok);
      var e=param[1];
      return e}
    function bind$0(r,f)
     {if(0 === r[0]){var v=r[1];return caml_call1(f,v)}return r}
    function join$0(e){if(0 === e[0]){var r=e[1];return r}return e}
    function map$1(f,e)
     {if(0 === e[0]){var v=e[1];return [0,caml_call1(f,v)]}return e}
    function map_error(f,v)
     {if(0 === v[0])return v;var e=v[1];return [1,caml_call1(f,e)]}
    function fold$0(ok,error,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(ok,v)}
      var e=param[1];
      return caml_call1(error,e)}
    function iter$1(f,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(f,v)}return 0}
    function iter_error(f,param)
     {if(0 === param[0])return 0;var e=param[1];return caml_call1(f,e)}
    function is_ok(param){return 0 === param[0]?1:0}
    function is_error(param){return 0 === param[0]?0:1}
    function equal$0(ok,error,r0,match)
     {if(0 === r0[0])
       {var _Aa_=r0[1];
        if(0 === match[0]){var v1=match[1];return caml_call2(ok,_Aa_,v1)}}
      else
       {var _Ab_=r0[1];
        if(0 !== match[0]){var e1=match[1];return caml_call2(error,_Ab_,e1)}}
      return 0}
    function compare$0(ok,error,r0,match)
     {if(0 === r0[0])
       {var _z__=r0[1];
        if(0 === match[0]){var v1=match[1];return caml_call2(ok,_z__,v1)}
        return -1}
      var _z$_=r0[1];
      if(0 === match[0])return 1;
      var e1=match[1];
      return caml_call2(error,_z$_,e1)}
    function to_option(param)
     {if(0 === param[0]){var v=param[1];return [0,v]}return 0}
    function to_list$0(param)
     {if(0 === param[0]){var v=param[1];return [0,v,0]}return 0}
    function to_seq$0(param)
     {if(0 === param[0])
       {var v=param[1];return function(_z9_){return return$0(v,_z9_)}}
      return empty}
    var
     Stdlib_result=
      [0,
       ok,
       error,
       value$0,
       get_ok,
       get_error,
       bind$0,
       join$0,
       map$1,
       map_error,
       fold$0,
       iter$1,
       iter_error,
       is_ok,
       is_error,
       equal$0,
       compare$0,
       to_option,
       to_list$0,
       to_seq$0];
    caml_register_global(723,Stdlib_result,"Stdlib__result");
    function equal$1(_z8_,_z7_){return _z8_ === _z7_?1:0}
    var compare$1=caml_int_compare;
    function to_int(param){return 0 === param?0:1}
    function to_float(param){return 0 === param?0.:1.}
    function to_string$0(param){return 0 === param?cst_false$2:cst_true$2}
    var
     Stdlib_bool=
      [0,
       function(_z6_){return 1 - _z6_},
       equal$1,
       compare$1,
       to_int,
       to_float,
       to_string$0];
    caml_register_global(724,Stdlib_bool,"Stdlib__bool");
    function chr(n)
     {if(0 <= n)if(! (255 < n))return n;return invalid_arg(cst_Char_chr)}
    function escaped(c)
     {if(40 <= c)
       {if(92 === c)return cst$1;var switch$0=127 <= c?0:1}
      else
       if(32 <= c)
        {if(39 <= c)return cst$2;var switch$0=1}
       else
        if(14 <= c)
         var switch$0=0;
        else
         switch(c)
          {case 8:return cst_b;
           case 9:return cst_t;
           case 10:return cst_n;
           case 13:return cst_r;
           default:var switch$0=0}
      if(switch$0)
       {var s$0=caml_create_bytes(1);
        caml_bytes_unsafe_set(s$0,0,c);
        return caml_string_of_bytes(s$0)}
      var s=caml_create_bytes(4);
      caml_bytes_unsafe_set(s,0,92);
      caml_bytes_unsafe_set(s,1,48 + (c / 100 | 0) | 0);
      caml_bytes_unsafe_set(s,2,48 + ((c / 10 | 0) % 10 | 0) | 0);
      caml_bytes_unsafe_set(s,3,48 + (c % 10 | 0) | 0);
      return caml_string_of_bytes(s)}
    function lowercase(c)
     {var switch$0=65 <= c?90 < c?0:1:0;
      if(! switch$0)
       {var switch$1=192 <= c?214 < c?0:1:0;
        if(! switch$1)
         {var switch$2=216 <= c?222 < c?1:0:1;if(switch$2)return c}}
      return c + 32 | 0}
    function uppercase(c)
     {var switch$0=97 <= c?122 < c?0:1:0;
      if(! switch$0)
       {var switch$1=224 <= c?246 < c?0:1:0;
        if(! switch$1)
         {var switch$2=248 <= c?254 < c?1:0:1;if(switch$2)return c}}
      return c - 32 | 0}
    function lowercase_ascii(c)
     {if(65 <= c)if(! (90 < c))return c + 32 | 0;return c}
    function uppercase_ascii(c)
     {if(97 <= c)if(! (122 < c))return c - 32 | 0;return c}
    function compare$2(c1,c2){return c1 - c2 | 0}
    function equal$2(c1,c2){return 0 === (c1 - c2 | 0)?1:0}
    var
     Stdlib_char=
      [0,
       chr,
       escaped,
       lowercase,
       uppercase,
       lowercase_ascii,
       uppercase_ascii,
       compare$2,
       equal$2];
    caml_register_global(725,Stdlib_char,"Stdlib__char");
    var
     min$0=0,
     max$0=1114111,
     lo_bound=55295,
     hi_bound=57344,
     bom=65279,
     rep=65533;
    function succ(u)
     {return u === 55295
              ?hi_bound
              :u === 1114111?invalid_arg(err_no_succ):u + 1 | 0}
    function pred(u)
     {return u === 57344?lo_bound:u === 0?invalid_arg(err_no_pred):u - 1 | 0}
    function is_valid(i)
     {var _z2_=0 <= i?1:0,_z3_=_z2_?i <= 55295?1:0:_z2_;
      if(_z3_)
       var _z4_=_z3_;
      else
       var _z5_=57344 <= i?1:0,_z4_=_z5_?i <= 1114111?1:0:_z5_;
      return _z4_}
    function of_int(i)
     {return is_valid(i)
              ?i
              :invalid_arg
                (symbol
                  (caml_format_int(cst_X,i),
                   cst_is_not_an_Unicode_scalar_value))}
    function is_char(u){return u < 256?1:0}
    function of_char(c){return c}
    function to_char(u)
     {return 255 < u
              ?invalid_arg
                (symbol
                  (cst_U,
                   symbol
                    (caml_format_int(cst_04X,u),cst_is_not_a_latin1_character)))
              :u}
    function unsafe_to_char(_z1_){return _z1_}
    function equal$3(_z0_,_zZ_){return _z0_ === _zZ_?1:0}
    var compare$3=caml_int_compare;
    function hash(_zY_){return _zY_}
    function _m_(_zX_){return _zX_}
    var
     Stdlib_uchar=
      [0,
       min$0,
       max$0,
       bom,
       rep,
       succ,
       pred,
       is_valid,
       of_int,
       function(_zW_){return _zW_},
       _m_,
       is_char,
       of_char,
       to_char,
       unsafe_to_char,
       equal$3,
       compare$3,
       hash];
    caml_register_global(726,Stdlib_uchar,"Stdlib__uchar");
    var
     match=runtime.caml_sys_get_argv(0),
     _n_=match[2],
     match$0=runtime.caml_sys_get_config(0),
     os_type=match$0[1],
     match$1=runtime.caml_sys_const_backend_type(0),
     unix=runtime.caml_sys_const_ostype_unix(0),
     win32=runtime.caml_sys_const_ostype_win32(0),
     cygwin=runtime.caml_sys_const_ostype_cygwin(0),
     max_array_length=runtime.caml_sys_const_max_wosize(0),
     max_floatarray_length=max_array_length / 2 | 0,
     max_string_length=(4 * max_array_length | 0) - 1 | 0,
     _o_=match[1],
     big_endian=0,
     match$2=32,
     int_size=32;
    function getenv_opt(s)
     {try
       {var _zU_=[0,caml_sys_getenv(s)];return _zU_}
      catch(_zV_)
       {_zV_ = caml_wrap_exception(_zV_);
        if(_zV_ === Not_found)return 0;
        throw _zV_}}
    var interactive=[0,0];
    function set_signal(sig_num,sig_beh){return 0}
    var
     Break=[248,cst_Stdlib_Sys_Break,caml_fresh_oo_id(0)],
     sigabrt=-1,
     sigalrm=-2,
     sigfpe=-3,
     sighup=-4,
     sigill=-5,
     sigint=-6,
     sigkill=-7,
     sigpipe=-8,
     sigquit=-9,
     sigsegv=-10,
     sigterm=-11,
     sigusr1=-12,
     sigusr2=-13,
     sigchld=-14,
     sigcont=-15,
     sigstop=-16,
     sigtstp=-17,
     sigttin=-18,
     sigttou=-19,
     sigvtalrm=-20,
     sigprof=-21,
     sigbus=-22,
     sigpoll=-23,
     sigsys=-24,
     sigtrap=-25,
     sigurg=-26,
     sigxcpu=-27,
     sigxfsz=-28;
    function catch_break(on){return on?0:0}
    var
     Stdlib_sys=
      [0,
       _n_,
       _o_,
       getenv_opt,
       interactive,
       os_type,
       match$1,
       unix,
       win32,
       cygwin,
       match$2,
       int_size,
       big_endian,
       max_string_length,
       max_array_length,
       max_floatarray_length,
       set_signal,
       sigabrt,
       sigalrm,
       sigfpe,
       sighup,
       sigill,
       sigint,
       sigkill,
       sigpipe,
       sigquit,
       sigsegv,
       sigterm,
       sigusr1,
       sigusr2,
       sigchld,
       sigcont,
       sigstop,
       sigtstp,
       sigttin,
       sigttou,
       sigvtalrm,
       sigprof,
       sigbus,
       sigpoll,
       sigsys,
       sigtrap,
       sigurg,
       sigxcpu,
       sigxfsz,
       Break,
       catch_break,
       ocaml_version,
       runtime.caml_ml_enable_runtime_warnings,
       runtime.caml_ml_runtime_warnings_enabled];
    caml_register_global(727,Stdlib_sys,"Stdlib__sys");
    function length(l)
     {var len=0,param=l;
      for(;;)
       {if(param)
         {var param$0=param[2],len$0=len + 1 | 0,len=len$0,param=param$0;
          continue}
        return len}}
    function cons(a,l){return [0,a,l]}
    function hd(param)
     {if(param){var a=param[1];return a}return failwith(cst_hd)}
    function tl(param)
     {if(param){var l=param[2];return l}return failwith(cst_tl)}
    function nth(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return a;
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return failwith(cst_nth)}}
      return invalid_arg(cst_List_nth)}
    function nth_opt(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return [0,a];
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return 0}}
      return invalid_arg(cst_List_nth$0)}
    function rev_append(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {var l1$1=l1$0[2],a=l1$0[1],l2$1=[0,a,l2$0],l1$0=l1$1,l2$0=l2$1;
          continue}
        return l2$0}}
    function rev(l){return rev_append(l,0)}
    function init_aux(i,n,f)
     {if(n <= i)return 0;
      var r=caml_call1(f,i);
      return [0,r,init_aux(i + 1 | 0,n,f)]}
    var rev_init_threshold=typeof match$1 === "number"?10000:50;
    function init(len,f)
     {if(0 <= len)
       {if(rev_init_threshold < len)
         {var acc=0,i=0;
          for(;;)
           {if(len <= i)return rev(acc);
            var i$0=i + 1 | 0,acc$0=[0,caml_call1(f,i),acc],acc=acc$0,i=i$0;
            continue}}
        return init_aux(0,len,f)}
      return invalid_arg(cst_List_init)}
    function flatten(param)
     {if(param){var r=param[2],l=param[1];return append(l,flatten(r))}
      return 0}
    function map$2(f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call1(f,a);return [0,r,map$2(f,l)]}
      return 0}
    function _p_(i,f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call2(f,i,a);
        return [0,r,_p_(i + 1 | 0,f,l)]}
      return 0}
    function mapi(f,l){return _p_(0,f,l)}
    function rev_map(f,param)
     {var accu=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           a=param$0[1],
           accu$0=[0,caml_call1(f,a),accu],
           accu=accu$0,
           param$0=l;
          continue}
        return accu}}
    function iter$2(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1];
          caml_call1(f,a);
          var param$0=l;
          continue}
        return 0}}
    function iteri(f,l$0)
     {var i=0,param=l$0;
      for(;;)
       {if(param)
         {var l=param[2],a=param[1];
          caml_call2(f,i,a);
          var i$0=i + 1 | 0,i=i$0,param=l;
          continue}
        return 0}}
    function fold_left$0(f,accu,l)
     {var accu$0=accu,l$0=l;
      for(;;)
       {if(l$0)
         {var
           l$1=l$0[2],
           a=l$0[1],
           accu$1=caml_call2(f,accu$0,a),
           accu$0=accu$1,
           l$0=l$1;
          continue}
        return accu$0}}
    function fold_right(f,l,accu)
     {if(l){var l$0=l[2],a=l[1];return caml_call2(f,a,fold_right(f,l$0,accu))}
      return accu}
    function map2(f,l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1],r=caml_call2(f,a1,a2);
          return [0,r,map2(f,l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_map2)}
    function rev_map2(f,l1,l2)
     {var accu=0,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$0=[0,caml_call2(f,a1,a2),accu],
             accu=accu$0,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu;
        return invalid_arg(cst_List_rev_map2)}}
    function iter2(f,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var l2$1=l2$0[2],a2=l2$0[1],l1$1=l1$0[2],a1=l1$0[1];
            caml_call2(f,a1,a2);
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_iter2)}}
    function fold_left2(f,accu,l1,l2)
     {var accu$0=accu,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$1=caml_call3(f,accu$0,a1,a2),
             accu$0=accu$1,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu$0;
        return invalid_arg(cst_List_fold_left2)}}
    function fold_right2(f,l1,l2,accu)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return caml_call3(f,a1,a2,fold_right2(f,l1$0,l2$0,accu))}}
      else
       if(! l2)return accu;
      return invalid_arg(cst_List_fold_right2)}
    function for_all(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zT_=caml_call1(p,a);
          if(_zT_){var param$0=l;continue}
          return _zT_}
        return 1}}
    function exists(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zS_=caml_call1(p,a);
          if(_zS_)return _zS_;
          var param$0=l;
          continue}
        return 0}}
    function for_all2(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _zR_=caml_call2(p,a1,a2);
            if(_zR_){var l1$0=l1$1,l2$0=l2$1;continue}
            return _zR_}}
        else
         if(! l2$0)return 1;
        return invalid_arg(cst_List_for_all2)}}
    function exists2(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _zQ_=caml_call2(p,a1,a2);
            if(_zQ_)return _zQ_;
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_exists2)}}
    function mem(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zP_=0 === caml_compare(a,x)?1:0;
          if(_zP_)return _zP_;
          var param$0=l;
          continue}
        return 0}}
    function memq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zO_=a === x?1:0;
          if(_zO_)return _zO_;
          var param$0=l;
          continue}
        return 0}}
    function assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assoc_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assq_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function mem_assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           match=param$0[1],
           a=match[1],
           _zN_=0 === caml_compare(a,x)?1:0;
          if(_zN_)return _zN_;
          var param$0=l;
          continue}
        return 0}}
    function mem_assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],a=match[1],_zM_=a === x?1:0;
          if(_zM_)return _zM_;
          var param$0=l;
          continue}
        return 0}}
    function remove_assoc(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return 0 === caml_compare(a,x)?l:[0,pair,remove_assoc(x,l)]}
      return 0}
    function remove_assq(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return a === x?l:[0,pair,remove_assq(x,l)]}
      return 0}
    function find(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return x;
          var param$0=l;
          continue}
        throw Not_found}}
    function find_opt(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return [0,x];
          var param$0=l;
          continue}
        return 0}}
    function find_all(p)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1];
            if(caml_call1(p,x))
             {var accu$1=[0,x,accu$0],accu$0=accu$1,param=l;continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function filter_map$0(f)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1],match=caml_call1(f,x);
            if(match)
             {var v=match[1],accu$1=[0,v,accu$0],accu$0=accu$1,param=l;
              continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function partition(p,param)
     {var yes=0,no=0,param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))
           {var yes$0=[0,x,yes],yes=yes$0,param$0=l;continue}
          var no$0=[0,x,no],no=no$0,param$0=l;
          continue}
        var _zL_=rev(no);
        return [0,rev(yes),_zL_]}}
    function split(param)
     {if(param)
       {var
         l=param[2],
         match=param[1],
         y=match[2],
         x=match[1],
         match$0=split(l),
         ry=match$0[2],
         rx=match$0[1];
        return [0,[0,x,rx],[0,y,ry]]}
      return _q_}
    function combine(l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return [0,[0,a1,a2],combine(l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_combine)}
    function merge(cmp,l1,match)
     {if(l1)
       {if(match)
         {var t2=match[2],h2=match[1],t1=l1[2],h1=l1[1];
          return 0 < caml_call2(cmp,h1,h2)
                  ?[0,h2,merge(cmp,l1,t2)]
                  :[0,h1,merge(cmp,t1,match)]}
        return l1}
      return match}
    function chop(k,l)
     {var k$0=k,l$0=l;
      for(;;)
       {if(0 === k$0)return l$0;
        if(l$0){var l$1=l$0[2],k$1=k$0 - 1 | 0,k$0=k$1,l$0=l$1;continue}
        throw [0,Assert_failure,_r_]}}
    function fast_sort(cmp,l)
     {function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zI_=l[2];
            if(_zI_)
             {var x2=_zI_[1],x1=l[1];
              return 0 < caml_call2(cmp,x1,x2)?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]]}}}
        else
         if(3 === n)
          if(l)
           {var _zJ_=l[2];
            if(_zJ_)
             {var _zK_=_zJ_[2];
              if(_zK_)
               {var x3=_zK_[1],x2$0=_zJ_[1],x1$0=l[1];
                return 0 < caml_call2(cmp,x1$0,x2$0)
                        ?0 < caml_call2(cmp,x1$0,x3)
                          ?0 < caml_call2(cmp,x2$0,x3)
                            ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                            :[0,x2$0,[0,x3,[0,x1$0,0]]]
                          :[0,x2$0,[0,x1$0,[0,x3,0]]]
                        :0 < caml_call2(cmp,x2$0,x3)
                          ?0 < caml_call2(cmp,x1$0,x3)
                            ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                            :[0,x1$0,[0,x3,[0,x2$0,0]]]
                          :[0,x1$0,[0,x2$0,[0,x3,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=rev_sort(n1,l),
         l2$1=rev_sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h1,accu],l1=t1,accu=accu$0;continue}
              var accu$1=[0,h2,accu],l2=t2,accu=accu$1;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zF_=l[2];
            if(_zF_)
             {var x2=_zF_[1],x1=l[1];
              return 0 < caml_call2(cmp,x1,x2)?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]]}}}
        else
         if(3 === n)
          if(l)
           {var _zG_=l[2];
            if(_zG_)
             {var _zH_=_zG_[2];
              if(_zH_)
               {var x3=_zH_[1],x2$0=_zG_[1],x1$0=l[1];
                return 0 < caml_call2(cmp,x1$0,x2$0)
                        ?0 < caml_call2(cmp,x2$0,x3)
                          ?[0,x1$0,[0,x2$0,[0,x3,0]]]
                          :0 < caml_call2(cmp,x1$0,x3)
                            ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                            :[0,x3,[0,x1$0,[0,x2$0,0]]]
                        :0 < caml_call2(cmp,x1$0,x3)
                          ?[0,x2$0,[0,x1$0,[0,x3,0]]]
                          :0 < caml_call2(cmp,x2$0,x3)
                            ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                            :[0,x3,[0,x2$0,[0,x1$0,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=sort(n1,l),
         l2$1=sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h2,accu],l2=t2,accu=accu$0;continue}
              var accu$1=[0,h1,accu],l1=t1,accu=accu$1;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      var len=length(l);
      return 2 <= len?sort(len,l):l}
    function sort_uniq(cmp,l)
     {function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zC_=l[2];
            if(_zC_)
             {var x2=_zC_[1],x1=l[1],c$0=caml_call2(cmp,x1,x2);
              return 0 === c$0
                      ?[0,x1,0]
                      :0 <= c$0?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]]}}}
        else
         if(3 === n)
          if(l)
           {var _zD_=l[2];
            if(_zD_)
             {var _zE_=_zD_[2];
              if(_zE_)
               {var
                 x3=_zE_[1],
                 x2$0=_zD_[1],
                 x1$0=l[1],
                 c$1=caml_call2(cmp,x1$0,x2$0);
                if(0 === c$1)
                 {var c$2=caml_call2(cmp,x2$0,x3);
                  return 0 === c$2
                          ?[0,x2$0,0]
                          :0 <= c$2?[0,x3,[0,x2$0,0]]:[0,x2$0,[0,x3,0]]}
                if(0 <= c$1)
                 {var c$3=caml_call2(cmp,x1$0,x3);
                  if(0 === c$3)return [0,x2$0,[0,x1$0,0]];
                  if(0 <= c$3)
                   {var c$4=caml_call2(cmp,x2$0,x3);
                    return 0 === c$4
                            ?[0,x2$0,[0,x1$0,0]]
                            :0 <= c$4
                              ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                              :[0,x2$0,[0,x3,[0,x1$0,0]]]}
                  return [0,x2$0,[0,x1$0,[0,x3,0]]]}
                var c$5=caml_call2(cmp,x2$0,x3);
                if(0 === c$5)return [0,x1$0,[0,x2$0,0]];
                if(0 <= c$5)
                 {var c$6=caml_call2(cmp,x1$0,x3);
                  return 0 === c$6
                          ?[0,x1$0,[0,x2$0,0]]
                          :0 <= c$6
                            ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                            :[0,x1$0,[0,x3,[0,x2$0,0]]]}
                return [0,x1$0,[0,x2$0,[0,x3,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=rev_sort(n1,l),
         l2$1=rev_sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 < c){var accu$1=[0,h1,accu],l1=t1,accu=accu$1;continue}
              var accu$2=[0,h2,accu],l2=t2,accu=accu$2;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zz_=l[2];
            if(_zz_)
             {var x2=_zz_[1],x1=l[1],c$0=caml_call2(cmp,x1,x2);
              return 0 === c$0
                      ?[0,x1,0]
                      :0 < c$0?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]]}}}
        else
         if(3 === n)
          if(l)
           {var _zA_=l[2];
            if(_zA_)
             {var _zB_=_zA_[2];
              if(_zB_)
               {var
                 x3=_zB_[1],
                 x2$0=_zA_[1],
                 x1$0=l[1],
                 c$1=caml_call2(cmp,x1$0,x2$0);
                if(0 === c$1)
                 {var c$2=caml_call2(cmp,x2$0,x3);
                  return 0 === c$2
                          ?[0,x2$0,0]
                          :0 < c$2?[0,x2$0,[0,x3,0]]:[0,x3,[0,x2$0,0]]}
                if(0 < c$1)
                 {var c$3=caml_call2(cmp,x2$0,x3);
                  if(0 === c$3)return [0,x1$0,[0,x2$0,0]];
                  if(0 < c$3)return [0,x1$0,[0,x2$0,[0,x3,0]]];
                  var c$4=caml_call2(cmp,x1$0,x3);
                  return 0 === c$4
                          ?[0,x1$0,[0,x2$0,0]]
                          :0 < c$4
                            ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                            :[0,x3,[0,x1$0,[0,x2$0,0]]]}
                var c$5=caml_call2(cmp,x1$0,x3);
                if(0 === c$5)return [0,x2$0,[0,x1$0,0]];
                if(0 < c$5)return [0,x2$0,[0,x1$0,[0,x3,0]]];
                var c$6=caml_call2(cmp,x2$0,x3);
                return 0 === c$6
                        ?[0,x2$0,[0,x1$0,0]]
                        :0 < c$6
                          ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                          :[0,x3,[0,x2$0,[0,x1$0,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=sort(n1,l),
         l2$1=sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 <= c){var accu$1=[0,h2,accu],l2=t2,accu=accu$1;continue}
              var accu$2=[0,h1,accu],l1=t1,accu=accu$2;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      var len=length(l);
      return 2 <= len?sort(len,l):l}
    function compare_lengths(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0){var l2$1=l2$0[2],l1$1=l1$0[2],l1$0=l1$1,l2$0=l2$1;continue}
          return 1}
        return l2$0?-1:0}}
    function compare_length_with(l,n)
     {var l$0=l,n$0=n;
      for(;;)
       {if(l$0)
         {var l$1=l$0[2];
          if(0 < n$0){var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;continue}
          return 1}
        return 0 === n$0?0:0 < n$0?-1:1}}
    function to_seq$1(l)
     {function aux(l,param)
       {if(l)
         {var tail=l[2],x=l[1];
          return [0,x,function(_zy_){return aux(tail,_zy_)}]}
        return 0}
      return function(_zx_){return aux(l,_zx_)}}
    function of_seq(seq)
     {function direct(depth,seq)
       {if(0 === depth)
         {var _zw_=0;
          return rev(fold_left(function(acc,x){return [0,x,acc]},_zw_,seq))}
        var match=caml_call1(seq,0);
        if(match)
         {var next=match[2],x=match[1];
          return [0,x,direct(depth - 1 | 0,next)]}
        return 0}
      return direct(500,seq)}
    var
     include=
      [0,
       length,
       compare_lengths,
       compare_length_with,
       cons,
       hd,
       tl,
       nth,
       nth_opt,
       rev,
       init,
       append,
       rev_append,
       flatten,
       flatten,
       iter$2,
       iteri,
       map$2,
       mapi,
       rev_map,
       filter_map$0,
       fold_left$0,
       fold_right,
       iter2,
       map2,
       rev_map2,
       fold_left2,
       fold_right2,
       for_all,
       exists,
       for_all2,
       exists2,
       mem,
       memq,
       find,
       find_opt,
       find_all,
       find_all,
       partition,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(728,include,"Stdlib__list");
    function make(n,c)
     {var s=caml_create_bytes(n);caml_fill_bytes(s,0,n,c);return s}
    function init$0(n,f)
     {var s=caml_create_bytes(n),_zu_=n - 1 | 0,_zt_=0;
      if(! (_zu_ < 0))
       {var i=_zt_;
        for(;;)
         {caml_bytes_unsafe_set(s,i,caml_call1(f,i));
          var _zv_=i + 1 | 0;
          if(_zu_ !== i){var i=_zv_;continue}
          break}}
      return s}
    var empty$0=caml_create_bytes(0);
    function copy(s)
     {var len=caml_ml_bytes_length(s),r=caml_create_bytes(len);
      caml_blit_bytes(s,0,r,0,len);
      return r}
    function to_string$1(b){return caml_string_of_bytes(copy(b))}
    function of_string(s){return copy(caml_bytes_of_string(s))}
    function sub(s,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(s) - len | 0) < ofs))
         {var r=caml_create_bytes(len);
          caml_blit_bytes(s,ofs,r,0,len);
          return r}
      return invalid_arg(cst_String_sub_Bytes_sub)}
    function sub_string(b,ofs,len)
     {return caml_string_of_bytes(sub(b,ofs,len))}
    function symbol$1(a,b)
     {var
       c=a + b | 0,
       _zs_=b < 0?1:0,
       match=c < 0?1:0,
       switch$0=
        0 === (a < 0?1:0)
         ?0 === _zs_?0 === match?0:1:0
         :0 === _zs_?0:0 === match?1:0;
      return switch$0?invalid_arg(cst_Bytes_extend):c}
    function extend(s,left,right)
     {var
       len=symbol$1(symbol$1(caml_ml_bytes_length(s),left),right),
       r=caml_create_bytes(len);
      if(0 <= left)
       var srcoff=0,dstoff=left;
      else
       var srcoff=- left | 0,dstoff=0;
      var cpylen=min(caml_ml_bytes_length(s) - srcoff | 0,len - dstoff | 0);
      if(0 < cpylen)caml_blit_bytes(s,srcoff,r,dstoff,cpylen);
      return r}
    function fill(s,ofs,len,c)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(s) - len | 0) < ofs))
         return caml_fill_bytes(s,ofs,len,c);
      return invalid_arg(cst_String_fill_Bytes_fill)}
    function blit(s1,ofs1,s2,ofs2,len)
     {if(0 <= len)
       if(0 <= ofs1)
        if(! ((caml_ml_bytes_length(s1) - len | 0) < ofs1))
         if(0 <= ofs2)
          if(! ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
           return caml_blit_bytes(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_Bytes_blit)}
    function blit$0(s1,ofs1,s2,ofs2,len)
     {if(0 <= len)
       if(0 <= ofs1)
        if(! ((caml_ml_string_length(s1) - len | 0) < ofs1))
         if(0 <= ofs2)
          if(! ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
           return caml_blit_string(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_String_blit_Bytes_blit_string)}
    function iter$3(f,a)
     {var _zq_=caml_ml_bytes_length(a) - 1 | 0,_zp_=0;
      if(! (_zq_ < 0))
       {var i=_zp_;
        for(;;)
         {caml_call1(f,caml_bytes_unsafe_get(a,i));
          var _zr_=i + 1 | 0;
          if(_zq_ !== i){var i=_zr_;continue}
          break}}
      return 0}
    function iteri$0(f,a)
     {var _zn_=caml_ml_bytes_length(a) - 1 | 0,_zm_=0;
      if(! (_zn_ < 0))
       {var i=_zm_;
        for(;;)
         {caml_call2(f,i,caml_bytes_unsafe_get(a,i));
          var _zo_=i + 1 | 0;
          if(_zn_ !== i){var i=_zo_;continue}
          break}}
      return 0}
    function concat(sep,l)
     {if(l)
       {var seplen=caml_ml_bytes_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _zh_=param[2],_zi_=param[1];
            if(_zh_)
             {var
               x=(caml_ml_bytes_length(_zi_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_Bytes_concat),
               acc=acc$0,
               param=_zh_;
              continue}
            var _zl_=caml_ml_bytes_length(_zi_) + acc | 0}
          else
           var _zl_=acc;
          var dst=caml_create_bytes(_zl_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _zj_=param$0[2],_zk_=param$0[1];
              if(_zj_)
               {caml_blit_bytes(_zk_,0,dst,pos,caml_ml_bytes_length(_zk_));
                caml_blit_bytes
                 (sep,0,dst,pos + caml_ml_bytes_length(_zk_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_bytes_length(_zk_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=_zj_;
                continue}
              caml_blit_bytes(_zk_,0,dst,pos,caml_ml_bytes_length(_zk_));
              return dst}
            return dst}}}
      return empty$0}
    function cat(s1,s2)
     {var
       l1=caml_ml_bytes_length(s1),
       l2=caml_ml_bytes_length(s2),
       r=caml_create_bytes(l1 + l2 | 0);
      caml_blit_bytes(s1,0,r,0,l1);
      caml_blit_bytes(s2,0,r,l1,l2);
      return r}
    function is_space(param)
     {var
       _zg_=param - 9 | 0,
       switch$0=4 < _zg_ >>> 0?23 === _zg_?1:0:2 === _zg_?0:1;
      return switch$0?1:0}
    function trim(s)
     {var len=caml_ml_bytes_length(s),i=[0,0];
      for(;;)
       {if(i[1] < len)
         if(is_space(caml_bytes_unsafe_get(s,i[1]))){i[1]++;continue}
        var j=[0,len - 1 | 0];
        for(;;)
         {if(i[1] <= j[1])
           if(is_space(caml_bytes_unsafe_get(s,j[1]))){j[1] += -1;continue}
          return i[1] <= j[1]?sub(s,i[1],(j[1] - i[1] | 0) + 1 | 0):empty$0}}}
    function escaped$0(s)
     {var n=[0,0],_y$_=caml_ml_bytes_length(s) - 1 | 0,_y__=0;
      if(! (_y$_ < 0))
       {var i$0=_y__;
        for(;;)
         {var match=caml_bytes_unsafe_get(s,i$0);
          if(32 <= match)
           {var _zd_=match - 34 | 0;
            if(58 < _zd_ >>> 0)
             if(93 <= _zd_)var switch$0=0,switch$1=0;else var switch$1=1;
            else
             if(56 < (_zd_ - 1 | 0) >>> 0)
              var switch$0=1,switch$1=0;
             else
              var switch$1=1;
            if(switch$1)var _ze_=1,switch$0=2}
          else
           var switch$0=11 <= match?13 === match?1:0:8 <= match?1:0;
          switch(switch$0){case 0:var _ze_=4;break;case 1:var _ze_=2;break}
          n[1] = n[1] + _ze_ | 0;
          var _zf_=i$0 + 1 | 0;
          if(_y$_ !== i$0){var i$0=_zf_;continue}
          break}}
      if(n[1] === caml_ml_bytes_length(s))return copy(s);
      var s$0=caml_create_bytes(n[1]);
      n[1] = 0;
      var _zb_=caml_ml_bytes_length(s) - 1 | 0,_za_=0;
      if(! (_zb_ < 0))
       {var i=_za_;
        for(;;)
         {var c=caml_bytes_unsafe_get(s,i);
          if(35 <= c)
           var switch$2=92 === c?1:127 <= c?0:2;
          else
           if(32 <= c)
            var switch$2=34 <= c?1:2;
           else
            if(14 <= c)
             var switch$2=0;
            else
             switch(c)
              {case 8:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],98);
                var switch$2=3;
                break;
               case 9:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],116);
                var switch$2=3;
                break;
               case 10:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],110);
                var switch$2=3;
                break;
               case 13:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],114);
                var switch$2=3;
                break;
               default:var switch$2=0}
          switch(switch$2)
           {case 0:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c / 100 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + ((c / 10 | 0) % 10 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c % 10 | 0) | 0);
             break;
            case 1:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],c);
             break;
            case 2:caml_bytes_unsafe_set(s$0,n[1],c);break
            }
          n[1]++;
          var _zc_=i + 1 | 0;
          if(_zb_ !== i){var i=_zc_;continue}
          break}}
      return s$0}
    function map$3(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_y8_=l - 1 | 0,_y7_=0;
      if(! (_y8_ < 0))
       {var i=_y7_;
        for(;;)
         {caml_bytes_unsafe_set(r,i,caml_call1(f,caml_bytes_unsafe_get(s,i)));
          var _y9_=i + 1 | 0;
          if(_y8_ !== i){var i=_y9_;continue}
          break}}
      return r}
    function mapi$0(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_y5_=l - 1 | 0,_y4_=0;
      if(! (_y5_ < 0))
       {var i=_y4_;
        for(;;)
         {caml_bytes_unsafe_set
           (r,i,caml_call2(f,i,caml_bytes_unsafe_get(s,i)));
          var _y6_=i + 1 | 0;
          if(_y5_ !== i){var i=_y6_;continue}
          break}}
      return r}
    function uppercase_ascii$0(s){return map$3(uppercase_ascii,s)}
    function lowercase_ascii$0(s){return map$3(lowercase_ascii,s)}
    function apply1(f,s)
     {if(0 === caml_ml_bytes_length(s))return s;
      var r=copy(s);
      caml_bytes_unsafe_set(r,0,caml_call1(f,caml_bytes_unsafe_get(s,0)));
      return r}
    function capitalize_ascii(s){return apply1(uppercase_ascii,s)}
    function uncapitalize_ascii(s){return apply1(lowercase_ascii,s)}
    function index_rec(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index(s,c){return index_rec(s,caml_ml_bytes_length(s),0,c)}
    function index_rec_opt(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt(s,c)
     {return index_rec_opt(s,caml_ml_bytes_length(s),0,c)}
    function index_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i)if(! (l < i))return index_rec(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_index_from)}
    function index_from_opt(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i)if(! (l < i))return index_rec_opt(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Bytes_index_from_opt)}
    function rindex_rec(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex(s,c)
     {return rindex_rec(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from(s,i,c)
     {if(-1 <= i)if(! (caml_ml_bytes_length(s) <= i))return rindex_rec(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_rindex_from)}
    function rindex_rec_opt(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt(s,c)
     {return rindex_rec_opt(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from_opt(s,i,c)
     {if(-1 <= i)
       if(! (caml_ml_bytes_length(s) <= i))return rindex_rec_opt(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Bytes_rindex_from_opt)}
    function contains_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i)
       if(! (l < i))
        try
         {index_rec(s,l,i,c);var _y2_=1;return _y2_}
        catch(_y3_)
         {_y3_ = caml_wrap_exception(_y3_);
          if(_y3_ === Not_found)return 0;
          throw _y3_}
      return invalid_arg(cst_String_contains_from_Bytes_contains_from)}
    function contains(s,c){return contains_from(s,0,c)}
    function rcontains_from(s,i,c)
     {if(0 <= i)
       if(! (caml_ml_bytes_length(s) <= i))
        try
         {rindex_rec(s,i,c);var _y0_=1;return _y0_}
        catch(_y1_)
         {_y1_ = caml_wrap_exception(_y1_);
          if(_y1_ === Not_found)return 0;
          throw _y1_}
      return invalid_arg(cst_String_rcontains_from_Bytes_rcontains_from)}
    var compare$4=runtime.caml_bytes_compare;
    function uppercase$0(s){return map$3(uppercase,s)}
    function lowercase$0(s){return map$3(lowercase,s)}
    function capitalize(s){return apply1(uppercase,s)}
    function uncapitalize(s){return apply1(lowercase,s)}
    function to_seq$2(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_yY_=i + 1 | 0;
        return [0,x,function(_yZ_){return aux(_yY_,_yZ_)}]}
      var _yW_=0;
      return function(_yX_){return aux(_yW_,_yX_)}}
    function to_seqi(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_yU_=i + 1 | 0;
        return [0,[0,i,x],function(_yV_){return aux(_yU_,_yV_)}]}
      var _yS_=0;
      return function(_yT_){return aux(_yS_,_yT_)}}
    function of_seq$0(i)
     {var n=[0,0],buf=[0,make(256,0)];
      iter
       (function(c)
         {if(n[1] === caml_ml_bytes_length(buf[1]))
           {var
             new_len=
              min(2 * caml_ml_bytes_length(buf[1]) | 0,max_string_length);
            if(caml_ml_bytes_length(buf[1]) === new_len)
             failwith(cst_Bytes_of_seq_cannot_grow_bytes);
            var new_buf=make(new_len,0);
            blit(buf[1],0,new_buf,0,n[1]);
            buf[1] = new_buf}
          caml_bytes_set(buf[1],n[1],c);
          n[1]++;
          return 0},
        i);
      return sub(buf[1],0,n[1])}
    function get_int8(b,i){return caml_bytes_get(b,i) << 24 >> 24}
    function get_uint16_le(b,i){return caml_bytes_get16(b,i)}
    function get_uint16_be(b,i){return caml_bswap16(caml_bytes_get16(b,i))}
    function get_int16_ne(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_le(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_be(b,i){return get_uint16_be(b,i) << 16 >> 16}
    function get_int32_le(b,i){return caml_bytes_get32(b,i)}
    function get_int32_be(b,i){return caml_int32_bswap(caml_bytes_get32(b,i))}
    function get_int64_le(b,i){return caml_bytes_get64(b,i)}
    function get_int64_be(b,i){return caml_int64_bswap(caml_bytes_get64(b,i))}
    function set_int16_le(b,i,x){return caml_bytes_set16(b,i,x)}
    function set_int16_be(b,i,x){return caml_bytes_set16(b,i,caml_bswap16(x))}
    function set_int32_le(b,i,x){return caml_bytes_set32(b,i,x)}
    function set_int32_be(b,i,x)
     {return caml_bytes_set32(b,i,caml_int32_bswap(x))}
    function set_int64_le(b,i,x){return caml_bytes_set64(b,i,x)}
    function set_int64_be(b,i,x)
     {return caml_bytes_set64(b,i,caml_int64_bswap(x))}
    var
     set_uint8=caml_bytes_set,
     set_uint16_ne=caml_bytes_set16,
     set_int64_ne=caml_bytes_set64,
     set_int32_ne=caml_bytes_set32,
     set_int16_ne=caml_bytes_set16,
     set_int8=caml_bytes_set,
     get_int64_ne=caml_bytes_get64,
     get_int32_ne=caml_bytes_get32,
     get_uint16_ne=caml_bytes_get16,
     get_uint8=caml_bytes_get,
     unsafe_of_string=caml_bytes_of_string,
     unsafe_to_string=caml_string_of_bytes,
     equal$4=runtime.caml_bytes_equal,
     include$0=
      [0,
       make,
       init$0,
       empty$0,
       copy,
       of_string,
       to_string$1,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat,
       cat,
       iter$3,
       iteri$0,
       map$3,
       mapi$0,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$4,
       equal$4,
       unsafe_to_string,
       unsafe_of_string,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le];
    caml_register_global(729,include$0,"Stdlib__bytes");
    function make$0(n,c){return caml_string_of_bytes(make(n,c))}
    function init$1(n,f){return caml_string_of_bytes(init$0(n,f))}
    function copy$0(s)
     {return caml_string_of_bytes(copy(caml_bytes_of_string(s)))}
    function sub$0(s,ofs,len)
     {return caml_string_of_bytes(sub(caml_bytes_of_string(s),ofs,len))}
    function concat$0(sep,l)
     {if(l)
       {var seplen=caml_ml_string_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _yN_=param[2],_yO_=param[1];
            if(_yN_)
             {var
               x=(caml_ml_string_length(_yO_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_String_concat),
               acc=acc$0,
               param=_yN_;
              continue}
            var _yR_=caml_ml_string_length(_yO_) + acc | 0}
          else
           var _yR_=acc;
          var dst=caml_create_bytes(_yR_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _yP_=param$0[2],_yQ_=param$0[1];
              if(_yP_)
               {caml_blit_string(_yQ_,0,dst,pos,caml_ml_string_length(_yQ_));
                caml_blit_string
                 (sep,0,dst,pos + caml_ml_string_length(_yQ_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_string_length(_yQ_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=_yP_;
                continue}
              caml_blit_string(_yQ_,0,dst,pos,caml_ml_string_length(_yQ_))}
            return caml_string_of_bytes(dst)}}}
      return cst$3}
    function iter$4(f,s)
     {var _yL_=caml_ml_string_length(s) - 1 | 0,_yK_=0;
      if(! (_yL_ < 0))
       {var i=_yK_;
        for(;;)
         {caml_call1(f,caml_string_unsafe_get(s,i));
          var _yM_=i + 1 | 0;
          if(_yL_ !== i){var i=_yM_;continue}
          break}}
      return 0}
    function iteri$1(f,s)
     {var _yI_=caml_ml_string_length(s) - 1 | 0,_yH_=0;
      if(! (_yI_ < 0))
       {var i=_yH_;
        for(;;)
         {caml_call2(f,i,caml_string_unsafe_get(s,i));
          var _yJ_=i + 1 | 0;
          if(_yI_ !== i){var i=_yJ_;continue}
          break}}
      return 0}
    function map$4(f,s)
     {return caml_string_of_bytes(map$3(f,caml_bytes_of_string(s)))}
    function mapi$1(f,s)
     {return caml_string_of_bytes(mapi$0(f,caml_bytes_of_string(s)))}
    function is_space$0(param)
     {var
       _yG_=param - 9 | 0,
       switch$0=4 < _yG_ >>> 0?23 === _yG_?1:0:2 === _yG_?0:1;
      return switch$0?1:0}
    function trim$0(s)
     {if(caml_string_equal(s,cst$4))return s;
      if(! is_space$0(caml_string_unsafe_get(s,0)))
       if
        (!
         is_space$0
          (caml_string_unsafe_get(s,caml_ml_string_length(s) - 1 | 0)))
        return s;
      return caml_string_of_bytes(trim(caml_bytes_of_string(s)))}
    function escaped$1(s)
     {var n=caml_ml_string_length(s),i=0;
      for(;;)
       {if(n <= i)return s;
        var
         match=caml_string_unsafe_get(s,i),
         _yF_=match - 32 | 0,
         switch$0=
          59 < _yF_ >>> 0?33 < (_yF_ - 61 | 0) >>> 0?1:0:2 === _yF_?1:0;
        if(switch$0)
         return caml_string_of_bytes(escaped$0(caml_bytes_of_string(s)));
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function index_rec$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_string_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index$0(s,c){return index_rec$0(s,caml_ml_string_length(s),0,c)}
    function index_rec_opt$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt$0(s,c)
     {return index_rec_opt$0(s,caml_ml_string_length(s),0,c)}
    function index_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i)if(! (l < i))return index_rec$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_index_from$0)}
    function index_from_opt$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i)if(! (l < i))return index_rec_opt$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Bytes_index_from_opt$0)}
    function rindex_rec$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex$0(s,c)
     {return rindex_rec$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from$0(s,i,c)
     {if(-1 <= i)
       if(! (caml_ml_string_length(s) <= i))return rindex_rec$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_rindex_from$0)}
    function rindex_rec_opt$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt$0(s,c)
     {return rindex_rec_opt$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from_opt$0(s,i,c)
     {if(-1 <= i)
       if(! (caml_ml_string_length(s) <= i))return rindex_rec_opt$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Bytes_rindex_from_opt$0)}
    function contains_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i)
       if(! (l < i))
        try
         {index_rec$0(s,l,i,c);var _yD_=1;return _yD_}
        catch(_yE_)
         {_yE_ = caml_wrap_exception(_yE_);
          if(_yE_ === Not_found)return 0;
          throw _yE_}
      return invalid_arg(cst_String_contains_from_Bytes_contains_from$0)}
    function contains$0(s,c){return contains_from$0(s,0,c)}
    function rcontains_from$0(s,i,c)
     {if(0 <= i)
       if(! (caml_ml_string_length(s) <= i))
        try
         {rindex_rec$0(s,i,c);var _yB_=1;return _yB_}
        catch(_yC_)
         {_yC_ = caml_wrap_exception(_yC_);
          if(_yC_ === Not_found)return 0;
          throw _yC_}
      return invalid_arg(cst_String_rcontains_from_Bytes_rcontains_from$0)}
    function uppercase_ascii$1(s)
     {return caml_string_of_bytes(uppercase_ascii$0(caml_bytes_of_string(s)))}
    function lowercase_ascii$1(s)
     {return caml_string_of_bytes(lowercase_ascii$0(caml_bytes_of_string(s)))}
    function capitalize_ascii$0(s)
     {return caml_string_of_bytes(capitalize_ascii(caml_bytes_of_string(s)))}
    function uncapitalize_ascii$0(s)
     {return caml_string_of_bytes(uncapitalize_ascii(caml_bytes_of_string(s)))}
    var compare$5=caml_string_compare;
    function split_on_char(sep,s)
     {var
       r=[0,0],
       j=[0,caml_ml_string_length(s)],
       _yx_=caml_ml_string_length(s) - 1 | 0;
      if(! (_yx_ < 0))
       {var i=_yx_;
        for(;;)
         {if(caml_string_unsafe_get(s,i) === sep)
           {var _yz_=r[1];
            r[1] = [0,sub$0(s,i + 1 | 0,(j[1] - i | 0) - 1 | 0),_yz_];
            j[1] = i}
          var _yA_=i - 1 | 0;
          if(0 !== i){var i=_yA_;continue}
          break}}
      var _yy_=r[1];
      return [0,sub$0(s,0,j[1]),_yy_]}
    function uppercase$1(s)
     {return caml_string_of_bytes(uppercase$0(caml_bytes_of_string(s)))}
    function lowercase$1(s)
     {return caml_string_of_bytes(lowercase$0(caml_bytes_of_string(s)))}
    function capitalize$0(s)
     {return caml_string_of_bytes(capitalize(caml_bytes_of_string(s)))}
    function uncapitalize$0(s)
     {return caml_string_of_bytes(uncapitalize(caml_bytes_of_string(s)))}
    function to_seq$3(s){return to_seq$2(caml_bytes_of_string(s))}
    function to_seqi$0(s){return to_seqi(caml_bytes_of_string(s))}
    function of_seq$1(g){return caml_string_of_bytes(of_seq$0(g))}
    var
     equal$5=caml_string_equal,
     include$1=
      [0,
       make$0,
       init$1,
       copy$0,
       sub$0,
       fill,
       blit$0,
       concat$0,
       iter$4,
       iteri$1,
       map$4,
       mapi$1,
       trim$0,
       escaped$1,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       contains$0,
       contains_from$0,
       rcontains_from$0,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       compare$5,
       equal$5,
       split_on_char,
       to_seq$3,
       to_seqi$0,
       of_seq$1];
    caml_register_global(730,include$1,"Stdlib__string");
    function equal$6(param,_yw_){return 1}
    function compare$6(param,_yv_){return 0}
    function to_string$2(param){return cst$5}
    var Stdlib_unit=[0,equal$6,compare$6,to_string$2];
    caml_register_global(731,Stdlib_unit,"Stdlib__unit");
    function to_buffer(buff,ofs,len,v,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buff) - len | 0) < ofs))
         return runtime.caml_output_value_to_buffer(buff,ofs,len,v,flags);
      return invalid_arg(cst_Marshal_to_buffer_substring_out_of_bounds)}
    var header_size=20;
    function data_size(buff,ofs)
     {if(0 <= ofs)
       if(! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
        return caml_marshal_data_size(buff,ofs);
      return invalid_arg(cst_Marshal_data_size)}
    function total_size(buff,ofs){return 20 + data_size(buff,ofs) | 0}
    function from_bytes(buff,ofs)
     {if(0 <= ofs)
       if(! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
        {var len=caml_marshal_data_size(buff,ofs);
         return (caml_ml_bytes_length(buff) - (20 + len | 0) | 0) < ofs
                 ?invalid_arg(cst_Marshal_from_bytes$0)
                 :runtime.caml_input_value_from_bytes(buff,ofs)}
      return invalid_arg(cst_Marshal_from_bytes)}
    function from_string(buff,ofs)
     {return from_bytes(caml_bytes_of_string(buff),ofs)}
    var
     Stdlib_marshal=
      [0,
       caml_output_value,
       to_buffer,
       caml_input_value,
       from_bytes,
       from_string,
       header_size,
       data_size,
       total_size];
    caml_register_global(732,Stdlib_marshal,"Stdlib__marshal");
    function is_block(a){return 1 - (typeof a === "number"?1:0)}
    var double_field=caml_array_get,set_double_field=caml_array_set;
    function marshal(obj){return runtime.caml_output_value_to_bytes(obj,0)}
    function unmarshal(str,pos)
     {var _yu_=pos + total_size(str,pos) | 0;
      return [0,from_bytes(str,pos),_yu_]}
    var
     first_non_constant_constructor_tag=0,
     last_non_constant_constructor_tag=245,
     lazy_tag=246,
     closure_tag=247,
     object_tag=248,
     infix_tag=249,
     forward_tag=250,
     no_scan_tag=251,
     abstract_tag=251,
     string_tag=252,
     double_tag=253,
     double_array_tag=254,
     custom_tag=255,
     int_tag=1000,
     out_of_heap_tag=1001,
     unaligned_tag=1002;
    function of_val(x)
     {if(is_block(x))
       if(caml_obj_tag(x) !== 248)
        if(1 <= x.length - 1)var slot=x[1],switch$0=1;else var switch$0=0;
       else
        var switch$0=0;
      else
       var switch$0=0;
      if(! switch$0)var slot=x;
      if(is_block(slot))
       if(caml_obj_tag(slot) === 248)
        var name=slot[1],switch$1=1;
       else
        var switch$1=0;
      else
       var switch$1=0;
      if(! switch$1)var name=invalid_arg(cst_Obj_extension_constructor$0);
      return caml_obj_tag(name) === 252
              ?slot
              :invalid_arg(cst_Obj_extension_constructor)}
    function name(slot){return slot[1]}
    function id(slot){return slot[2]}
    var
     Extension_constructor=[0,of_val,name,id],
     extension_constructor=Extension_constructor[1],
     extension_name=Extension_constructor[2],
     extension_id=Extension_constructor[3],
     max_ephe_length=max_array_length - 2 | 0;
    function create(l)
     {var _ys_=0 <= l?1:0,_yt_=_ys_?l <= max_ephe_length?1:0:_ys_;
      if(1 - _yt_)invalid_arg(cst_Obj_Ephemeron_create);
      return runtime.caml_ephe_create(l)}
    function length$0(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset(e,o,msg)
     {var _yp_=0 <= o?1:0,_yq_=_yp_?o < length$0(e)?1:0:_yp_,_yr_=1 - _yq_;
      return _yr_?invalid_arg(msg):_yr_}
    function get_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key);
      return runtime.caml_ephe_get_key(e,o)}
    function get_key_copy(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key_copy);
      return runtime.caml_ephe_get_key_copy(e,o)}
    function set_key(e,o,x)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_set_key);
      return caml_ephe_set_key(e,o,x)}
    function unset_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_unset_key);
      return caml_ephe_unset_key(e,o)}
    function check_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_check_key);
      return runtime.caml_ephe_check_key(e,o)}
    function blit_key(e1,o1,e2,o2,l)
     {if(0 <= l)
       if(0 <= o1)
        if(! ((length$0(e1) - l | 0) < o1))
         if(0 <= o2)
          if(! ((length$0(e2) - l | 0) < o2))
           {var
             _yn_=0 !== l?1:0,
             _yo_=_yn_?runtime.caml_ephe_blit_key(e1,o1,e2,o2,l):_yn_;
            return _yo_}
      return invalid_arg(cst_Obj_Ephemeron_blit_key)}
    var
     _s_=runtime.caml_ephe_blit_data,
     _t_=runtime.caml_ephe_check_data,
     _u_=
      [0,
       create,
       length$0,
       get_key,
       get_key_copy,
       set_key,
       unset_key,
       check_key,
       blit_key,
       runtime.caml_ephe_get_data,
       runtime.caml_ephe_get_data_copy,
       runtime.caml_ephe_set_data,
       function(_ym_){return runtime.caml_ephe_unset_data(_ym_)},
       _t_,
       _s_,
       max_ephe_length],
     Stdlib_obj=
      [0,
       is_block,
       double_field,
       set_double_field,
       first_non_constant_constructor_tag,
       last_non_constant_constructor_tag,
       lazy_tag,
       closure_tag,
       object_tag,
       infix_tag,
       forward_tag,
       no_scan_tag,
       abstract_tag,
       string_tag,
       double_tag,
       double_array_tag,
       custom_tag,
       custom_tag,
       int_tag,
       out_of_heap_tag,
       unaligned_tag,
       Extension_constructor,
       extension_constructor,
       extension_name,
       extension_id,
       marshal,
       unmarshal,
       _u_];
    caml_register_global(733,Stdlib_obj,"Stdlib__obj");
    var make_float=runtime.caml_make_float_vect,Floatarray=[0];
    function init$2(l,f)
     {if(0 === l)return [0];
      if(0 <= l)
       {var res=caml_make_vect(l,caml_call1(f,0)),_yk_=l - 1 | 0,_yj_=1;
        if(! (_yk_ < 1))
         {var i=_yj_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _yl_=i + 1 | 0;
            if(_yk_ !== i){var i=_yl_;continue}
            break}}
        return res}
      return invalid_arg(cst_Array_init)}
    function create_matrix(sx,sy,init)
     {var res=caml_make_vect(sx,[0]),_yh_=sx - 1 | 0,_yg_=0;
      if(! (_yh_ < 0))
       {var x=_yg_;
        for(;;)
         {res[1 + x] = caml_make_vect(sy,init);
          var _yi_=x + 1 | 0;
          if(_yh_ !== x){var x=_yi_;continue}
          break}}
      return res}
    function copy$1(a)
     {var l=a.length - 1;return 0 === l?[0]:caml_array_sub(a,0,l)}
    function append$0(a1,a2)
     {var l1=a1.length - 1;
      return 0 === l1
              ?copy$1(a2)
              :0 === a2.length - 1
                ?caml_array_sub(a1,0,l1)
                :runtime.caml_array_append(a1,a2)}
    function sub$1(a,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((a.length - 1 - len | 0) < ofs))
         return caml_array_sub(a,ofs,len);
      return invalid_arg(cst_Array_sub)}
    function fill$0(a,ofs,len,v)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((a.length - 1 - len | 0) < ofs))
         {var _ye_=(ofs + len | 0) - 1 | 0;
          if(! (_ye_ < ofs))
           {var i=ofs;
            for(;;)
             {a[1 + i] = v;
              var _yf_=i + 1 | 0;
              if(_ye_ !== i){var i=_yf_;continue}
              break}}
          return 0}
      return invalid_arg(cst_Array_fill)}
    function blit$1(a1,ofs1,a2,ofs2,len)
     {if(0 <= len)
       if(0 <= ofs1)
        if(! ((a1.length - 1 - len | 0) < ofs1))
         if(0 <= ofs2)
          if(! ((a2.length - 1 - len | 0) < ofs2))
           return runtime.caml_array_blit(a1,ofs1,a2,ofs2,len);
      return invalid_arg(cst_Array_blit)}
    function iter$5(f,a)
     {var _yc_=a.length - 1 - 1 | 0,_yb_=0;
      if(! (_yc_ < 0))
       {var i=_yb_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _yd_=i + 1 | 0;
          if(_yc_ !== i){var i=_yd_;continue}
          break}}
      return 0}
    function iter2$0(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg(cst_Array_iter2_arrays_must_have_the_same_length);
      var _x$_=a.length - 1 - 1 | 0,_x__=0;
      if(! (_x$_ < 0))
       {var i=_x__;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _ya_=i + 1 | 0;
          if(_x$_ !== i){var i=_ya_;continue}
          break}}
      return 0}
    function map$5(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_x8_=l - 1 | 0,_x7_=1;
      if(! (_x8_ < 1))
       {var i=_x7_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _x9_=i + 1 | 0;
          if(_x8_ !== i){var i=_x9_;continue}
          break}}
      return r}
    function map2$0(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)
       return invalid_arg(cst_Array_map2_arrays_must_have_the_same_length);
      if(0 === la)return [0];
      var r=caml_make_vect(la,caml_call2(f,a[1],b[1])),_x5_=la - 1 | 0,_x4_=1;
      if(! (_x5_ < 1))
       {var i=_x4_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _x6_=i + 1 | 0;
          if(_x5_ !== i){var i=_x6_;continue}
          break}}
      return r}
    function iteri$2(f,a)
     {var _x2_=a.length - 1 - 1 | 0,_x1_=0;
      if(! (_x2_ < 0))
       {var i=_x1_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _x3_=i + 1 | 0;
          if(_x2_ !== i){var i=_x3_;continue}
          break}}
      return 0}
    function mapi$2(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call2(f,0,a[1])),_xZ_=l - 1 | 0,_xY_=1;
      if(! (_xZ_ < 1))
       {var i=_xY_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _x0_=i + 1 | 0;
          if(_xZ_ !== i){var i=_x0_;continue}
          break}}
      return r}
    function to_list$1(a)
     {var i$1=a.length - 1 - 1 | 0,i=i$1,res=0;
      for(;;)
       {if(0 <= i)
         {var res$0=[0,a[1 + i],res],i$0=i - 1 | 0,i=i$0,res=res$0;continue}
        return res}}
    function list_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[2],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function of_list(l)
     {if(l)
       {var
         tl=l[2],
         hd=l[1],
         a=caml_make_vect(list_length(0,l),hd),
         i=1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i + 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    function fold_left$1(f,x,a)
     {var r=[0,x],_xW_=a.length - 1 - 1 | 0,_xV_=0;
      if(! (_xW_ < 0))
       {var i=_xV_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _xX_=i + 1 | 0;
          if(_xW_ !== i){var i=_xX_;continue}
          break}}
      return r[1]}
    function fold_right$0(f,a,x)
     {var r=[0,x],_xT_=a.length - 1 - 1 | 0;
      if(! (_xT_ < 0))
       {var i=_xT_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _xU_=i - 1 | 0;
          if(0 !== i){var i=_xU_;continue}
          break}}
      return r[1]}
    function exists$0(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$0(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function mem$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function memq$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x === a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    var Bottom=[248,cst_Stdlib_Array_Bottom,caml_fresh_oo_id(0)];
    function sort(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {var _xM_=i31 + 1 | 0,_xN_=caml_check_bound(a,_xM_)[1 + _xM_];
          if(caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_xN_) < 0)
           x[1] = i31 + 1 | 0;
          var
           _xO_=i31 + 2 | 0,
           _xP_=caml_check_bound(a,_xO_)[1 + _xO_],
           _xQ_=x[1];
          if(caml_call2(cmp,caml_check_bound(a,_xQ_)[1 + _xQ_],_xP_) < 0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if((i31 + 1 | 0) < l)
         {var _xR_=i31 + 1 | 0,_xS_=caml_check_bound(a,_xR_)[1 + _xR_];
          if(! (0 <= caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_xS_)))
           return i31 + 1 | 0}
        if(i31 < l)return i31;
        throw [0,Bottom,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_check_bound(a,j)[1 + j],e))
           {var _xL_=caml_check_bound(a,j)[1 + j];
            caml_check_bound(a,i$0)[1 + i$0] = _xL_;
            var i$0=j;
            continue}
          caml_check_bound(a,i$0)[1 + i$0] = e;
          return 0}}
      function trickle(l,i,e)
       {try
         {var _xK_=trickledown(l,i,e);return _xK_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom)
           {var i$0=exn[2];caml_check_bound(a,i$0)[1 + i$0] = e;return 0}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0),_xJ_=caml_check_bound(a,i$1)[1 + i$1];
          caml_check_bound(a,i$0)[1 + i$0] = _xJ_;
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _xI_=bubbledown(l,i);return _xI_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_xA_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_xA_ < 0))
       {var i$2=_xA_;
        for(;;)
         {trickle(l,i$2,caml_check_bound(a,i$2)[1 + i$2]);
          var _xH_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_xH_;continue}
          break}}
      var _xB_=l - 1 | 0;
      if(! (_xB_ < 2))
       {var i$0=_xB_;
        a:
        for(;;)
         {var
           e$0=caml_check_bound(a,i$0)[1 + i$0],
           _xF_=caml_check_bound(a,0)[1];
          caml_check_bound(a,i$0)[1 + i$0] = _xF_;
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_v_];
            if
             (0 <= caml_call2(cmp,caml_check_bound(a,father)[1 + father],e$0))
             caml_check_bound(a,i)[1 + i] = e$0;
            else
             {var _xz_=caml_check_bound(a,father)[1 + father];
              caml_check_bound(a,i)[1 + i] = _xz_;
              if(0 < father){var i=father;continue}
              caml_check_bound(a,0)[1] = e$0}
            var _xG_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_xG_;continue a}
            break}
          break}}
      var _xC_=1 < l?1:0;
      if(_xC_)
       {var e=caml_check_bound(a,1)[2],_xD_=caml_check_bound(a,0)[1];
        caml_check_bound(a,1)[2] = _xD_;
        caml_check_bound(a,0)[1] = e;
        var _xE_=0}
      else
       var _xE_=_xC_;
      return _xE_}
    function fast_sort$0(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_check_bound(src2,src2ofs)[1 + src2ofs],
         s1$1=caml_check_bound(a,src1ofs)[1 + src1ofs],
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_check_bound(dst,d)[1 + d] = s2;
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_check_bound(src2,i2$0)[1 + i2$0],
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$1(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_check_bound(dst,d)[1 + d] = s1;
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_check_bound(a,i1$0)[1 + i1$0],
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$1(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _xr_=len - 1 | 0,_xq_=0;
        if(! (_xr_ < 0))
         {var i=_xq_;
          a:
          for(;;)
           {var
             _xs_=srcofs + i | 0,
             e=caml_check_bound(a,_xs_)[1 + _xs_],
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if(dstofs <= j[1])
               {var _xt_=j[1];
                if(0 < caml_call2(cmp,caml_check_bound(dst,_xt_)[1 + _xt_],e))
                 {var
                   _xu_=j[1],
                   _xv_=caml_check_bound(dst,_xu_)[1 + _xu_],
                   _xw_=j[1] + 1 | 0;
                  caml_check_bound(dst,_xw_)[1 + _xw_] = _xv_;
                  j[1] += -1;
                  continue}}
              var _xx_=j[1] + 1 | 0;
              caml_check_bound(dst,_xx_)[1 + _xx_] = e;
              var _xy_=i + 1 | 0;
              if(_xr_ !== i){var i=_xy_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var
       l1=l / 2 | 0,
       l2=l - l1 | 0,
       t=caml_make_vect(l2,caml_check_bound(a,0)[1]);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$4(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_xo_=i + 1 | 0;
          return [0,x,function(_xp_){return aux(_xo_,_xp_)}]}
        return 0}
      var _xm_=0;
      return function(_xn_){return aux(_xm_,_xn_)}}
    function to_seqi$1(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_xk_=i + 1 | 0;
          return [0,[0,i,x],function(_xl_){return aux(_xk_,_xl_)}]}
        return 0}
      var _xi_=0;
      return function(_xj_){return aux(_xi_,_xj_)}}
    function of_seq$2(i$2)
     {var _xh_=0,l=fold_left(function(acc,x){return [0,x,acc]},_xh_,i$2);
      if(l)
       {var
         tl=l[2],
         hd=l[1],
         len=list_length(0,l),
         a=caml_make_vect(len,hd),
         i$1=len - 2 | 0,
         i=i$1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i - 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    var
     concat$1=caml_array_concat,
     include$2=
      [0,
       make_float,
       init$2,
       create_matrix,
       create_matrix,
       append$0,
       concat$1,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       iteri$2,
       map$5,
       mapi$2,
       fold_left$1,
       fold_right$0,
       iter2$0,
       map2$0,
       for_all$0,
       exists$0,
       mem$0,
       memq$0,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(734,include$2,"Stdlib__array");
    var zero=0.,one=1.,minus_one=-1.;
    function is_finite(x){return x - x == 0.?1:0}
    function is_infinite(x){return 1. / x == 0.?1:0}
    function is_nan(x){return x != x?1:0}
    var pi=3.14159265358979312;
    function is_integer(x)
     {var _xg_=x == runtime.caml_trunc_float(x)?1:0;
      return _xg_?is_finite(x):_xg_}
    function succ$0(x){return caml_nextafter_float(x,infinity)}
    function pred$0(x){return caml_nextafter_float(x,neg_infinity)}
    function equal$7(x,y){return 0 === caml_float_compare(x,y)?1:0}
    function min$1(x,y)
     {if(! (x < y))
       {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
        if(switch$0)return x != x?x:y}
      return y != y?y:x}
    function max$1(x,y)
     {if(! (x < y))
       {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
        if(switch$0)return y != y?y:x}
      return x != x?x:y}
    function min_max(x,y)
     {if(x == x)
       if(y == y)
        {if(! (x < y))
          {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
           if(switch$0)return [0,y,x]}
         return [0,x,y]}
      return [0,nan,nan]}
    function min_num(x,y)
     {if(! (x < y))
       {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
        if(switch$0)return y != y?x:y}
      return x != x?y:x}
    function max_num(x,y)
     {if(! (x < y))
       {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
        if(switch$0)return x != x?y:x}
      return y != y?x:y}
    function min_max_num(x,y)
     {if(x != x)return [0,y,y];
      if(y != y)return [0,x,x];
      if(! (x < y))
       {var switch$0=caml_signbit_float(y)?1:caml_signbit_float(x)?0:1;
        if(switch$0)return [0,y,x]}
      return [0,x,y]}
    function hash$0(x){return caml_hash(10,100,0,x)}
    function unsafe_fill(a,ofs,len,v)
     {var _xe_=(ofs + len | 0) - 1 | 0;
      if(! (_xe_ < ofs))
       {var i=ofs;
        for(;;)
         {a[1 + i] = v;
          var _xf_=i + 1 | 0;
          if(_xe_ !== i){var i=_xf_;continue}
          break}}
      return 0}
    function unsafe_blit(src,sofs,dst,dofs,len)
     {var _xc_=len - 1 | 0,_xb_=0;
      if(! (_xc_ < 0))
       {var i=_xb_;
        for(;;)
         {dst[1 + (dofs + i | 0)] = src[1 + (sofs + i | 0)];
          var _xd_=i + 1 | 0;
          if(_xc_ !== i){var i=_xd_;continue}
          break}}
      return 0}
    function check(a,ofs,len,msg)
     {var _w9_=ofs < 0?1:0;
      if(_w9_)
       var _w__=_w9_;
      else
       {var _w$_=len < 0?1:0;
        if(_w$_)
         var _w__=_w$_;
        else
         var
          _xa_=(ofs + len | 0) < 0?1:0,
          _w__=_xa_ || (a.length - 1 < (ofs + len | 0)?1:0)}
      return _w__?invalid_arg(msg):_w__}
    function make$1(n,v)
     {var result=caml_floatarray_create(n);
      unsafe_fill(result,0,n,v);
      return result}
    function init$3(l,f)
     {if(0 <= l)
       {var res=caml_floatarray_create(l),_w7_=l - 1 | 0,_w6_=0;
        if(! (_w7_ < 0))
         {var i=_w6_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _w8_=i + 1 | 0;
            if(_w7_ !== i){var i=_w8_;continue}
            break}}
        return res}
      return invalid_arg(cst_Float_Array_init)}
    function append$1(a1,a2)
     {var
       l1=a1.length - 1,
       l2=a2.length - 1,
       result=caml_floatarray_create(l1 + l2 | 0);
      unsafe_blit(a1,0,result,0,l1);
      unsafe_blit(a2,0,result,l1,l2);
      return result}
    function concat$2(l)
     {var acc=0,param=l;
      for(;;)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           x=hd.length - 1 + acc | 0,
           acc$0=acc <= x?x:invalid_arg(cst_Float_Array_concat),
           acc=acc$0,
           param=tl;
          continue}
        var result=caml_floatarray_create(acc),l$0=l,i=0;
        for(;;)
         {if(l$0)
           {var tl$0=l$0[2],hd$0=l$0[1],hlen=hd$0.length - 1;
            unsafe_blit(hd$0,0,result,i,hlen);
            var i$0=i + hlen | 0,l$0=tl$0,i=i$0;
            continue}
          if(i === acc)return result;
          throw [0,Assert_failure,_w_]}}}
    function sub$2(a,ofs,len)
     {check(a,ofs,len,cst_Float_Array_sub);
      var result=caml_floatarray_create(len);
      unsafe_blit(a,ofs,result,0,len);
      return result}
    function copy$2(a)
     {var l=a.length - 1,result=caml_floatarray_create(l);
      unsafe_blit(a,0,result,0,l);
      return result}
    function fill$1(a,ofs,len,v)
     {check(a,ofs,len,cst_Float_Array_fill);return unsafe_fill(a,ofs,len,v)}
    function blit$2(src,sofs,dst,dofs,len)
     {check(src,sofs,len,cst_Float_array_blit);
      check(dst,dofs,len,cst_Float_array_blit$0);
      return unsafe_blit(src,sofs,dst,dofs,len)}
    function to_list$2(a)
     {return init(a.length - 1,function(_w5_){return a[1 + _w5_]})}
    function of_list$0(l)
     {var result=caml_floatarray_create(length(l)),i=0,l$0=l;
      for(;;)
       {if(l$0)
         {var t=l$0[2],h=l$0[1];
          result[1 + i] = h;
          var i$0=i + 1 | 0,i=i$0,l$0=t;
          continue}
        return result}}
    function iter$6(f,a)
     {var _w3_=a.length - 1 - 1 | 0,_w2_=0;
      if(! (_w3_ < 0))
       {var i=_w2_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _w4_=i + 1 | 0;
          if(_w3_ !== i){var i=_w4_;continue}
          break}}
      return 0}
    function iter2$1(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg
               (cst_Float_Array_iter2_arrays_must_have_the_same_length);
      var _w0_=a.length - 1 - 1 | 0,_wZ_=0;
      if(! (_w0_ < 0))
       {var i=_wZ_;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _w1_=i + 1 | 0;
          if(_w0_ !== i){var i=_w1_;continue}
          break}}
      return 0}
    function map$6(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wX_=l - 1 | 0,_wW_=0;
      if(! (_wX_ < 0))
       {var i=_wW_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wY_=i + 1 | 0;
          if(_wX_ !== i){var i=_wY_;continue}
          break}}
      return r}
    function map2$1(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)
       return invalid_arg
               (cst_Float_Array_map2_arrays_must_have_the_same_length);
      var r=caml_floatarray_create(la),_wU_=la - 1 | 0,_wT_=0;
      if(! (_wU_ < 0))
       {var i=_wT_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _wV_=i + 1 | 0;
          if(_wU_ !== i){var i=_wV_;continue}
          break}}
      return r}
    function iteri$3(f,a)
     {var _wR_=a.length - 1 - 1 | 0,_wQ_=0;
      if(! (_wR_ < 0))
       {var i=_wQ_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _wS_=i + 1 | 0;
          if(_wR_ !== i){var i=_wS_;continue}
          break}}
      return 0}
    function mapi$3(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wO_=l - 1 | 0,_wN_=0;
      if(! (_wO_ < 0))
       {var i=_wN_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _wP_=i + 1 | 0;
          if(_wO_ !== i){var i=_wP_;continue}
          break}}
      return r}
    function fold_left$2(f,x,a)
     {var r=[0,x],_wL_=a.length - 1 - 1 | 0,_wK_=0;
      if(! (_wL_ < 0))
       {var i=_wK_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _wM_=i + 1 | 0;
          if(_wL_ !== i){var i=_wM_;continue}
          break}}
      return r[1]}
    function fold_right$1(f,a,x)
     {var r=[0,x],_wI_=a.length - 1 - 1 | 0;
      if(! (_wI_ < 0))
       {var i=_wI_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _wJ_=i - 1 | 0;
          if(0 !== i){var i=_wJ_;continue}
          break}}
      return r[1]}
    function exists$1(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$1(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function mem$1(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_float_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function mem_ieee(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x == a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    var Bottom$0=[248,cst_Stdlib_Float_Array_Bottom,caml_fresh_oo_id(0)];
    function sort$0(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {if
           (caml_call2
             (cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))
            <
            0)
           x[1] = i31 + 1 | 0;
          if
           (caml_call2
             (cmp,caml_array_get(a,x[1]),caml_array_get(a,i31 + 2 | 0))
            <
            0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if((i31 + 1 | 0) < l)
         if
          (!
           (0
            <=
            caml_call2
             (cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))))
          return i31 + 1 | 0;
        if(i31 < l)return i31;
        throw [0,Bottom$0,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_array_get(a,j),e))
           {caml_array_set(a,i$0,caml_array_get(a,j));var i$0=j;continue}
          return caml_array_set(a,i$0,e)}}
      function trickle(l,i,e)
       {try
         {var _wH_=trickledown(l,i,e);return _wH_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0)
           {var i$0=exn[2];return caml_array_set(a,i$0,e)}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0);
          caml_array_set(a,i$0,caml_array_get(a,i$1));
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _wG_=bubbledown(l,i);return _wG_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_wA_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_wA_ < 0))
       {var i$2=_wA_;
        for(;;)
         {trickle(l,i$2,caml_array_get(a,i$2));
          var _wF_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_wF_;continue}
          break}}
      var _wB_=l - 1 | 0;
      if(! (_wB_ < 2))
       {var i$0=_wB_;
        a:
        for(;;)
         {var e$0=caml_array_get(a,i$0);
          caml_array_set(a,i$0,caml_array_get(a,0));
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_x_];
            if(0 <= caml_call2(cmp,caml_array_get(a,father),e$0))
             caml_array_set(a,i,e$0);
            else
             {caml_array_set(a,i,caml_array_get(a,father));
              if(0 < father){var i=father;continue}
              caml_array_set(a,0,e$0)}
            var _wE_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_wE_;continue a}
            break}
          break}}
      var _wC_=1 < l?1:0;
      if(_wC_)
       {var e=caml_array_get(a,1);
        caml_array_set(a,1,caml_array_get(a,0));
        var _wD_=caml_array_set(a,0,e)}
      else
       var _wD_=_wC_;
      return _wD_}
    function stable_sort(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_array_get(src2,src2ofs),
         s1$1=caml_array_get(a,src1ofs),
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_array_set(dst,d,s2);
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_array_get(src2,i2$0),
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$2(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_array_set(dst,d,s1);
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_array_get(a,i1$0),
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$2(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _wy_=len - 1 | 0,_wx_=0;
        if(! (_wy_ < 0))
         {var i=_wx_;
          a:
          for(;;)
           {var
             e=caml_array_get(a,srcofs + i | 0),
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if(dstofs <= j[1])
               if(0 < caml_call2(cmp,caml_array_get(dst,j[1]),e))
                {caml_array_set(dst,j[1] + 1 | 0,caml_array_get(dst,j[1]));
                 j[1] += -1;
                 continue}
              caml_array_set(dst,j[1] + 1 | 0,e);
              var _wz_=i + 1 | 0;
              if(_wy_ !== i){var i=_wz_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var l1=l / 2 | 0,l2=l - l1 | 0,t=caml_floatarray_create(l2);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$5(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_wv_=i + 1 | 0;
          return [0,x,function(_ww_){return aux(_wv_,_ww_)}]}
        return 0}
      var _wt_=0;
      return function(_wu_){return aux(_wt_,_wu_)}}
    function to_seqi$2(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_wr_=i + 1 | 0;
          return [0,[0,i,x],function(_ws_){return aux(_wr_,_ws_)}]}
        return 0}
      var _wp_=0;
      return function(_wq_){return aux(_wp_,_wq_)}}
    function of_seq$3(i$2)
     {var
       _wo_=0,
       param$0=fold_left(function(acc,x){return [0,x,acc]},_wo_,i$2),
       len=length(param$0),
       a=caml_floatarray_create(len),
       i$1=len - 1 | 0,
       i=i$1,
       param=param$0;
      for(;;)
       {if(param)
         {var tl=param[2],hd=param[1];
          a[1 + i] = hd;
          var i$0=i - 1 | 0,i=i$0,param=tl;
          continue}
        return a}}
    function map_to_array(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_wm_=l - 1 | 0,_wl_=1;
      if(! (_wm_ < 1))
       {var i=_wl_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wn_=i + 1 | 0;
          if(_wm_ !== i){var i=_wn_;continue}
          break}}
      return r}
    function map_from_array(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wj_=l - 1 | 0,_wi_=0;
      if(! (_wj_ < 0))
       {var i=_wi_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wk_=i + 1 | 0;
          if(_wj_ !== i){var i=_wk_;continue}
          break}}
      return r}
    var
     _y_=caml_floatarray_create,
     _z_=caml_array_set,
     _A_=caml_array_get,
     _B_=
      [0,
       function(_wh_){return _wh_.length - 1},
       _A_,
       _z_,
       make$1,
       _y_,
       init$3,
       append$1,
       concat$2,
       sub$2,
       copy$2,
       fill$1,
       blit$2,
       to_list$2,
       of_list$0,
       iter$6,
       iteri$3,
       map$6,
       mapi$3,
       fold_left$2,
       fold_right$1,
       iter2$1,
       map2$1,
       for_all$1,
       exists$1,
       mem$1,
       mem_ieee,
       sort$0,
       stable_sort,
       stable_sort,
       to_seq$5,
       to_seqi$2,
       of_seq$3,
       map_to_array,
       map_from_array],
     _C_=caml_floatarray_create,
     _D_=caml_array_set,
     _E_=caml_array_get,
     Stdlib_float=
      [0,
       zero,
       one,
       minus_one,
       succ$0,
       pred$0,
       infinity,
       neg_infinity,
       nan,
       pi,
       max_float,
       min_float,
       epsilon,
       is_finite,
       is_infinite,
       is_nan,
       is_integer,
       of_string_opt,
       to_string,
       caml_float_compare,
       equal$7,
       min$1,
       max$1,
       min_max,
       min_num,
       max_num,
       min_max_num,
       hash$0,
       [0,
        function(_wg_){return _wg_.length - 1},
        _E_,
        _D_,
        make$1,
        _C_,
        init$3,
        append$1,
        concat$2,
        sub$2,
        copy$2,
        fill$1,
        blit$2,
        to_list$2,
        of_list$0,
        iter$6,
        iteri$3,
        map$6,
        mapi$3,
        fold_left$2,
        fold_right$1,
        iter2$1,
        map2$1,
        for_all$1,
        exists$1,
        mem$1,
        mem_ieee,
        sort$0,
        stable_sort,
        stable_sort,
        to_seq$5,
        to_seqi$2,
        of_seq$3,
        map_to_array,
        map_from_array],
       _B_];
    caml_register_global(735,Stdlib_float,"Stdlib__float");
    var zero$0=0,one$0=1,minus_one$0=-1;
    function abs$0(x){return 0 <= x?x:- x | 0}
    var max_int$0=2147483647,min_int$0=-2147483648;
    function lognot(x){return x ^ -1}
    function equal$8(_wf_,_we_){return _wf_ === _we_?1:0}
    var compare$7=caml_int_compare;
    function to_string$3(x){return caml_new_string("" + x)}
    var
     Stdlib_int=
      [0,
       zero$0,
       one$0,
       minus_one$0,
       abs$0,
       max_int$0,
       min_int$0,
       lognot,
       equal$8,
       compare$7,
       to_string$3];
    caml_register_global(736,Stdlib_int,"Stdlib__int");
    var zero$1=0,one$1=1,minus_one$1=-1;
    function succ$1(n){return n + 1 | 0}
    function pred$1(n){return n - 1 | 0}
    function abs$1(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$1=-2147483648,max_int$1=2147483647;
    function lognot$0(n){return n ^ -1}
    function unsigned_to_int(n)
     {if(! (0 < caml_int_compare(0,n)))
       if(! (0 < caml_int_compare(n,2147483647)))return [0,n];
      return 0}
    function to_string$4(n){return caml_format_int(cst_d,n)}
    function of_string_opt$0(s)
     {try
       {var _wc_=[0,caml_int_of_string(s)];return _wc_}
      catch(_wd_)
       {_wd_ = caml_wrap_exception(_wd_);
        if(_wd_[1] === Failure)return 0;
        throw _wd_}}
    var compare$8=caml_int_compare;
    function equal$9(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function unsigned_div(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare(n,d)?one$1:zero$1;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare(r,d)?q + 1 | 0:q}
    function unsigned_rem(n,d){return n - caml_mul(unsigned_div(n,d),d) | 0}
    var
     Stdlib_int32=
      [0,
       zero$1,
       one$1,
       minus_one$1,
       unsigned_div,
       unsigned_rem,
       succ$1,
       pred$1,
       abs$1,
       max_int$1,
       min_int$1,
       lognot$0,
       unsigned_to_int,
       of_string_opt$0,
       to_string$4,
       compare$8,
       unsigned_compare,
       equal$9];
    caml_register_global(737,Stdlib_int32,"Stdlib__int32");
    function succ$2(n){return caml_int64_add(n,_F_)}
    function pred$2(n){return caml_int64_sub(n,_G_)}
    function abs$2(n)
     {return caml_greaterequal(n,_H_)?n:runtime.caml_int64_neg(n)}
    function lognot$1(n){return runtime.caml_int64_xor(n,_I_)}
    var max_int$3=caml_int64_of_int32(2147483647);
    function unsigned_to_int$0(n)
     {if(! (0 < caml_int64_compare(zero$2,n)))
       if(! (0 < caml_int64_compare(n,max_int$3)))
        return [0,runtime.caml_int64_to_int32(n)];
      return 0}
    function to_string$5(n){return caml_int64_format(cst_d$0,n)}
    function of_string_opt$1(s)
     {try
       {var _wa_=[0,caml_int64_of_string(s)];return _wa_}
      catch(_wb_)
       {_wb_ = caml_wrap_exception(_wb_);
        if(_wb_[1] === Failure)return 0;
        throw _wb_}}
    var compare$9=caml_int64_compare;
    function equal$10(x,y){return 0 === caml_int64_compare(x,y)?1:0}
    function unsigned_compare$0(n,m)
     {return caml_int64_compare
              (caml_int64_sub(n,min_int$2),caml_int64_sub(m,min_int$2))}
    function unsigned_div$0(n,d)
     {if(caml_lessthan(d,zero$2))
       return 0 <= unsigned_compare$0(n,d)?one$2:zero$2;
      var
       q=
        caml_int64_shift_left
         (runtime.caml_int64_div
           (runtime.caml_int64_shift_right_unsigned(n,1),d),
          1),
       r=caml_int64_sub(n,caml_int64_mul(q,d));
      return 0 <= unsigned_compare$0(r,d)?succ$2(q):q}
    function unsigned_rem$0(n,d)
     {return caml_int64_sub(n,caml_int64_mul(unsigned_div$0(n,d),d))}
    var
     Stdlib_int64=
      [0,
       zero$2,
       one$2,
       minus_one$2,
       unsigned_div$0,
       unsigned_rem$0,
       succ$2,
       pred$2,
       abs$2,
       max_int$2,
       min_int$2,
       lognot$1,
       unsigned_to_int$0,
       of_string_opt$1,
       to_string$5,
       compare$9,
       unsigned_compare$0,
       equal$10];
    caml_register_global(738,Stdlib_int64,"Stdlib__int64");
    var zero$3=0,one$3=1,minus_one$3=-1;
    function succ$3(n){return n + 1 | 0}
    function pred$3(n){return n - 1 | 0}
    function abs$3(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$3=-2147483648,max_int$4=2147483647;
    function lognot$2(n){return n ^ -1}
    function unsigned_to_int$1(n)
     {if(! (0 < caml_int_compare(0,n)))
       if(! (0 < caml_int_compare(n,2147483647)))return [0,n];
      return 0}
    function to_string$6(n){return caml_format_int(cst_d$1,n)}
    function of_string_opt$2(s)
     {try
       {var _v__=[0,caml_int_of_string(s)];return _v__}
      catch(_v$_)
       {_v$_ = caml_wrap_exception(_v$_);
        if(_v$_[1] === Failure)return 0;
        throw _v$_}}
    var compare$10=caml_int_compare;
    function equal$11(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare$1(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function unsigned_div$1(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare$1(n,d)?one$3:zero$3;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare$1(r,d)?q + 1 | 0:q}
    function unsigned_rem$1(n,d)
     {return n - caml_mul(unsigned_div$1(n,d),d) | 0}
    var
     Stdlib_nativeint=
      [0,
       zero$3,
       one$3,
       minus_one$3,
       unsigned_div$1,
       unsigned_rem$1,
       succ$3,
       pred$3,
       abs$3,
       match$2,
       max_int$4,
       min_int$3,
       lognot$2,
       unsigned_to_int$1,
       of_string_opt$2,
       to_string$6,
       compare$10,
       unsigned_compare$1,
       equal$11];
    caml_register_global(739,Stdlib_nativeint,"Stdlib__nativeint");
    function engine(tbl,state,buf)
     {var
       result=runtime.caml_lex_engine(tbl,state,buf),
       _v7_=0 <= result?1:0,
       _v8_=_v7_?buf[12] !== dummy_pos?1:0:_v7_;
      if(_v8_)
       {buf[11] = buf[12];
        var _v9_=buf[12];
        buf[12] = [0,_v9_[1],_v9_[2],_v9_[3],buf[4] + buf[6] | 0]}
      return result}
    function new_engine(tbl,state,buf)
     {var
       result=runtime.caml_new_lex_engine(tbl,state,buf),
       _v4_=0 <= result?1:0,
       _v5_=_v4_?buf[12] !== dummy_pos?1:0:_v4_;
      if(_v5_)
       {buf[11] = buf[12];
        var _v6_=buf[12];
        buf[12] = [0,_v6_[1],_v6_[2],_v6_[3],buf[4] + buf[6] | 0]}
      return result}
    function from_function(opt,f)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _vQ_=with_positions?zero_pos:dummy_pos,
       _vR_=with_positions?zero_pos:dummy_pos,
       aux_buffer=caml_create_bytes(512),
       _vS_=[0],
       _vT_=0,
       _vU_=0,
       _vV_=0,
       _vW_=0,
       _vX_=0,
       _vY_=0,
       _vZ_=0,
       _v0_=caml_create_bytes(1024);
      return [0,
              function(lexbuf)
               {var
                 read=
                  caml_call2(f,aux_buffer,caml_ml_bytes_length(aux_buffer)),
                 n=0 < read?read:(lexbuf[9] = 1,0);
                if(caml_ml_bytes_length(lexbuf[2]) < (lexbuf[3] + n | 0))
                 {if
                   (((lexbuf[3] - lexbuf[5] | 0) + n | 0)
                    <=
                    caml_ml_bytes_length(lexbuf[2]))
                   blit
                    (lexbuf[2],lexbuf[5],lexbuf[2],0,lexbuf[3] - lexbuf[5] | 0);
                  else
                   {var
                     newlen=
                      min
                       (2 * caml_ml_bytes_length(lexbuf[2]) | 0,max_string_length);
                    if(newlen < ((lexbuf[3] - lexbuf[5] | 0) + n | 0))
                     failwith(cst_Lexing_lex_refill_cannot_grow_buffer);
                    var newbuf=caml_create_bytes(newlen);
                    blit(lexbuf[2],lexbuf[5],newbuf,0,lexbuf[3] - lexbuf[5] | 0);
                    lexbuf[2] = newbuf}
                  var s=lexbuf[5];
                  lexbuf[4] = lexbuf[4] + s | 0;
                  lexbuf[6] = lexbuf[6] - s | 0;
                  lexbuf[5] = 0;
                  lexbuf[7] = lexbuf[7] - s | 0;
                  lexbuf[3] = lexbuf[3] - s | 0;
                  var t=lexbuf[10],_v2_=t.length - 1 - 1 | 0,_v1_=0;
                  if(! (_v2_ < 0))
                   {var i=_v1_;
                    for(;;)
                     {var v=caml_check_bound(t,i)[1 + i];
                      if(0 <= v)caml_check_bound(t,i)[1 + i] = v - s | 0;
                      var _v3_=i + 1 | 0;
                      if(_v2_ !== i){var i=_v3_;continue}
                      break}}}
                blit(aux_buffer,0,lexbuf[2],lexbuf[3],n);
                lexbuf[3] = lexbuf[3] + n | 0;
                return 0},
              _v0_,
              _vZ_,
              _vY_,
              _vX_,
              _vW_,
              _vV_,
              _vU_,
              _vT_,
              _vS_,
              _vR_,
              _vQ_]}
    function from_channel(with_positions,ic)
     {return from_function
              (with_positions,function(buf,n){return input(ic,buf,0,n)})}
    function from_string$0(opt,s)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _vF_=with_positions?zero_pos:dummy_pos,
       _vG_=with_positions?zero_pos:dummy_pos,
       _vH_=[0],
       _vI_=1,
       _vJ_=0,
       _vK_=0,
       _vL_=0,
       _vM_=0,
       _vN_=0,
       _vO_=caml_ml_string_length(s),
       _vP_=of_string(s);
      return [0,
              function(lexbuf){lexbuf[9] = 1;return 0},
              _vP_,
              _vO_,
              _vN_,
              _vM_,
              _vL_,
              _vK_,
              _vJ_,
              _vI_,
              _vH_,
              _vG_,
              _vF_]}
    function with_positions(lexbuf){return lexbuf[12] !== dummy_pos?1:0}
    function lexeme(lexbuf)
     {var len=lexbuf[6] - lexbuf[5] | 0;
      return sub_string(lexbuf[2],lexbuf[5],len)}
    function sub_lexeme(lexbuf,i1,i2)
     {var len=i2 - i1 | 0;return sub_string(lexbuf[2],i1,len)}
    function sub_lexeme_opt(lexbuf,i1,i2)
     {if(0 <= i1){var len=i2 - i1 | 0;return [0,sub_string(lexbuf[2],i1,len)]}
      return 0}
    function sub_lexeme_char(lexbuf,i){return caml_bytes_get(lexbuf[2],i)}
    function sub_lexeme_char_opt(lexbuf,i)
     {return 0 <= i?[0,caml_bytes_get(lexbuf[2],i)]:0}
    function lexeme_char(lexbuf,i)
     {return caml_bytes_get(lexbuf[2],lexbuf[5] + i | 0)}
    function lexeme_start(lexbuf){return lexbuf[11][4]}
    function lexeme_end(lexbuf){return lexbuf[12][4]}
    function lexeme_start_p(lexbuf){return lexbuf[11]}
    function lexeme_end_p(lexbuf){return lexbuf[12]}
    function new_line(lexbuf)
     {var
       lcp=lexbuf[12],
       _vD_=lcp !== dummy_pos?1:0,
       _vE_=_vD_?(lexbuf[12] = [0,lcp[1],lcp[2] + 1 | 0,lcp[4],lcp[4]],0):_vD_;
      return _vE_}
    function flush_input(lb)
     {lb[6] = 0;
      lb[4] = 0;
      var lcp=lb[12];
      if(lcp !== dummy_pos)
       lb[12] = [0,lcp[1],zero_pos[2],zero_pos[3],zero_pos[4]];
      lb[3] = 0;
      return 0}
    var
     Stdlib_lexing=
      [0,
       dummy_pos,
       from_channel,
       from_string$0,
       from_function,
       with_positions,
       lexeme,
       lexeme_char,
       lexeme_start,
       lexeme_end,
       lexeme_start_p,
       lexeme_end_p,
       new_line,
       flush_input,
       sub_lexeme,
       sub_lexeme_opt,
       sub_lexeme_char,
       sub_lexeme_char_opt,
       engine,
       new_engine];
    caml_register_global(740,Stdlib_lexing,"Stdlib__lexing");
    var
     YYexit=[248,cst_Stdlib_Parsing_YYexit,caml_fresh_oo_id(0)],
     Parse_error=[248,cst_Stdlib_Parsing_Parse_error,caml_fresh_oo_id(0)],
     env=
      [0,
       caml_make_vect(100,0),
       caml_make_vect(100,0),
       caml_make_vect(100,dummy_pos),
       caml_make_vect(100,dummy_pos),
       100,
       0,
       0,
       0,
       dummy_pos,
       dummy_pos,
       0,
       0,
       0,
       0,
       0,
       0];
    function grow_stacks(param)
     {var
       oldsize=env[5],
       newsize=oldsize * 2 | 0,
       new_s=caml_make_vect(newsize,0),
       new_v=caml_make_vect(newsize,0),
       new_start=caml_make_vect(newsize,dummy_pos),
       new_end=caml_make_vect(newsize,dummy_pos);
      blit$1(env[1],0,new_s,0,oldsize);
      env[1] = new_s;
      blit$1(env[2],0,new_v,0,oldsize);
      env[2] = new_v;
      blit$1(env[3],0,new_start,0,oldsize);
      env[3] = new_start;
      blit$1(env[4],0,new_end,0,oldsize);
      env[4] = new_end;
      env[5] = newsize;
      return 0}
    function clear_parser(param)
     {fill$0(env[2],0,env[5],0);env[8] = 0;return 0}
    var current_lookahead_fun=[0,function(param){return 0}];
    function yyparse(tables,start,lexer,lexbuf)
     {var
       init_asp=env[11],
       init_sp=env[14],
       init_stackbase=env[6],
       init_state=env[15],
       init_curr_char=env[7],
       init_lval=env[8],
       init_errflag=env[16];
      env[6] = env[14] + 1 | 0;
      env[7] = start;
      env[10] = lexbuf[12];
      try
       {var cmd=0,arg=0;
        for(;;)
         {var match=runtime.caml_parse_engine(tables,env,cmd,arg);
          switch(match)
           {case 0:
             var arg$0=caml_call1(lexer,lexbuf);
             env[9] = lexbuf[11];
             env[10] = lexbuf[12];
             var cmd=1,arg=arg$0;
             continue;
            case 1:throw Parse_error;
            case 2:grow_stacks(0);var cmd=2,arg=0;continue;
            case 3:grow_stacks(0);var cmd=3,arg=0;continue;
            case 4:
             try
              {var
                _vx_=env[13],
                _vy_=
                 caml_call1(caml_check_bound(tables[1],_vx_)[1 + _vx_],env),
                _vz_=4,
                cmd$0=_vz_,
                arg$1=_vy_}
             catch(_vC_)
              {_vC_ = caml_wrap_exception(_vC_);
               if(_vC_ !== Parse_error)throw _vC_;
               var cmd$0=5,arg$1=0,_vA_=_vC_}
             var cmd=cmd$0,arg=arg$1;
             continue;
            default:
             caml_call1(tables[14],cst_syntax_error);var cmd=5,arg=0;continue}}}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var curr_char=env[7];
        env[11] = init_asp;
        env[14] = init_sp;
        env[6] = init_stackbase;
        env[15] = init_state;
        env[7] = init_curr_char;
        env[8] = init_lval;
        env[16] = init_errflag;
        if(exn[1] === YYexit){var v=exn[2];return v}
        current_lookahead_fun[1]
        =
        function(tok)
         {if(is_block(tok))
           {var _vB_=caml_obj_tag(tok);
            return caml_check_bound(tables[3],_vB_)[1 + _vB_] === curr_char
                    ?1
                    :0}
          return caml_check_bound(tables[2],tok)[1 + tok] === curr_char?1:0};
        throw exn}}
    function peek_val(env,n)
     {var _vw_=env[11] - n | 0;return caml_check_bound(env[2],_vw_)[1 + _vw_]}
    function symbol_start_pos(param)
     {var i=env[12];
      for(;;)
       {if(0 < i)
         {var
           _vt_=(env[11] - i | 0) + 1 | 0,
           st=caml_check_bound(env[3],_vt_)[1 + _vt_],
           _vu_=(env[11] - i | 0) + 1 | 0,
           en=caml_check_bound(env[4],_vu_)[1 + _vu_];
          if(caml_notequal(st,en))return st;
          var i$0=i - 1 | 0,i=i$0;
          continue}
        var _vv_=env[11];
        return caml_check_bound(env[4],_vv_)[1 + _vv_]}}
    function symbol_end_pos(param)
     {var _vs_=env[11];return caml_check_bound(env[4],_vs_)[1 + _vs_]}
    function rhs_start_pos(n)
     {var _vr_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[3],_vr_)[1 + _vr_]}
    function rhs_end_pos(n)
     {var _vq_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[4],_vq_)[1 + _vq_]}
    function symbol_start(param){return symbol_start_pos(0)[4]}
    function symbol_end(param){return symbol_end_pos(0)[4]}
    function rhs_start(n){return rhs_start_pos(n)[4]}
    function rhs_end(n){return rhs_end_pos(n)[4]}
    function is_current_lookahead(tok)
     {return caml_call1(current_lookahead_fun[1],tok)}
    function parse_error(param){return 0}
    var
     Stdlib_parsing=
      [0,
       symbol_start,
       symbol_end,
       rhs_start,
       rhs_end,
       symbol_start_pos,
       symbol_end_pos,
       rhs_start_pos,
       rhs_end_pos,
       clear_parser,
       Parse_error,
       function(_vp_){return runtime.caml_set_parser_trace(_vp_)},
       YYexit,
       yyparse,
       peek_val,
       is_current_lookahead,
       parse_error];
    caml_register_global(741,Stdlib_parsing,"Stdlib__parsing");
    var
     Stdlib_set=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[4];return h}return 0}
         function create(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           var _vo_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_vo_]}
         function bal(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[3],lv=l[2],ll=l[1],_vj_=height(lr);
               if(_vj_ <= height(ll))return create(ll,lv,create(lr,v,r));
               if(lr)
                {var lrr=lr[3],lrv=lr[2],lrl=lr[1],_vk_=create(lrr,v,r);
                 return create(create(ll,lv,lrl),lrv,_vk_)}
               return invalid_arg(cst_Set_bal)}
             return invalid_arg(cst_Set_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[3],rv=r[2],rl=r[1],_vl_=height(rl);
               if(_vl_ <= height(rr))return create(create(l,v,rl),rv,rr);
               if(rl)
                {var rlr=rl[3],rlv=rl[2],rll=rl[1],_vm_=create(rlr,rv,rr);
                 return create(create(l,v,rll),rlv,_vm_)}
               return invalid_arg(cst_Set_bal$1)}
             return invalid_arg(cst_Set_bal$2)}
           var _vn_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_vn_]}
         function add(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return t;
             if(0 <= c){var rr=add(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=add(x,l);
             return l === ll?t:bal(ll,v,r)}
           return [0,0,x,0,1]}
         function singleton(x){return [0,0,x,0,1]}
         function add_min_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(add_min_element(x,l),v,r)}
           return singleton(x)}
         function add_max_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(l,v,add_max_element(x,r))}
           return singleton(x)}
         function join(l,v,r)
          {if(l)
            {if(r)
              {var
                rh=r[4],
                rr=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[4],
                lr=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,join(lr,v,r))
                       :(lh + 2 | 0) < rh?bal(join(l,v,rl),rv,rr):create(l,v,r)}
             return add_max_element(v,l)}
           return add_min_element(v,r)}
         function min_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vi_=param$0[1];
               if(_vi_){var param$0=_vi_;continue}
               var v=param$0[2];
               return v}
             throw Not_found}}
         function min_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vh_=param$0[1];
               if(_vh_){var param$0=_vh_;continue}
               var v=param$0[2];
               return [0,v]}
             return 0}}
         function max_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vf_=param$0[3],_vg_=param$0[2];
               if(_vf_){var param$0=_vf_;continue}
               return _vg_}
             throw Not_found}}
         function max_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vd_=param$0[3],_ve_=param$0[2];
               if(_vd_){var param$0=_vd_;continue}
               return [0,_ve_]}
             return 0}}
         function remove_min_elt(param)
          {if(param)
            {var _vc_=param[1];
             if(_vc_)
              {var r=param[3],v=param[2];return bal(remove_min_elt(_vc_),v,r)}
             var r$0=param[3];
             return r$0}
           return invalid_arg(cst_Set_remove_min_elt)}
         function concat(t,match)
          {if(t)
            {if(match)
              {var _vb_=remove_min_elt(match);
               return join(t,min_elt(match),_vb_)}
             return t}
           return match}
         function split(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,1,r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,r)]}
           return _J_}
         var empty=0;
         function is_empty(param){return param?0:1}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _va_=0 === c?1:0;
               if(_va_)return _va_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function remove(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {if(l)
                {if(r)
                  {var _u$_=remove_min_elt(r);return bal(l,min_elt(r),_u$_)}
                 return l}
               return r}
             if(0 <= c){var rr=remove(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=remove(x,l);
             return l === ll?t:bal(ll,v,r)}
           return 0}
         function union(t1,match)
          {if(t1)
            {if(match)
              {var
                h2=match[4],
                r2=match[3],
                v2=match[2],
                l2=match[1],
                h1=t1[4],
                r1=t1[3],
                v1=t1[2],
                l1=t1[1];
               if(h2 <= h1)
                {if(1 === h2)return add(v2,t1);
                 var
                  match$0=split(v1,match),
                  r2$0=match$0[3],
                  l2$0=match$0[1],
                  _u9_=union(r1,r2$0);
                 return join(union(l1,l2$0),v1,_u9_)}
               if(1 === h1)return add(v1,match);
               var
                match$1=split(v2,t1),
                r1$0=match$1[3],
                l1$0=match$1[1],
                _u__=union(r1$0,r2);
               return join(union(l1$0,l2),v2,_u__)}
             return t1}
           return match}
         function inter(s1,match)
          {if(s1)
            {if(match)
              {var
                r1=s1[3],
                v1=s1[2],
                l1=s1[1],
                _u5_=split(v1,match),
                _u6_=_u5_[1];
               if(0 === _u5_[2])
                {var r2=_u5_[3],_u7_=inter(r1,r2);
                 return concat(inter(l1,_u6_),_u7_)}
               var r2$0=_u5_[3],_u8_=inter(r1,r2$0);
               return join(inter(l1,_u6_),v1,_u8_)}
             return 0}
           return 0}
         function split_bis(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return 0;
             if(0 <= c)
              {var match=split_bis(x,r);
               if(match)
                {var rr=match[2],lr=match[1];return [0,join(l,v,lr),rr]}
               return 0}
             var match$0=split_bis(x,l);
             if(match$0)
              {var rl=match$0[2],ll=match$0[1];
               return [0,
                       ll,
                       function(param){return join(caml_call1(rl,0),v,r)}]}
             return 0}
           return [0,0,function(param){return 0}]}
         function disjoint(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0)
              if(s2$0)
               {var r1=s1$0[3],v1=s1$0[2],l1=s1$0[1];
                if(s1$0 === s2$0)return 0;
                var match=split_bis(v1,s2$0);
                if(match)
                 {var r2=match[2],l2=match[1],_u4_=disjoint(l1,l2);
                  if(_u4_)
                   {var s2$1=caml_call1(r2,0),s1$0=r1,s2$0=s2$1;continue}
                  return _u4_}
                return 0}
             return 1}}
         function diff(t1,match)
          {if(t1)
            {if(match)
              {var
                r1=t1[3],
                v1=t1[2],
                l1=t1[1],
                _u0_=split(v1,match),
                _u1_=_u0_[1];
               if(0 === _u0_[2])
                {var r2=_u0_[3],_u2_=diff(r1,r2);
                 return join(diff(l1,_u1_),v1,_u2_)}
               var r2$0=_u0_[3],_u3_=diff(r1,r2$0);
               return concat(diff(l1,_u1_),_u3_)}
             return t1}
           return 0}
         function cons_enum(s,e)
          {var s$0=s,e$0=e;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                s$1=s$0[1],
                e$1=[0,v,r,e$0],
                s$0=s$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(s1,s2)
          {var e2$2=cons_enum(s2,0),e1$2=cons_enum(s1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[3],
                  r2=e2[2],
                  v2=e2[1],
                  e1$0=e1[3],
                  r1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var
                    e2$1=cons_enum(r2,e2$0),
                    e1$1=cons_enum(r1,e1$0),
                    e1=e1$1,
                    e2=e2$1;
                   continue}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(s1,s2){return 0 === compare(s1,s2)?1:0}
         function subset(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0)
              {if(s2$0)
                {var
                  r2=s2$0[3],
                  v2=s2$0[2],
                  l2=s2$0[1],
                  r1=s1$0[3],
                  v1=s1$0[2],
                  l1=s1$0[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var _uX_=subset(l1,l2);
                   if(_uX_){var s1$0=r1,s2$0=r2;continue}
                   return _uX_}
                 if(0 <= c)
                  {var _uY_=subset([0,0,v1,r1,0],r2);
                   if(_uY_){var s1$0=l1;continue}
                   return _uY_}
                 var _uZ_=subset([0,l1,v1,0,0],l2);
                 if(_uZ_){var s1$0=r1;continue}
                 return _uZ_}
               return 0}
             return 1}}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call1(f,v);
               var param$0=r;
               continue}
             return 0}}
         function fold(f,s,accu)
          {var s$0=s,accu$0=accu;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                l=s$0[1],
                accu$1=caml_call2(f,v,fold(f,l,accu$0)),
                s$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _uU_=caml_call1(p,v);
               if(_uU_)
                {var _uV_=for_all(p,l);
                 if(_uV_){var param$0=r;continue}
                 var _uW_=_uV_}
               else
                var _uW_=_uU_;
               return _uW_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _uR_=caml_call1(p,v);
               if(_uR_)
                var _uS_=_uR_;
               else
                {var _uT_=exists(p,l);
                 if(! _uT_){var param$0=r;continue}
                 var _uS_=_uT_}
               return _uS_}
             return 0}}
         function filter(p,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=filter(p,l),
              pv=caml_call1(p,v),
              r$0=filter(p,r);
             if(pv){if(l === l$0)if(r === r$0)return t;return join(l$0,v,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pv=caml_call1(p,v),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pv){var _uP_=concat(lf,rf);return [0,join(lt,v,rt),_uP_]}
             var _uQ_=join(lf,v,rf);
             return [0,concat(lt,rt),_uQ_]}
           return _K_}
         function cardinal(param)
          {if(param)
            {var r=param[3],l=param[1],_uO_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _uO_ | 0}
           return 0}
         function elements_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,v,elements_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function elements(s){return elements_aux(0,s)}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return v;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return v0}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return v0}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,v];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function map(f,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=map(f,l),
              v$0=caml_call1(f,v),
              r$0=map(f,r);
             if(l === l$0)if(v === v$0)if(r === r$0)return t;
             if(0 === l$0)
              var switch$0=0;
             else
              var
               _uN_=max_elt(l$0),
               switch$0=0 <= caml_call2(Ord[1],_uN_,v$0)?1:0;
             if(! switch$0)
              {if(0 === r$0)
                var switch$1=0;
               else
                var
                 _uM_=min_elt(r$0),
                 switch$1=0 <= caml_call2(Ord[1],v$0,_uM_)?1:0;
               if(! switch$1)return join(l$0,v$0,r$0)}
             return union(l$0,add(v$0,r$0))}
           return 0}
         function of_list(l)
          {if(l)
            {var _uB_=l[2],_uC_=l[1];
             if(_uB_)
              {var _uD_=_uB_[2],_uE_=_uB_[1];
               if(_uD_)
                {var _uF_=_uD_[2],_uG_=_uD_[1];
                 if(_uF_)
                  {var _uH_=_uF_[2],_uI_=_uF_[1];
                   if(_uH_)
                    {if(_uH_[2])
                      {var
                        l$0=sort_uniq(Ord[1],l),
                        sub=
                         function(n,l)
                          {if(! (3 < n >>> 0))
                            switch(n)
                             {case 0:return [0,0,l];
                              case 1:
                               if(l){var l$3=l[2],x0=l[1];return [0,[0,0,x0,0,1],l$3]}
                               break;
                              case 2:
                               if(l)
                                {var _uJ_=l[2];
                                 if(_uJ_)
                                  {var l$4=_uJ_[2],x1=_uJ_[1],x0$0=l[1];
                                   return [0,[0,[0,0,x0$0,0,1],x1,0,2],l$4]}}
                               break;
                              default:
                               if(l)
                                {var _uK_=l[2];
                                 if(_uK_)
                                  {var _uL_=_uK_[2];
                                   if(_uL_)
                                    {var l$5=_uL_[2],x2=_uL_[1],x1$0=_uK_[1],x0$1=l[1];
                                     return [0,[0,[0,0,x0$1,0,1],x1$0,[0,0,x2,0,1],2],l$5]}}}}
                           var nl=n / 2 | 0,match=sub(nl,l),l$0=match[2],left=match[1];
                           if(l$0)
                            {var
                              l$1=l$0[2],
                              mid=l$0[1],
                              match$0=sub((n - nl | 0) - 1 | 0,l$1),
                              l$2=match$0[2],
                              right=match$0[1];
                             return [0,create(left,mid,right),l$2]}
                           throw [0,Assert_failure,_L_]};
                       return sub(length(l$0),l$0)[1]}
                     var x4=_uH_[1];
                     return add(x4,add(_uI_,add(_uG_,add(_uE_,singleton(_uC_)))))}
                   return add(_uI_,add(_uG_,add(_uE_,singleton(_uC_))))}
                 return add(_uG_,add(_uE_,singleton(_uC_)))}
               return add(_uE_,singleton(_uC_))}
             return singleton(_uC_)}
           return empty}
         function add_seq(i,m)
          {return fold_left(function(s,x){return add(x,s)},m,i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[3],t=c[2],x=c[1],_uz_=cons_enum(t,rest);
             return [0,x,function(_uA_){return seq_of_enum(_uz_,_uA_)}]}
           return 0}
         function to_seq(c)
          {var _ux_=cons_enum(c,0);
           return function(_uy_){return seq_of_enum(_ux_,_uy_)}}
         function to_seq_from(low,s)
          {var s$0=s,c=0;
           for(;;)
            {if(s$0)
              {var r=s$0[3],v=s$0[2],l=s$0[1],n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,r,c],s$0=l,c=c$0;continue}
                 var s$0=r;
                 continue}
               var _uv_=[0,v,r,c]}
             else
              var _uv_=c;
             return function(_uw_){return seq_of_enum(_uv_,_uw_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 singleton,
                 remove,
                 union,
                 inter,
                 disjoint,
                 diff,
                 compare,
                 equal,
                 subset,
                 iter,
                 map,
                 fold,
                 for_all,
                 exists,
                 filter,
                 partition,
                 cardinal,
                 elements,
                 min_elt,
                 min_elt_opt,
                 max_elt,
                 max_elt_opt,
                 min_elt,
                 min_elt_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 of_list,
                 to_seq_from,
                 to_seq,
                 add_seq,
                 of_seq]}];
    caml_register_global(742,Stdlib_set,"Stdlib__set");
    var
     Stdlib_map=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[5];return h}return 0}
         function create(l,x,d,r)
          {var hl=height(l),hr=height(r),_uu_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_uu_]}
         function singleton(x,d){return [0,0,x,d,0,1]}
         function bal(l,x,d,r)
          {if(l)var h=l[5],hl=h;else var hl=0;
           if(r)var h$0=r[5],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[4],ld=l[3],lv=l[2],ll=l[1],_up_=height(lr);
               if(_up_ <= height(ll))return create(ll,lv,ld,create(lr,x,d,r));
               if(lr)
                {var
                  lrr=lr[4],
                  lrd=lr[3],
                  lrv=lr[2],
                  lrl=lr[1],
                  _uq_=create(lrr,x,d,r);
                 return create(create(ll,lv,ld,lrl),lrv,lrd,_uq_)}
               return invalid_arg(cst_Map_bal)}
             return invalid_arg(cst_Map_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[4],rd=r[3],rv=r[2],rl=r[1],_ur_=height(rl);
               if(_ur_ <= height(rr))return create(create(l,x,d,rl),rv,rd,rr);
               if(rl)
                {var
                  rlr=rl[4],
                  rld=rl[3],
                  rlv=rl[2],
                  rll=rl[1],
                  _us_=create(rlr,rv,rd,rr);
                 return create(create(l,x,d,rll),rlv,rld,_us_)}
               return invalid_arg(cst_Map_bal$1)}
             return invalid_arg(cst_Map_bal$2)}
           var _ut_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_ut_]}
         var empty=0;
         function is_empty(param){return param?0:1}
         function add(x,data,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return d === data?m:[0,l,x,data,r,h];
             if(0 <= c){var rr=add(x,data,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=add(x,data,l);
             return l === ll?m:bal(ll,v,d,r)}
           return [0,0,x,data,0,1]}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return d;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0,d0]}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0,d0]}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,d];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _uo_=0 === c?1:0;
               if(_uo_)return _uo_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function min_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _un_=param$0[1];
               if(_un_){var param$0=_un_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,v,d]}
             throw Not_found}}
         function min_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _um_=param$0[1];
               if(_um_){var param$0=_um_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,[0,v,d]]}
             return 0}}
         function max_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _uj_=param$0[4],_uk_=param$0[3],_ul_=param$0[2];
               if(_uj_){var param$0=_uj_;continue}
               return [0,_ul_,_uk_]}
             throw Not_found}}
         function max_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _ug_=param$0[4],_uh_=param$0[3],_ui_=param$0[2];
               if(_ug_){var param$0=_ug_;continue}
               return [0,[0,_ui_,_uh_]]}
             return 0}}
         function remove_min_binding(param)
          {if(param)
            {var _uf_=param[1];
             if(_uf_)
              {var r=param[4],d=param[3],v=param[2];
               return bal(remove_min_binding(_uf_),v,d,r)}
             var r$0=param[4];
             return r$0}
           return invalid_arg(cst_Map_remove_min_elt)}
         function _tU_(t,match)
          {if(t)
            {if(match)
              {var match$0=min_binding(match),d=match$0[2],x=match$0[1];
               return bal(t,x,d,remove_min_binding(match))}
             return t}
           return match}
         function remove(x,m)
          {if(m)
            {var r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return _tU_(l,r);
             if(0 <= c){var rr=remove(x,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=remove(x,l);
             return l === ll?m:bal(ll,v,d,r)}
           return 0}
         function update(x,f,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {var match=caml_call1(f,[0,d]);
               if(match)
                {var data=match[1];return d === data?m:[0,l,x,data,r,h]}
               return _tU_(l,r)}
             if(0 <= c){var rr=update(x,f,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=update(x,f,l);
             return l === ll?m:bal(ll,v,d,r)}
           var match$0=caml_call1(f,0);
           if(match$0){var data$0=match$0[1];return [0,0,x,data$0,0,1]}
           return 0}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[4],d=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call2(f,v,d);
               var param$0=r;
               continue}
             return 0}}
         function map(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=map(f,l),
              d$0=caml_call1(f,d),
              r$0=map(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function mapi(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=mapi(f,l),
              d$0=caml_call2(f,v,d),
              r$0=mapi(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function fold(f,m,accu)
          {var m$0=m,accu$0=accu;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                accu$1=caml_call3(f,v,d,fold(f,l,accu$0)),
                m$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _uc_=caml_call2(p,v,d);
               if(_uc_)
                {var _ud_=for_all(p,l);
                 if(_ud_){var param$0=r;continue}
                 var _ue_=_ud_}
               else
                var _ue_=_uc_;
               return _ue_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _t$_=caml_call2(p,v,d);
               if(_t$_)
                var _ua_=_t$_;
               else
                {var _ub_=exists(p,l);
                 if(! _ub_){var param$0=r;continue}
                 var _ua_=_ub_}
               return _ua_}
             return 0}}
         function add_min_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(add_min_binding(k,x,l),v,d,r)}
           return singleton(k,x)}
         function add_max_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(l,v,d,add_max_binding(k,x,r))}
           return singleton(k,x)}
         function join(l,v,d,r)
          {if(l)
            {if(r)
              {var
                rh=r[5],
                rr=r[4],
                rd=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[5],
                lr=l[4],
                ld=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,ld,join(lr,v,d,r))
                       :(lh + 2 | 0) < rh
                         ?bal(join(l,v,d,rl),rv,rd,rr)
                         :create(l,v,d,r)}
             return add_max_binding(v,d,l)}
           return add_min_binding(v,d,r)}
         function concat(t,match)
          {if(t)
            {if(match)
              {var match$0=min_binding(match),d=match$0[2],x=match$0[1];
               return join(t,x,d,remove_min_binding(match))}
             return t}
           return match}
         function concat_or_join(t1,v,d,t2)
          {if(d){var d$0=d[1];return join(t1,v,d$0,t2)}return concat(t1,t2)}
         function split(x,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,[0,d],r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,d,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,d,r)]}
           return _M_}
         function merge(f,s1,s2)
          {if(s1)
            {var h1=s1[5],r1=s1[4],d1=s1[3],v1=s1[2],l1=s1[1];
             if(height(s2) <= h1)
              {var
                match=split(v1,s2),
                r2=match[3],
                d2=match[2],
                l2=match[1],
                _t7_=merge(f,r1,r2),
                _t8_=caml_call3(f,v1,[0,d1],d2);
               return concat_or_join(merge(f,l1,l2),v1,_t8_,_t7_)}}
           else
            if(! s2)return 0;
           if(s2)
            {var
              r2$0=s2[4],
              d2$0=s2[3],
              v2=s2[2],
              l2$0=s2[1],
              match$0=split(v2,s1),
              r1$0=match$0[3],
              d1$0=match$0[2],
              l1$0=match$0[1],
              _t9_=merge(f,r1$0,r2$0),
              _t__=caml_call3(f,v2,d1$0,[0,d2$0]);
             return concat_or_join(merge(f,l1$0,l2$0),v2,_t__,_t9_)}
           throw [0,Assert_failure,_N_]}
         function union(f,s1,s2)
          {if(s1)
            {if(s2)
              {var
                h2=s2[5],
                r2=s2[4],
                d2=s2[3],
                v2=s2[2],
                l2=s2[1],
                h1=s1[5],
                r1=s1[4],
                d1=s1[3],
                v1=s1[2],
                l1=s1[1];
               if(h2 <= h1)
                {var
                  match=split(v1,s2),
                  r2$0=match[3],
                  d2$0=match[2],
                  l2$0=match[1],
                  l=union(f,l1,l2$0),
                  r=union(f,r1,r2$0);
                 if(d2$0)
                  {var d2$1=d2$0[1];
                   return concat_or_join(l,v1,caml_call3(f,v1,d1,d2$1),r)}
                 return join(l,v1,d1,r)}
               var
                match$0=split(v2,s1),
                r1$0=match$0[3],
                d1$0=match$0[2],
                l1$0=match$0[1],
                l$0=union(f,l1$0,l2),
                r$0=union(f,r1$0,r2);
               if(d1$0)
                {var d1$1=d1$0[1];
                 return concat_or_join(l$0,v2,caml_call3(f,v2,d1$1,d2),r$0)}
               return join(l$0,v2,d2,r$0)}
             var s=s1}
           else
            var s=s2;
           return s}
         function filter(p,m)
          {if(m)
            {var
              r=m[4],
              d=m[3],
              v=m[2],
              l=m[1],
              l$0=filter(p,l),
              pvd=caml_call2(p,v,d),
              r$0=filter(p,r);
             if(pvd)
              {if(l === l$0)if(r === r$0)return m;return join(l$0,v,d,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pvd=caml_call2(p,v,d),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pvd){var _t5_=concat(lf,rf);return [0,join(lt,v,d,rt),_t5_]}
             var _t6_=join(lf,v,d,rf);
             return [0,concat(lt,rt),_t6_]}
           return _O_}
         function cons_enum(m,e)
          {var m$0=m,e$0=e;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                m$1=m$0[1],
                e$1=[0,v,d,r,e$0],
                m$0=m$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var c$0=caml_call2(cmp,d1,d2);
                   if(0 === c$0)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   return c$0}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  _t2_=0 === caml_call2(Ord[1],v1,v2)?1:0;
                 if(_t2_)
                  {var _t3_=caml_call2(cmp,d1,d2);
                   if(_t3_)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   var _t4_=_t3_}
                 else
                  var _t4_=_t2_;
                 return _t4_}
               return 0}
             return e2?0:1}}
         function cardinal(param)
          {if(param)
            {var r=param[4],l=param[1],_t1_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _t1_ | 0}
           return 0}
         function bindings_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,[0,v,d],bindings_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function bindings(s){return bindings_aux(0,s)}
         function add_seq(i,m)
          {return fold_left
                   (function(m,param)
                     {var v=param[2],k=param[1];return add(k,v,m)},
                    m,
                    i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[4],t=c[3],v=c[2],k=c[1],_tZ_=cons_enum(t,rest);
             return [0,[0,k,v],function(_t0_){return seq_of_enum(_tZ_,_t0_)}]}
           return 0}
         function to_seq(m)
          {var _tX_=cons_enum(m,0);
           return function(_tY_){return seq_of_enum(_tX_,_tY_)}}
         function to_seq_from(low,m)
          {var m$0=m,c=0;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,d,r,c],m$0=l,c=c$0;continue}
                 var m$0=r;
                 continue}
               var _tV_=[0,v,d,r,c]}
             else
              var _tV_=c;
             return function(_tW_){return seq_of_enum(_tV_,_tW_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 update,
                 singleton,
                 remove,
                 merge,
                 union,
                 compare,
                 equal,
                 iter,
                 fold,
                 for_all,
                 exists,
                 filter,
                 partition,
                 cardinal,
                 bindings,
                 min_binding,
                 min_binding_opt,
                 max_binding,
                 max_binding_opt,
                 min_binding,
                 min_binding_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 map,
                 mapi,
                 to_seq,
                 to_seq_from,
                 add_seq,
                 of_seq]}];
    caml_register_global(743,Stdlib_map,"Stdlib__map");
    var Empty=[248,cst_Stdlib_Stack_Empty,caml_fresh_oo_id(0)];
    function create$0(param){return [0,0,0]}
    function clear(s){s[1] = 0;s[2] = 0;return 0}
    function copy$3(s){return [0,s[1],s[2]]}
    function push(x,s){s[1] = [0,x,s[1]];s[2] = s[2] + 1 | 0;return 0}
    function pop(s)
     {var _tT_=s[1];
      if(_tT_)
       {var tl=_tT_[2],hd=_tT_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return hd}
      throw Empty}
    function pop_opt(s)
     {var _tS_=s[1];
      if(_tS_)
       {var tl=_tS_[2],hd=_tS_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return [0,hd]}
      return 0}
    function top(s)
     {var _tR_=s[1];if(_tR_){var hd=_tR_[1];return hd}throw Empty}
    function top_opt(s)
     {var _tQ_=s[1];if(_tQ_){var hd=_tQ_[1];return [0,hd]}return 0}
    function is_empty(s){return 0 === s[1]?1:0}
    function length$1(s){return s[2]}
    function iter$7(f,s){return iter$2(f,s[1])}
    function fold$1(f,acc,s){return fold_left$0(f,acc,s[1])}
    function to_seq$6(s){return to_seq$1(s[1])}
    function add_seq(q,i){return iter(function(x){return push(x,q)},i)}
    function of_seq$4(g){var s=create$0(0);add_seq(s,g);return s}
    var
     Stdlib_stack=
      [0,
       Empty,
       create$0,
       push,
       pop,
       pop_opt,
       top,
       top_opt,
       clear,
       copy$3,
       is_empty,
       length$1,
       iter$7,
       fold$1,
       to_seq$6,
       add_seq,
       of_seq$4];
    caml_register_global(744,Stdlib_stack,"Stdlib__stack");
    var Empty$0=[248,cst_Stdlib_Queue_Empty,caml_fresh_oo_id(0)];
    function create$1(param){return [0,0,0,0]}
    function clear$0(q){q[1] = 0;q[2] = 0;q[3] = 0;return 0}
    function add(x,q)
     {var cell=[0,x,0],_tP_=q[3];
      return _tP_
              ?(q[1] = q[1] + 1 | 0,_tP_[2] = cell,q[3] = cell,0)
              :(q[1] = 1,q[2] = cell,q[3] = cell,0)}
    function peek(q)
     {var _tO_=q[2];if(_tO_){var content=_tO_[1];return content}throw Empty$0}
    function peek_opt(q)
     {var _tN_=q[2];if(_tN_){var content=_tN_[1];return [0,content]}return 0}
    function take(q)
     {var _tK_=q[2];
      if(_tK_)
       {var _tL_=_tK_[1],_tM_=_tK_[2];
        return _tM_?(q[1] = q[1] - 1 | 0,q[2] = _tM_,_tL_):(clear$0(q),_tL_)}
      throw Empty$0}
    function take_opt(q)
     {var _tH_=q[2];
      if(_tH_)
       {var _tI_=_tH_[1],_tJ_=_tH_[2];
        return _tJ_
                ?(q[1] = q[1] - 1 | 0,q[2] = _tJ_,[0,_tI_])
                :(clear$0(q),[0,_tI_])}
      return 0}
    function copy$4(q)
     {var q_res=[0,q[1],0,0],prev=0,cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2],res=[0,content,0];
          if(prev)prev[2] = res;else q_res[2] = res;
          var prev=res,cell=next;
          continue}
        q_res[3] = prev;
        return q_res}}
    function is_empty$0(q){return 0 === q[1]?1:0}
    function length$2(q){return q[1]}
    function iter$8(f,q)
     {var cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2];
          caml_call1(f,content);
          var cell=next;
          continue}
        return 0}}
    function fold$2(f,accu$1,q)
     {var accu=accu$1,cell=q[2];
      for(;;)
       {if(cell)
         {var
           content=cell[1],
           next=cell[2],
           accu$0=caml_call2(f,accu,content),
           accu=accu$0,
           cell=next;
          continue}
        return accu}}
    function transfer(q1,q2)
     {var _tF_=0 < q1[1]?1:0;
      if(_tF_)
       {var _tG_=q2[3];
        return _tG_
                ?(q2[1]
                  =
                  q2[1]
                  +
                  q1[1]
                  |
                  0,
                  _tG_[2]
                  =
                  q1[2],
                  q2[3]
                  =
                  q1[3],
                  clear$0(q1))
                :(q2[1] = q1[1],q2[2] = q1[2],q2[3] = q1[3],clear$0(q1))}
      return _tF_}
    function to_seq$7(q)
     {function aux(c,param)
       {if(c)
         {var x=c[1],next=c[2];
          return [0,x,function(_tE_){return aux(next,_tE_)}]}
        return 0}
      var _tC_=q[2];
      return function(_tD_){return aux(_tC_,_tD_)}}
    function add_seq$0(q,i){return iter(function(x){return add(x,q)},i)}
    function of_seq$5(g){var q=create$1(0);add_seq$0(q,g);return q}
    var
     Stdlib_queue=
      [0,
       Empty$0,
       create$1,
       add,
       add,
       take,
       take_opt,
       take,
       peek,
       peek_opt,
       peek,
       clear$0,
       copy$4,
       is_empty$0,
       length$2,
       iter$8,
       fold$2,
       transfer,
       to_seq$7,
       add_seq$0,
       of_seq$5];
    caml_register_global(745,Stdlib_queue,"Stdlib__queue");
    var Undefined=[248,cst_CamlinternalLazy_Undefined,caml_fresh_oo_id(0)];
    function raise_undefined(param){throw Undefined}
    function force_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      try
       {var result=caml_call1(closure,0);
        blk[1] = result;
        caml_obj_set_tag(blk,250);
        return result}
      catch(e)
       {e = caml_wrap_exception(e);blk[1] = function(param){throw e};throw e}}
    function force_val_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      var result=caml_call1(closure,0);
      blk[1] = result;
      caml_obj_set_tag(blk,250);
      return result}
    function force(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_lazy_block(lzv)}
    function force_val(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_val_lazy_block(lzv)}
    var
     CamlinternalLazy=
      [0,Undefined,force_lazy_block,force_val_lazy_block,force,force_val];
    caml_register_global(746,CamlinternalLazy,"CamlinternalLazy");
    function from_fun(f){var x=caml_obj_block(246,1);x[1] = f;return x}
    function from_val(v)
     {var t=caml_obj_tag(v);
      if(t !== 250)if(t !== 246)if(t !== 253)return v;
      return runtime.caml_lazy_make_forward(v)}
    function is_val(l){return caml_obj_tag(l) !== 246?1:0}
    var
     Stdlib_lazy=
      [0,
       Undefined,
       force_val,
       from_fun,
       from_val,
       is_val,
       from_fun,
       from_val,
       is_val];
    caml_register_global(747,Stdlib_lazy,"Stdlib__lazy");
    var
     Failure$0=[248,cst_Stdlib_Stream_Failure,caml_fresh_oo_id(0)],
     Error=[248,cst_Stdlib_Stream_Error,caml_fresh_oo_id(0)];
    function count(param)
     {if(param){var match=param[1],count=match[1];return count}return 0}
    function data(param)
     {if(param){var match=param[1],data=match[2];return data}return 0}
    function fill_buff(b)
     {b[3] = input(b[1],b[2],0,caml_ml_bytes_length(b[2]));b[4] = 0;return 0}
    function get_data(count,d)
     {var d$0=d;
      for(;;)
       {if(typeof d$0 !== "number")
         switch(d$0[0])
          {case 1:
            var d2=d$0[2],d1=d$0[1],match=get_data(count,d1);
            if(typeof match === "number")
             {var d$0=d2;continue}
            else
             {if(0 === match[0])
               {var d11=match[2],a=match[1];return [0,a,[1,d11,d2]]}
              throw [0,Assert_failure,_P_]}
           case 2:
            var
             f=d$0[1],
             _ty_=caml_obj_tag(f),
             d$1=250 === _ty_?f[1]:246 === _ty_?force_lazy_block(f):f,
             d$0=d$1;
            continue;
           case 3:
            var _tz_=d$0[1],_tA_=_tz_[1];
            if(_tA_)
             {var _tB_=_tA_[1];
              if(_tB_){var a$0=_tB_[1];_tz_[1] = 0;return [0,a$0,d$0]}
              return 0}
            var match$0=caml_call1(_tz_[2],count);
            if(match$0){var a$1=match$0[1];return [0,a$1,d$0]}
            _tz_[1] = _Q_;
            return 0;
           case 4:
            var b=d$0[1];
            if(b[3] <= b[4])fill_buff(b);
            if(0 === b[3])return 0;
            var r=caml_bytes_unsafe_get(b[2],b[4]);
            b[4] = b[4] + 1 | 0;
            return [0,r,d$0]
           }
        return d$0}}
    function peek_data(s)
     {for(;;)
       {var _tt_=s[2];
        if(typeof _tt_ === "number")
         return 0;
        else
         switch(_tt_[0])
          {case 0:var a=_tt_[1];return [0,a];
           case 1:
            var d=get_data(s[1],s[2]);
            if(typeof d === "number")
             return 0;
            else
             {if(0 === d[0]){var a$0=d[1];s[2] = d;return [0,a$0]}
              throw [0,Assert_failure,_R_]}
           case 2:
            var
             f=_tt_[1],
             _tu_=caml_obj_tag(f),
             _tv_=250 === _tu_?f[1]:246 === _tu_?force_lazy_block(f):f;
            s[2] = _tv_;
            continue;
           case 3:
            var _tw_=_tt_[1],_tx_=_tw_[1];
            if(_tx_){var a$1=_tx_[1];return a$1}
            var x=caml_call1(_tw_[2],s[1]);
            _tw_[1] = [0,x];
            return x;
           default:
            var b=_tt_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :[0,caml_bytes_unsafe_get(b[2],b[4])]}}}
    function peek$0(param)
     {if(param){var s=param[1];return peek_data(s)}return 0}
    function junk_data(s)
     {for(;;)
       {var _tr_=s[2];
        if(typeof _tr_ !== "number")
         switch(_tr_[0])
          {case 0:var d=_tr_[2];s[1] = s[1] + 1 | 0;s[2] = d;return 0;
           case 3:
            var _ts_=_tr_[1];
            if(_ts_[1]){s[1] = s[1] + 1 | 0;_ts_[1] = 0;return 0}
            break;
           case 4:
            var b=_tr_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :(s[1] = s[1] + 1 | 0,b[4] = b[4] + 1 | 0,0)
           }
        var match=peek_data(s);
        if(match)continue;
        return 0}}
    function junk(param)
     {if(param){var data=param[1];return junk_data(data)}return 0}
    function nget_data(n,s)
     {if(0 < n)
       {var match=peek_data(s);
        if(match)
         {var a=match[1];
          junk_data(s);
          var
           match$0=nget_data(n - 1 | 0,s),
           k=match$0[3],
           d=match$0[2],
           al=match$0[1];
          return [0,[0,a,al],[0,a,d],k + 1 | 0]}
        return [0,0,s[2],0]}
      return [0,0,s[2],0]}
    function npeek(n,param)
     {if(param)
       {var
         d$0=param[1],
         match=nget_data(n,d$0),
         len=match[3],
         d=match[2],
         al=match[1];
        d$0[1] = d$0[1] - len | 0;
        d$0[2] = d;
        return al}
      return 0}
    function next(s)
     {var match=peek$0(s);
      if(match){var a=match[1];junk(s);return a}
      throw Failure$0}
    function empty$1(s){var match=peek$0(s);if(match)throw Failure$0;return 0}
    function iter$9(f,strm)
     {for(;;)
       {var match=peek$0(strm);
        if(match){var a=match[1];junk(strm);caml_call1(f,a);continue}
        return 0}}
    function from(f){return [0,[0,0,[3,[0,0,f]]]]}
    function of_list$1(l)
     {var _tq_=0;
      return [0,[0,0,fold_right(function(x,l){return [0,x,l]},l,_tq_)]]}
    function of_string$0(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_string_length(s)
                         ?(count[1]++,[0,caml_string_get(s,c)])
                         :0})}
    function of_bytes(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_bytes_length(s)
                         ?(count[1]++,[0,caml_bytes_get(s,c)])
                         :0})}
    function of_channel(ic)
     {return [0,[0,0,[4,[0,ic,caml_create_bytes(4096),0,0]]]]}
    function iapp(i,s){var _tp_=data(s);return [0,[0,0,[1,data(i),_tp_]]]}
    function icons(i,s){return [0,[0,0,[0,i,data(s)]]]}
    function ising(i){return [0,[0,0,[0,i,0]]]}
    function lapp(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_tn_)
                  {var _to_=data(s);return [1,data(caml_call1(f,0)),_to_]}]]]]}
    function lcons(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_tl_)
                  {var _tm_=data(s);return [0,caml_call1(f,0),_tm_]}]]]]}
    function lsing(f)
     {return [0,[0,0,[2,[246,function(_tk_){return [0,caml_call1(f,0),0]}]]]]}
    var sempty=0;
    function slazy(f)
     {return [0,[0,0,[2,[246,function(_tj_){return data(caml_call1(f,0))}]]]]}
    function dump(f,s)
     {print_string(cst_count);
      print_int(count(s));
      print_string(cst_data);
      dump_data(f,data(s));
      print_string(cst$6);
      return print_newline(0)}
    function dump_data(f,param)
     {if(typeof param === "number")
       return print_string(cst_Sempty);
      else
       switch(param[0])
        {case 0:
          var d=param[2],a=param[1];
          print_string(cst_Scons);
          caml_call1(f,a);
          print_string(cst$7);
          dump_data(f,d);
          return print_string(cst$8);
         case 1:
          var d2=param[2],d1=param[1];
          print_string(cst_Sapp);
          dump_data(f,d1);
          print_string(cst$9);
          dump_data(f,d2);
          return print_string(cst$10);
         case 2:return print_string(cst_Slazy);
         case 3:return print_string(cst_Sgen);
         default:return print_string(cst_Sbuffio)}}
    var
     Stdlib_stream=
      [0,
       Failure$0,
       Error,
       from,
       of_list$1,
       of_string$0,
       of_bytes,
       of_channel,
       iter$9,
       next,
       empty$1,
       peek$0,
       junk,
       count,
       npeek,
       iapp,
       icons,
       ising,
       lapp,
       lcons,
       lsing,
       sempty,
       slazy,
       dump];
    caml_register_global(748,Stdlib_stream,"Stdlib__stream");
    function create$2(n)
     {var
       n$0=1 <= n?n:1,
       n$1=max_string_length < n$0?max_string_length:n$0,
       s=caml_create_bytes(n$1);
      return [0,s,0,n$1,s]}
    function contents(b){return sub_string(b[1],0,b[2])}
    function to_bytes(b){return sub(b[1],0,b[2])}
    function sub$3(b,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((b[2] - len | 0) < ofs))return sub_string(b[1],ofs,len);
      return invalid_arg(cst_Buffer_sub)}
    function blit$3(src,srcoff,dst,dstoff,len)
     {if(0 <= len)
       if(0 <= srcoff)
        if(! ((src[2] - len | 0) < srcoff))
         if(0 <= dstoff)
          if(! ((caml_ml_bytes_length(dst) - len | 0) < dstoff))
           return caml_blit_bytes(src[1],srcoff,dst,dstoff,len);
      return invalid_arg(cst_Buffer_blit)}
    function nth$0(b,ofs)
     {if(0 <= ofs)if(! (b[2] <= ofs))return caml_bytes_unsafe_get(b[1],ofs);
      return invalid_arg(cst_Buffer_nth)}
    function length$3(b){return b[2]}
    function clear$1(b){b[2] = 0;return 0}
    function reset(b)
     {b[2] = 0;b[1] = b[4];b[3] = caml_ml_bytes_length(b[1]);return 0}
    function resize(b,more)
     {var len=b[3],new_len=[0,len];
      for(;;)
       {if(new_len[1] < (b[2] + more | 0))
         {new_len[1] = 2 * new_len[1] | 0;continue}
        if(max_string_length < new_len[1])
         if((b[2] + more | 0) <= max_string_length)
          new_len[1] = max_string_length;
         else
          failwith(cst_Buffer_add_cannot_grow_buffer);
        var new_buffer=caml_create_bytes(new_len[1]);
        blit(b[1],0,new_buffer,0,b[2]);
        b[1] = new_buffer;
        b[3] = new_len[1];
        return 0}}
    function add_char(b,c)
     {var pos=b[2];
      if(b[3] <= pos)resize(b,1);
      caml_bytes_unsafe_set(b[1],pos,c);
      b[2] = pos + 1 | 0;
      return 0}
    function add_utf_8_uchar(b,u)
     {if(0 <= u)
       {if(127 < u)
         {if(2047 < u)
           {if(65535 < u)
             {if(1114111 < u)throw [0,Assert_failure,_S_];
              var pos=b[2];
              if(b[3] < (pos + 4 | 0))resize(b,4);
              caml_bytes_unsafe_set(b[1],pos,240 | u >>> 18 | 0);
              caml_bytes_unsafe_set
               (b[1],pos + 1 | 0,128 | (u >>> 12 | 0) & 63);
              caml_bytes_unsafe_set(b[1],pos + 2 | 0,128 | (u >>> 6 | 0) & 63);
              caml_bytes_unsafe_set(b[1],pos + 3 | 0,128 | u & 63);
              b[2] = pos + 4 | 0;
              return 0}
            var pos$0=b[2];
            if(b[3] < (pos$0 + 3 | 0))resize(b,3);
            caml_bytes_unsafe_set(b[1],pos$0,224 | u >>> 12 | 0);
            caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,128 | (u >>> 6 | 0) & 63);
            caml_bytes_unsafe_set(b[1],pos$0 + 2 | 0,128 | u & 63);
            b[2] = pos$0 + 3 | 0;
            return 0}
          var pos$1=b[2];
          if(b[3] < (pos$1 + 2 | 0))resize(b,2);
          caml_bytes_unsafe_set(b[1],pos$1,192 | u >>> 6 | 0);
          caml_bytes_unsafe_set(b[1],pos$1 + 1 | 0,128 | u & 63);
          b[2] = pos$1 + 2 | 0;
          return 0}
        return add_char(b,u)}
      throw [0,Assert_failure,_T_]}
    function add_utf_16be_uchar(b,u)
     {if(0 <= u)
       {if(65535 < u)
         {if(1114111 < u)throw [0,Assert_failure,_U_];
          var
           u$0=u - 65536 | 0,
           hi=55296 | u$0 >>> 10 | 0,
           lo=56320 | u$0 & 1023,
           pos=b[2];
          if(b[3] < (pos + 4 | 0))resize(b,4);
          caml_bytes_unsafe_set(b[1],pos,hi >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 1 | 0,hi & 255);
          caml_bytes_unsafe_set(b[1],pos + 2 | 0,lo >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 3 | 0,lo & 255);
          b[2] = pos + 4 | 0;
          return 0}
        var pos$0=b[2];
        if(b[3] < (pos$0 + 2 | 0))resize(b,2);
        caml_bytes_unsafe_set(b[1],pos$0,u >>> 8 | 0);
        caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,u & 255);
        b[2] = pos$0 + 2 | 0;
        return 0}
      throw [0,Assert_failure,_V_]}
    function add_utf_16le_uchar(b,u)
     {if(0 <= u)
       {if(65535 < u)
         {if(1114111 < u)throw [0,Assert_failure,_W_];
          var
           u$0=u - 65536 | 0,
           hi=55296 | u$0 >>> 10 | 0,
           lo=56320 | u$0 & 1023,
           pos=b[2];
          if(b[3] < (pos + 4 | 0))resize(b,4);
          caml_bytes_unsafe_set(b[1],pos,hi & 255);
          caml_bytes_unsafe_set(b[1],pos + 1 | 0,hi >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 2 | 0,lo & 255);
          caml_bytes_unsafe_set(b[1],pos + 3 | 0,lo >>> 8 | 0);
          b[2] = pos + 4 | 0;
          return 0}
        var pos$0=b[2];
        if(b[3] < (pos$0 + 2 | 0))resize(b,2);
        caml_bytes_unsafe_set(b[1],pos$0,u & 255);
        caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,u >>> 8 | 0);
        b[2] = pos$0 + 2 | 0;
        return 0}
      throw [0,Assert_failure,_X_]}
    function add_substring(b,s,offset,len)
     {var _tg_=offset < 0?1:0;
      if(_tg_)
       var _th_=_tg_;
      else
       var
        _ti_=len < 0?1:0,
        _th_=_ti_ || ((caml_ml_string_length(s) - len | 0) < offset?1:0);
      if(_th_)invalid_arg(cst_Buffer_add_substring_add_subbytes);
      var new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      blit$0(s,offset,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_subbytes(b,s,offset,len)
     {return add_substring(b,caml_string_of_bytes(s),offset,len)}
    function add_string(b,s)
     {var len=caml_ml_string_length(s),new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      blit$0(s,0,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_bytes(b,s){return add_string(b,caml_string_of_bytes(s))}
    function add_buffer(b,bs){return add_subbytes(b,bs[1],0,bs[2])}
    function add_channel(b,ic,len$1)
     {var _te_=len$1 < 0?1:0,_tf_=_te_ || (max_string_length < len$1?1:0);
      if(_tf_)invalid_arg(cst_Buffer_add_channel);
      if(b[3] < (b[2] + len$1 | 0))resize(b,len$1);
      var len=len$1;
      for(;;)
       {var _td_=0 < len?1:0;
        if(_td_)
         {var n=input(ic,b[1],b[2],len);
          b[2] = b[2] + n | 0;
          if(0 === n)throw End_of_file;
          var len$0=len - n | 0,len=len$0;
          continue}
        return _td_}}
    function output_buffer(oc,b){return output(oc,b[1],0,b[2])}
    function add_substitute(b,f,s)
     {var lim$1=caml_ml_string_length(s),previous=32,i$7=0;
      for(;;)
       {if(i$7 < lim$1)
         {var current=caml_string_get(s,i$7);
          if(36 === current)
           {if(92 === previous)
             {add_char(b,current);
              var i$8=i$7 + 1 | 0,previous=32,i$7=i$8;
              continue}
            var start=i$7 + 1 | 0;
            if(lim$1 <= start)throw Not_found;
            var opening=caml_string_get(s,start);
            if(40 === opening)
             var switch$0=0;
            else
             if(123 === opening)
              var switch$0=0;
             else
              {var i$6=start + 1 | 0,lim$0=caml_ml_string_length(s),i$3=i$6;
               for(;;)
                {if(lim$0 <= i$3)
                  var stop=lim$0;
                 else
                  {var
                    match=caml_string_get(s,i$3),
                    switch$1=
                     91 <= match
                      ?97 <= match?123 <= match?0:1:95 === match?1:0
                      :58 <= match?65 <= match?1:0:48 <= match?1:0;
                   if(switch$1){var i$4=i$3 + 1 | 0,i$3=i$4;continue}
                   var stop=i$3}
                 var
                  match$0=[0,sub$0(s,start,stop - start | 0),stop],
                  switch$0=1;
                 break}}
            if(! switch$0)
             {var i$5=start + 1 | 0,k$2=0;
              if(40 === opening)
               var _tb_=41;
              else
               {if(123 !== opening)throw [0,Assert_failure,_Y_];var _tb_=125}
              var lim=caml_ml_string_length(s),k=k$2,i=i$5;
              for(;;)
               {if(lim <= i)throw Not_found;
                if(caml_string_get(s,i) === opening)
                 {var i$0=i + 1 | 0,k$0=k + 1 | 0,k=k$0,i=i$0;continue}
                if(caml_string_get(s,i) !== _tb_)
                 {var i$2=i + 1 | 0,i=i$2;continue}
                if(0 !== k)
                 {var i$1=i + 1 | 0,k$1=k - 1 | 0,k=k$1,i=i$1;continue}
                var
                 match$0=
                  [0,sub$0(s,i$5,(i - start | 0) - 1 | 0),i + 1 | 0];
                break}}
            var next_i=match$0[2],ident=match$0[1];
            add_string(b,caml_call1(f,ident));
            var previous=32,i$7=next_i;
            continue}
          if(92 === previous)
           {add_char(b,92);
            add_char(b,current);
            var i$9=i$7 + 1 | 0,previous=32,i$7=i$9;
            continue}
          if(92 === current)
           {var i$10=i$7 + 1 | 0,previous=current,i$7=i$10;continue}
          add_char(b,current);
          var i$11=i$7 + 1 | 0,previous=current,i$7=i$11;
          continue}
        var _tc_=92 === previous?1:0;
        return _tc_?add_char(b,previous):_tc_}}
    function truncate(b,len)
     {if(0 <= len)if(! (b[2] < len)){b[2] = len;return 0}
      return invalid_arg(cst_Buffer_truncate)}
    function to_seq$8(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_get(b[1],i),_s$_=i + 1 | 0;
        return [0,x,function(_ta_){return aux(_s$_,_ta_)}]}
      var _s9_=0;
      return function(_s__){return aux(_s9_,_s__)}}
    function to_seqi$3(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_get(b[1],i),_s7_=i + 1 | 0;
        return [0,[0,i,x],function(_s8_){return aux(_s7_,_s8_)}]}
      var _s5_=0;
      return function(_s6_){return aux(_s5_,_s6_)}}
    function add_seq$1(b,seq)
     {return iter(function(_s4_){return add_char(b,_s4_)},seq)}
    function of_seq$6(i){var b=create$2(32);add_seq$1(b,i);return b}
    function add_int8(b,x)
     {var new_position=b[2] + 1 | 0;
      if(b[3] < new_position)resize(b,1);
      caml_bytes_unsafe_set(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_ne(b,x)
     {var new_position=b[2] + 2 | 0;
      if(b[3] < new_position)resize(b,2);
      caml_bytes_set16(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int32_ne(b,x)
     {var new_position=b[2] + 4 | 0;
      if(b[3] < new_position)resize(b,4);
      caml_bytes_set32(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int64_ne(b,x)
     {var new_position=b[2] + 8 | 0;
      if(b[3] < new_position)resize(b,8);
      caml_bytes_set64(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_le(b,x){return add_int16_ne(b,x)}
    function add_int16_be(b,x)
     {var x$0=caml_bswap16(x);return add_int16_ne(b,x$0)}
    function add_int32_le(b,x){return add_int32_ne(b,x)}
    function add_int32_be(b,x)
     {var x$0=caml_int32_bswap(x);return add_int32_ne(b,x$0)}
    function add_int64_le(b,x){return add_int64_ne(b,x)}
    function add_int64_be(b,x)
     {var x$0=caml_int64_bswap(x);return add_int64_ne(b,x$0)}
    var
     Stdlib_buffer=
      [0,
       create$2,
       contents,
       to_bytes,
       sub$3,
       blit$3,
       nth$0,
       length$3,
       clear$1,
       reset,
       add_char,
       add_utf_8_uchar,
       add_utf_16le_uchar,
       add_utf_16be_uchar,
       add_string,
       add_bytes,
       add_substring,
       add_subbytes,
       add_substitute,
       add_buffer,
       add_channel,
       output_buffer,
       truncate,
       to_seq$8,
       to_seqi$3,
       add_seq$1,
       of_seq$6,
       add_int8,
       add_int8,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int32_ne,
       add_int32_be,
       add_int32_le,
       add_int64_ne,
       add_int64_be,
       add_int64_le];
    caml_register_global(749,Stdlib_buffer,"Stdlib__buffer");
    function create_char_set(param){return make(32,0)}
    function add_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return caml_bytes_set
              (char_set,
               str_ind,
               char_of_int(caml_bytes_get(char_set,str_ind) | mask))}
    function freeze_char_set(char_set){return to_string$1(char_set)}
    function rev_char_set(char_set)
     {var char_set$0=create_char_set(0),i=0;
      for(;;)
       {caml_bytes_set
         (char_set$0,i,char_of_int(caml_string_get(char_set,i) ^ 255));
        var _s3_=i + 1 | 0;
        if(31 !== i){var i=_s3_;continue}
        return caml_string_of_bytes(char_set$0)}}
    function is_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return 0 !== (caml_string_get(char_set,str_ind) & mask)?1:0}
    function pad_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return [0,1,width]}return 0}
    function param_format_of_ignored_format(ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:return [0,[0,fmt]];
         case 1:return [0,[1,fmt]];
         case 2:return [0,[19,fmt]];
         default:return [0,[22,fmt]]}
      else
       switch(ign[0])
        {case 0:var pad_opt=ign[1];return [0,[2,pad_of_pad_opt(pad_opt),fmt]];
         case 1:
          var pad_opt$0=ign[1];return [0,[3,pad_of_pad_opt(pad_opt$0),fmt]];
         case 2:
          var pad_opt$1=ign[2],iconv=ign[1];
          return [0,[4,iconv,pad_of_pad_opt(pad_opt$1),0,fmt]];
         case 3:
          var pad_opt$2=ign[2],iconv$0=ign[1];
          return [0,[5,iconv$0,pad_of_pad_opt(pad_opt$2),0,fmt]];
         case 4:
          var pad_opt$3=ign[2],iconv$1=ign[1];
          return [0,[6,iconv$1,pad_of_pad_opt(pad_opt$3),0,fmt]];
         case 5:
          var pad_opt$4=ign[2],iconv$2=ign[1];
          return [0,[7,iconv$2,pad_of_pad_opt(pad_opt$4),0,fmt]];
         case 6:
          var prec_opt=ign[2],pad_opt$5=ign[1];
          if(prec_opt)var ndec=prec_opt[1],_s2_=[0,ndec];else var _s2_=0;
          return [0,[8,0,pad_of_pad_opt(pad_opt$5),_s2_,fmt]];
         case 7:
          var pad_opt$6=ign[1];return [0,[9,pad_of_pad_opt(pad_opt$6),fmt]];
         case 8:
          var fmtty=ign[2],pad_opt$7=ign[1];
          return [0,[13,pad_opt$7,fmtty,fmt]];
         case 9:
          var fmtty$0=ign[2],pad_opt$8=ign[1];
          return [0,[14,pad_opt$8,fmtty$0,fmt]];
         case 10:
          var char_set=ign[2],width_opt=ign[1];
          return [0,[20,width_opt,char_set,fmt]];
         default:var counter=ign[1];return [0,[21,counter,fmt]]}}
    var default_float_precision=-6;
    function buffer_create(init_size)
     {return [0,0,caml_create_bytes(init_size)]}
    function buffer_check_size(buf,overhead)
     {var
       len=caml_ml_bytes_length(buf[2]),
       min_len=buf[1] + overhead | 0,
       _s0_=len < min_len?1:0;
      if(_s0_)
       {var
         new_len=max(len * 2 | 0,min_len),
         new_str=caml_create_bytes(new_len);
        blit(buf[2],0,new_str,0,len);
        buf[2] = new_str;
        var _s1_=0}
      else
       var _s1_=_s0_;
      return _s1_}
    function buffer_add_char(buf,c)
     {buffer_check_size(buf,1);
      caml_bytes_set(buf[2],buf[1],c);
      buf[1] = buf[1] + 1 | 0;
      return 0}
    function buffer_add_string(buf,s)
     {var str_len=caml_ml_string_length(s);
      buffer_check_size(buf,str_len);
      blit$0(s,0,buf[2],buf[1],str_len);
      buf[1] = buf[1] + str_len | 0;
      return 0}
    function buffer_contents(buf){return sub_string(buf[2],0,buf[1])}
    function char_of_iconv(iconv)
     {switch(iconv)
       {case 6:
        case 7:return 120;
        case 8:
        case 9:return 88;
        case 10:
        case 11:return 111;
        case 12:
        case 15:return 117;
        case 0:
        case 1:
        case 2:
        case 13:return 100;
        default:return 105}}
    function char_of_fconv(fconv)
     {switch(fconv)
       {case 15:return 70;
        case 0:
        case 1:
        case 2:return 102;
        case 3:
        case 4:
        case 5:return 101;
        case 6:
        case 7:
        case 8:return 69;
        case 9:
        case 10:
        case 11:return 103;
        case 12:
        case 13:
        case 14:return 71;
        case 16:
        case 17:
        case 18:return 104;
        default:return 72}}
    function bprint_padty(buf,padty)
     {switch(padty)
       {case 0:return buffer_add_char(buf,45);
        case 1:return 0;
        default:return buffer_add_char(buf,48)}}
    function bprint_ignored_flag(buf,ign_flag)
     {return ign_flag?buffer_add_char(buf,95):ign_flag}
    function bprint_pad_opt(buf,pad_opt)
     {if(pad_opt)
       {var width=pad_opt[1];
        return buffer_add_string(buf,caml_new_string("" + width))}
      return 0}
    function bprint_padding(buf,pad)
     {if(typeof pad === "number")
       return 0;
      else
       {if(0 === pad[0])
         {var n=pad[2],padty=pad[1];
          bprint_padty(buf,padty);
          return buffer_add_string(buf,caml_new_string("" + n))}
        var padty$0=pad[1];
        bprint_padty(buf,padty$0);
        return buffer_add_char(buf,42)}}
    function bprint_precision(buf,prec)
     {if(typeof prec === "number")
       return 0 === prec?0:buffer_add_string(buf,cst$11);
      var n=prec[1];
      buffer_add_char(buf,46);
      return buffer_add_string(buf,caml_new_string("" + n))}
    function bprint_iconv_flag(buf,iconv)
     {switch(iconv)
       {case 1:
        case 4:return buffer_add_char(buf,43);
        case 2:
        case 5:return buffer_add_char(buf,32);
        case 7:
        case 9:
        case 11:
        case 13:
        case 14:
        case 15:return buffer_add_char(buf,35);
        default:return 0}}
    function bprint_altint_fmt(buf,ign_flag,iconv,pad,prec,c)
     {buffer_add_char(buf,37);
      bprint_ignored_flag(buf,ign_flag);
      bprint_iconv_flag(buf,iconv);
      bprint_padding(buf,pad);
      bprint_precision(buf,prec);
      buffer_add_char(buf,c);
      return buffer_add_char(buf,char_of_iconv(iconv))}
    function bprint_fconv_flag(buf,fconv)
     {switch(fconv)
       {case 1:
        case 4:
        case 7:
        case 10:
        case 13:
        case 17:
        case 20:return buffer_add_char(buf,43);
        case 2:
        case 5:
        case 8:
        case 11:
        case 14:
        case 18:
        case 21:return buffer_add_char(buf,32);
        default:return 0}}
    function string_of_formatting_lit(formatting_lit)
     {if(typeof formatting_lit === "number")
       switch(formatting_lit)
        {case 0:return cst$12;
         case 1:return cst$13;
         case 2:return cst$14;
         case 3:return cst$15;
         case 4:return cst$16;
         case 5:return cst$17;
         default:return cst$18}
      else
       switch(formatting_lit[0])
        {case 0:var str=formatting_lit[1];return str;
         case 1:var str$0=formatting_lit[1];return str$0;
         default:var c=formatting_lit[1];return symbol(cst$19,make$0(1,c))}}
    function string_of_formatting_gen(formatting_gen)
     {if(0 === formatting_gen[0])
       {var match=formatting_gen[1],str=match[2];return str}
      var match$0=formatting_gen[1],str$0=match$0[2];
      return str$0}
    function bprint_char_literal(buf,chr)
     {return 37 === chr?buffer_add_string(buf,cst$20):buffer_add_char(buf,chr)}
    function bprint_string_literal(buf,str)
     {var _sY_=caml_ml_string_length(str) - 1 | 0,_sX_=0;
      if(! (_sY_ < 0))
       {var i=_sX_;
        for(;;)
         {bprint_char_literal(buf,caml_string_get(str,i));
          var _sZ_=i + 1 | 0;
          if(_sY_ !== i){var i=_sZ_;continue}
          break}}
      return 0}
    function bprint_fmtty(buf,fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:
           var rest=fmtty$0[1];
           buffer_add_string(buf,cst_c);
           var fmtty$0=rest;
           continue;
          case 1:
           var rest$0=fmtty$0[1];
           buffer_add_string(buf,cst_s);
           var fmtty$0=rest$0;
           continue;
          case 2:
           var rest$1=fmtty$0[1];
           buffer_add_string(buf,cst_i);
           var fmtty$0=rest$1;
           continue;
          case 3:
           var rest$2=fmtty$0[1];
           buffer_add_string(buf,cst_li);
           var fmtty$0=rest$2;
           continue;
          case 4:
           var rest$3=fmtty$0[1];
           buffer_add_string(buf,cst_ni);
           var fmtty$0=rest$3;
           continue;
          case 5:
           var rest$4=fmtty$0[1];
           buffer_add_string(buf,cst_Li);
           var fmtty$0=rest$4;
           continue;
          case 6:
           var rest$5=fmtty$0[1];
           buffer_add_string(buf,cst_f);
           var fmtty$0=rest$5;
           continue;
          case 7:
           var rest$6=fmtty$0[1];
           buffer_add_string(buf,cst_B);
           var fmtty$0=rest$6;
           continue;
          case 8:
           var rest$7=fmtty$0[2],sub_fmtty=fmtty$0[1];
           buffer_add_string(buf,cst$21);
           bprint_fmtty(buf,sub_fmtty);
           buffer_add_string(buf,cst$22);
           var fmtty$0=rest$7;
           continue;
          case 9:
           var rest$8=fmtty$0[3],sub_fmtty$0=fmtty$0[1];
           buffer_add_string(buf,cst$23);
           bprint_fmtty(buf,sub_fmtty$0);
           buffer_add_string(buf,cst$24);
           var fmtty$0=rest$8;
           continue;
          case 10:
           var rest$9=fmtty$0[1];
           buffer_add_string(buf,cst_a);
           var fmtty$0=rest$9;
           continue;
          case 11:
           var rest$10=fmtty$0[1];
           buffer_add_string(buf,cst_t$0);
           var fmtty$0=rest$10;
           continue;
          case 12:
           var rest$11=fmtty$0[1];
           buffer_add_string(buf,cst$25);
           var fmtty$0=rest$11;
           continue;
          case 13:
           var rest$12=fmtty$0[1];
           buffer_add_string(buf,cst_r$0);
           var fmtty$0=rest$12;
           continue;
          default:
           var rest$13=fmtty$0[1];
           buffer_add_string(buf,cst_r$1);
           var fmtty$0=rest$13;
           continue}}
    function int_of_custom_arity(param)
     {if(param){var x=param[1];return 1 + int_of_custom_arity(x) | 0}return 0}
    function string_of_fmt(fmt$1)
     {var buf=buffer_create(16),fmt=fmt$1,ign_flag=0;
      a:
      for(;;)
       if(typeof fmt === "number")
        return buffer_contents(buf);
       else
        switch(fmt[0])
         {case 0:
           var rest=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,99);
           var fmt=rest,ign_flag=0;
           continue;
          case 1:
           var rest$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,67);
           var fmt=rest$0,ign_flag=0;
           continue;
          case 2:
           var rest$1=fmt[2],pad=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad);
           buffer_add_char(buf,115);
           var fmt=rest$1,ign_flag=0;
           continue;
          case 3:
           var rest$2=fmt[2],pad$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad$0);
           buffer_add_char(buf,83);
           var fmt=rest$2,ign_flag=0;
           continue;
          case 4:
           var rest$3=fmt[4],prec=fmt[3],pad$1=fmt[2],iconv=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_iconv_flag(buf,iconv);
           bprint_padding(buf,pad$1);
           bprint_precision(buf,prec);
           buffer_add_char(buf,char_of_iconv(iconv));
           var fmt=rest$3,ign_flag=0;
           continue;
          case 5:
           var rest$4=fmt[4],prec$0=fmt[3],pad$2=fmt[2],iconv$0=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$0,pad$2,prec$0,108);
           var fmt=rest$4,ign_flag=0;
           continue;
          case 6:
           var rest$5=fmt[4],prec$1=fmt[3],pad$3=fmt[2],iconv$1=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$1,pad$3,prec$1,110);
           var fmt=rest$5,ign_flag=0;
           continue;
          case 7:
           var rest$6=fmt[4],prec$2=fmt[3],pad$4=fmt[2],iconv$2=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$2,pad$4,prec$2,76);
           var fmt=rest$6,ign_flag=0;
           continue;
          case 8:
           var rest$7=fmt[4],prec$3=fmt[3],pad$5=fmt[2],fconv=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_fconv_flag(buf,fconv);
           bprint_padding(buf,pad$5);
           bprint_precision(buf,prec$3);
           buffer_add_char(buf,char_of_fconv(fconv));
           var fmt=rest$7,ign_flag=0;
           continue;
          case 9:
           var rest$8=fmt[2],pad$6=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad$6);
           buffer_add_char(buf,66);
           var fmt=rest$8,ign_flag=0;
           continue;
          case 10:
           var rest$9=fmt[1];
           buffer_add_string(buf,cst$26);
           var fmt=rest$9;
           continue;
          case 11:
           var rest$10=fmt[2],str=fmt[1];
           bprint_string_literal(buf,str);
           var fmt=rest$10;
           continue;
          case 12:
           var rest$11=fmt[2],chr$0=fmt[1];
           bprint_char_literal(buf,chr$0);
           var fmt=rest$11;
           continue;
          case 13:
           var rest$12=fmt[3],fmtty=fmt[2],pad_opt=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,pad_opt);
           buffer_add_char(buf,123);
           bprint_fmtty(buf,fmtty);
           buffer_add_char(buf,37);
           buffer_add_char(buf,125);
           var fmt=rest$12,ign_flag=0;
           continue;
          case 14:
           var rest$13=fmt[3],fmtty$0=fmt[2],pad_opt$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,pad_opt$0);
           buffer_add_char(buf,40);
           bprint_fmtty(buf,fmtty$0);
           buffer_add_char(buf,37);
           buffer_add_char(buf,41);
           var fmt=rest$13,ign_flag=0;
           continue;
          case 15:
           var rest$14=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,97);
           var fmt=rest$14,ign_flag=0;
           continue;
          case 16:
           var rest$15=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,116);
           var fmt=rest$15,ign_flag=0;
           continue;
          case 17:
           var rest$16=fmt[2],fmting_lit=fmt[1];
           bprint_string_literal(buf,string_of_formatting_lit(fmting_lit));
           var fmt=rest$16;
           continue;
          case 18:
           var rest$17=fmt[2],fmting_gen=fmt[1];
           bprint_string_literal(buf,cst$27);
           bprint_string_literal(buf,string_of_formatting_gen(fmting_gen));
           var fmt=rest$17;
           continue;
          case 19:
           var rest$18=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,114);
           var fmt=rest$18,ign_flag=0;
           continue;
          case 20:
           var rest$19=fmt[3],char_set=fmt[2],width_opt=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,width_opt);
           var
            print_char=
             function(buf,i)
              {var c=char_of_int(i);
               return 37 === c
                       ?(buffer_add_char(buf,37),buffer_add_char(buf,37))
                       :64 === c
                         ?(buffer_add_char(buf,37),buffer_add_char(buf,64))
                         :buffer_add_char(buf,c)};
           buffer_add_char(buf,91);
           var
            _sN_=
             is_in_char_set(char_set,0)
              ?(buffer_add_char(buf,94),rev_char_set(char_set))
              :char_set,
            is_alone$0=
             function(_sS_)
              {function is_alone(c)
                {var
                  after=chr(c + 1 | 0),
                  before=chr(c - 1 | 0),
                  _sT_=is_in_char_set(_sS_,c);
                 if(_sT_)
                  var
                   _sU_=is_in_char_set(_sS_,before),
                   _sV_=_sU_?is_in_char_set(_sS_,after):_sU_,
                   _sW_=1 - _sV_;
                 else
                  var _sW_=_sT_;
                 return _sW_}
               return is_alone},
            is_alone=is_alone$0(_sN_);
           if(is_alone(93))buffer_add_char(buf,93);
           var i=1;
           b:
           for(;;)
            {if(i < 256)
              {if(! is_in_char_set(_sN_,char_of_int(i)))
                {var i$0=i + 1 | 0,i=i$0;continue}
               var match=char_of_int(i),switcher=match - 45 | 0;
               if(48 < switcher >>> 0)
                var switch$0=210 <= switcher?(print_char(buf,255),1):0;
               else
                {var switcher$0=switcher - 1 | 0;
                 if(46 < switcher$0 >>> 0){var i$2=i + 1 | 0,i=i$2;continue}
                 var switch$0=0}
               if(! switch$0)
                {var i$1=i + 1 | 0;
                 if(! is_in_char_set(_sN_,char_of_int(i$1)))
                  {print_char(buf,i$1 - 1 | 0);
                   var i$6=i$1 + 1 | 0,i=i$6;
                   continue}
                 var match$0=char_of_int(i$1),switcher$1=match$0 - 45 | 0;
                 if(48 < switcher$1 >>> 0)
                  var
                   switch$1=
                    210 <= switcher$1
                     ?(print_char(buf,254),print_char(buf,255),1)
                     :0;
                 else
                  {var switcher$2=switcher$1 - 1 | 0;
                   if(46 < switcher$2 >>> 0)
                    {if(! is_in_char_set(_sN_,char_of_int(i$1 + 1 | 0)))
                      {print_char(buf,i$1 - 1 | 0);
                       var i$5=i$1 + 1 | 0,i=i$5;
                       continue}
                     var switch$1=0}
                   else
                    var switch$1=0}
                 if(! switch$1)
                  {if(! is_in_char_set(_sN_,char_of_int(i$1 + 1 | 0)))
                    {print_char(buf,i$1 - 1 | 0);
                     print_char(buf,i$1);
                     var i$4=i$1 + 2 | 0,i=i$4;
                     continue}
                   var j=i$1 + 2 | 0,i$3=i$1 - 1 | 0,j$0=j;
                   for(;;)
                    {if(256 !== j$0)
                      if(is_in_char_set(_sN_,char_of_int(j$0)))
                       {var j$1=j$0 + 1 | 0,j$0=j$1;continue}
                     print_char(buf,i$3);
                     print_char(buf,45);
                     print_char(buf,j$0 - 1 | 0);
                     if(j$0 < 256){var i$7=j$0 + 1 | 0,i=i$7;continue b}
                     break}}}}
             if(is_alone(45))buffer_add_char(buf,45);
             buffer_add_char(buf,93);
             var fmt=rest$19,ign_flag=0;
             continue a}
          case 21:
           var rest$20=fmt[2],counter=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           switch(counter)
            {case 0:var _sO_=108;break;
             case 1:var _sO_=110;break;
             default:var _sO_=78}
           buffer_add_char(buf,_sO_);
           var fmt=rest$20,ign_flag=0;
           continue;
          case 22:
           var rest$21=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_string_literal(buf,cst_0c);
           var fmt=rest$21,ign_flag=0;
           continue;
          case 23:
           var
            rest$22=fmt[2],
            ign=fmt[1],
            match$1=param_format_of_ignored_format(ign,rest$22),
            fmt$0=match$1[1],
            fmt=fmt$0,
            ign_flag=1;
           continue;
          default:
           var
            rest$23=fmt[3],
            arity=fmt[1],
            _sQ_=int_of_custom_arity(arity),
            _sP_=1;
           if(! (_sQ_ < 1))
            {var i$8=_sP_;
             for(;;)
              {buffer_add_char(buf,37);
               bprint_ignored_flag(buf,ign_flag);
               buffer_add_char(buf,63);
               var _sR_=i$8 + 1 | 0;
               if(_sQ_ !== i$8){var i$8=_sR_;continue}
               break}}
           var fmt=rest$23,ign_flag=0;
           continue}}
    function symm(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,symm(rest)];
         case 1:var rest$0=param[1];return [1,symm(rest$0)];
         case 2:var rest$1=param[1];return [2,symm(rest$1)];
         case 3:var rest$2=param[1];return [3,symm(rest$2)];
         case 4:var rest$3=param[1];return [4,symm(rest$3)];
         case 5:var rest$4=param[1];return [5,symm(rest$4)];
         case 6:var rest$5=param[1];return [6,symm(rest$5)];
         case 7:var rest$6=param[1];return [7,symm(rest$6)];
         case 8:var rest$7=param[2],ty=param[1];return [8,ty,symm(rest$7)];
         case 9:
          var rest$8=param[3],ty2=param[2],ty1=param[1];
          return [9,ty2,ty1,symm(rest$8)];
         case 10:var rest$9=param[1];return [10,symm(rest$9)];
         case 11:var rest$10=param[1];return [11,symm(rest$10)];
         case 12:var rest$11=param[1];return [12,symm(rest$11)];
         case 13:var rest$12=param[1];return [13,symm(rest$12)];
         default:var rest$13=param[1];return [14,symm(rest$13)]}}
    function fmtty_rel_det(param)
     {if(typeof param === "number")
       {var
         _sp_=function(param){return 0},
         _sq_=function(param){return 0},
         _sr_=function(param){return 0};
        return [0,function(param){return 0},_sr_,_sq_,_sp_]}
      else
       switch(param[0])
        {case 0:
          var
           rest=param[1],
           match=fmtty_rel_det(rest),
           de=match[4],
           ed=match[3],
           af=match[2],
           fa=match[1],
           _ss_=function(param){caml_call1(af,0);return 0};
          return [0,function(param){caml_call1(fa,0);return 0},_ss_,ed,de];
         case 1:
          var
           rest$0=param[1],
           match$0=fmtty_rel_det(rest$0),
           de$0=match$0[4],
           ed$0=match$0[3],
           af$0=match$0[2],
           fa$0=match$0[1],
           _st_=function(param){caml_call1(af$0,0);return 0};
          return [0,
                  function(param){caml_call1(fa$0,0);return 0},
                  _st_,
                  ed$0,
                  de$0];
         case 2:
          var
           rest$1=param[1],
           match$1=fmtty_rel_det(rest$1),
           de$1=match$1[4],
           ed$1=match$1[3],
           af$1=match$1[2],
           fa$1=match$1[1],
           _su_=function(param){caml_call1(af$1,0);return 0};
          return [0,
                  function(param){caml_call1(fa$1,0);return 0},
                  _su_,
                  ed$1,
                  de$1];
         case 3:
          var
           rest$2=param[1],
           match$2=fmtty_rel_det(rest$2),
           de$2=match$2[4],
           ed$2=match$2[3],
           af$2=match$2[2],
           fa$2=match$2[1],
           _sv_=function(param){caml_call1(af$2,0);return 0};
          return [0,
                  function(param){caml_call1(fa$2,0);return 0},
                  _sv_,
                  ed$2,
                  de$2];
         case 4:
          var
           rest$3=param[1],
           match$3=fmtty_rel_det(rest$3),
           de$3=match$3[4],
           ed$3=match$3[3],
           af$3=match$3[2],
           fa$3=match$3[1],
           _sw_=function(param){caml_call1(af$3,0);return 0};
          return [0,
                  function(param){caml_call1(fa$3,0);return 0},
                  _sw_,
                  ed$3,
                  de$3];
         case 5:
          var
           rest$4=param[1],
           match$4=fmtty_rel_det(rest$4),
           de$4=match$4[4],
           ed$4=match$4[3],
           af$4=match$4[2],
           fa$4=match$4[1],
           _sx_=function(param){caml_call1(af$4,0);return 0};
          return [0,
                  function(param){caml_call1(fa$4,0);return 0},
                  _sx_,
                  ed$4,
                  de$4];
         case 6:
          var
           rest$5=param[1],
           match$5=fmtty_rel_det(rest$5),
           de$5=match$5[4],
           ed$5=match$5[3],
           af$5=match$5[2],
           fa$5=match$5[1],
           _sy_=function(param){caml_call1(af$5,0);return 0};
          return [0,
                  function(param){caml_call1(fa$5,0);return 0},
                  _sy_,
                  ed$5,
                  de$5];
         case 7:
          var
           rest$6=param[1],
           match$6=fmtty_rel_det(rest$6),
           de$6=match$6[4],
           ed$6=match$6[3],
           af$6=match$6[2],
           fa$6=match$6[1],
           _sz_=function(param){caml_call1(af$6,0);return 0};
          return [0,
                  function(param){caml_call1(fa$6,0);return 0},
                  _sz_,
                  ed$6,
                  de$6];
         case 8:
          var
           rest$7=param[2],
           match$7=fmtty_rel_det(rest$7),
           de$7=match$7[4],
           ed$7=match$7[3],
           af$7=match$7[2],
           fa$7=match$7[1],
           _sA_=function(param){caml_call1(af$7,0);return 0};
          return [0,
                  function(param){caml_call1(fa$7,0);return 0},
                  _sA_,
                  ed$7,
                  de$7];
         case 9:
          var
           rest$8=param[3],
           ty2=param[2],
           ty1=param[1],
           match$8=fmtty_rel_det(rest$8),
           de$8=match$8[4],
           ed$8=match$8[3],
           af$8=match$8[2],
           fa$8=match$8[1],
           ty=trans(symm(ty1),ty2),
           match$9=fmtty_rel_det(ty),
           jd=match$9[4],
           dj=match$9[3],
           ga=match$9[2],
           ag=match$9[1],
           _sB_=function(param){caml_call1(jd,0);caml_call1(de$8,0);return 0},
           _sC_=function(param){caml_call1(ed$8,0);caml_call1(dj,0);return 0},
           _sD_=function(param){caml_call1(ga,0);caml_call1(af$8,0);return 0};
          return [0,
                  function(param)
                   {caml_call1(fa$8,0);caml_call1(ag,0);return 0},
                  _sD_,
                  _sC_,
                  _sB_];
         case 10:
          var
           rest$9=param[1],
           match$10=fmtty_rel_det(rest$9),
           de$9=match$10[4],
           ed$9=match$10[3],
           af$9=match$10[2],
           fa$9=match$10[1],
           _sE_=function(param){caml_call1(af$9,0);return 0};
          return [0,
                  function(param){caml_call1(fa$9,0);return 0},
                  _sE_,
                  ed$9,
                  de$9];
         case 11:
          var
           rest$10=param[1],
           match$11=fmtty_rel_det(rest$10),
           de$10=match$11[4],
           ed$10=match$11[3],
           af$10=match$11[2],
           fa$10=match$11[1],
           _sF_=function(param){caml_call1(af$10,0);return 0};
          return [0,
                  function(param){caml_call1(fa$10,0);return 0},
                  _sF_,
                  ed$10,
                  de$10];
         case 12:
          var
           rest$11=param[1],
           match$12=fmtty_rel_det(rest$11),
           de$11=match$12[4],
           ed$11=match$12[3],
           af$11=match$12[2],
           fa$11=match$12[1],
           _sG_=function(param){caml_call1(af$11,0);return 0};
          return [0,
                  function(param){caml_call1(fa$11,0);return 0},
                  _sG_,
                  ed$11,
                  de$11];
         case 13:
          var
           rest$12=param[1],
           match$13=fmtty_rel_det(rest$12),
           de$12=match$13[4],
           ed$12=match$13[3],
           af$12=match$13[2],
           fa$12=match$13[1],
           _sH_=function(param){caml_call1(de$12,0);return 0},
           _sI_=function(param){caml_call1(ed$12,0);return 0},
           _sJ_=function(param){caml_call1(af$12,0);return 0};
          return [0,
                  function(param){caml_call1(fa$12,0);return 0},
                  _sJ_,
                  _sI_,
                  _sH_];
         default:
          var
           rest$13=param[1],
           match$14=fmtty_rel_det(rest$13),
           de$13=match$14[4],
           ed$13=match$14[3],
           af$13=match$14[2],
           fa$13=match$14[1],
           _sK_=function(param){caml_call1(de$13,0);return 0},
           _sL_=function(param){caml_call1(ed$13,0);return 0},
           _sM_=function(param){caml_call1(af$13,0);return 0};
          return [0,
                  function(param){caml_call1(fa$13,0);return 0},
                  _sM_,
                  _sL_,
                  _sK_]}}
    function trans(ty1,match)
     {if(typeof ty1 === "number")
       if(typeof match === "number")
        return 0;
       else
        switch(match[0])
         {case 10:var switch$0=0;break;
          case 11:var switch$0=1;break;
          case 12:var switch$0=2;break;
          case 13:var switch$0=3;break;
          case 14:var switch$0=4;break;
          case 8:var switch$0=5;break;
          case 9:var switch$0=6;break;
          default:throw [0,Assert_failure,_Z_]}
      else
       switch(ty1[0])
        {case 0:
          var _r8_=ty1[1];
          if(typeof match === "number")
           var switch$1=1;
          else
           switch(match[0])
            {case 0:var rest2=match[1];return [0,trans(_r8_,rest2)];
             case 8:var switch$0=5,switch$1=0;break;
             case 9:var switch$0=6,switch$1=0;break;
             case 10:var switch$0=0,switch$1=0;break;
             case 11:var switch$0=1,switch$1=0;break;
             case 12:var switch$0=2,switch$1=0;break;
             case 13:var switch$0=3,switch$1=0;break;
             case 14:var switch$0=4,switch$1=0;break;
             default:var switch$1=1}
          if(switch$1)var switch$0=7;
          break;
         case 1:
          var _r9_=ty1[1];
          if(typeof match === "number")
           var switch$2=1;
          else
           switch(match[0])
            {case 1:var rest2$0=match[1];return [1,trans(_r9_,rest2$0)];
             case 8:var switch$0=5,switch$2=0;break;
             case 9:var switch$0=6,switch$2=0;break;
             case 10:var switch$0=0,switch$2=0;break;
             case 11:var switch$0=1,switch$2=0;break;
             case 12:var switch$0=2,switch$2=0;break;
             case 13:var switch$0=3,switch$2=0;break;
             case 14:var switch$0=4,switch$2=0;break;
             default:var switch$2=1}
          if(switch$2)var switch$0=7;
          break;
         case 2:
          var _r__=ty1[1];
          if(typeof match === "number")
           var switch$3=1;
          else
           switch(match[0])
            {case 2:var rest2$1=match[1];return [2,trans(_r__,rest2$1)];
             case 8:var switch$0=5,switch$3=0;break;
             case 9:var switch$0=6,switch$3=0;break;
             case 10:var switch$0=0,switch$3=0;break;
             case 11:var switch$0=1,switch$3=0;break;
             case 12:var switch$0=2,switch$3=0;break;
             case 13:var switch$0=3,switch$3=0;break;
             case 14:var switch$0=4,switch$3=0;break;
             default:var switch$3=1}
          if(switch$3)var switch$0=7;
          break;
         case 3:
          var _r$_=ty1[1];
          if(typeof match === "number")
           var switch$4=1;
          else
           switch(match[0])
            {case 3:var rest2$2=match[1];return [3,trans(_r$_,rest2$2)];
             case 8:var switch$0=5,switch$4=0;break;
             case 9:var switch$0=6,switch$4=0;break;
             case 10:var switch$0=0,switch$4=0;break;
             case 11:var switch$0=1,switch$4=0;break;
             case 12:var switch$0=2,switch$4=0;break;
             case 13:var switch$0=3,switch$4=0;break;
             case 14:var switch$0=4,switch$4=0;break;
             default:var switch$4=1}
          if(switch$4)var switch$0=7;
          break;
         case 4:
          var _sa_=ty1[1];
          if(typeof match === "number")
           var switch$5=1;
          else
           switch(match[0])
            {case 4:var rest2$3=match[1];return [4,trans(_sa_,rest2$3)];
             case 8:var switch$0=5,switch$5=0;break;
             case 9:var switch$0=6,switch$5=0;break;
             case 10:var switch$0=0,switch$5=0;break;
             case 11:var switch$0=1,switch$5=0;break;
             case 12:var switch$0=2,switch$5=0;break;
             case 13:var switch$0=3,switch$5=0;break;
             case 14:var switch$0=4,switch$5=0;break;
             default:var switch$5=1}
          if(switch$5)var switch$0=7;
          break;
         case 5:
          var _sb_=ty1[1];
          if(typeof match === "number")
           var switch$6=1;
          else
           switch(match[0])
            {case 5:var rest2$4=match[1];return [5,trans(_sb_,rest2$4)];
             case 8:var switch$0=5,switch$6=0;break;
             case 9:var switch$0=6,switch$6=0;break;
             case 10:var switch$0=0,switch$6=0;break;
             case 11:var switch$0=1,switch$6=0;break;
             case 12:var switch$0=2,switch$6=0;break;
             case 13:var switch$0=3,switch$6=0;break;
             case 14:var switch$0=4,switch$6=0;break;
             default:var switch$6=1}
          if(switch$6)var switch$0=7;
          break;
         case 6:
          var _sc_=ty1[1];
          if(typeof match === "number")
           var switch$7=1;
          else
           switch(match[0])
            {case 6:var rest2$5=match[1];return [6,trans(_sc_,rest2$5)];
             case 8:var switch$0=5,switch$7=0;break;
             case 9:var switch$0=6,switch$7=0;break;
             case 10:var switch$0=0,switch$7=0;break;
             case 11:var switch$0=1,switch$7=0;break;
             case 12:var switch$0=2,switch$7=0;break;
             case 13:var switch$0=3,switch$7=0;break;
             case 14:var switch$0=4,switch$7=0;break;
             default:var switch$7=1}
          if(switch$7)var switch$0=7;
          break;
         case 7:
          var _sd_=ty1[1];
          if(typeof match === "number")
           var switch$8=1;
          else
           switch(match[0])
            {case 7:var rest2$6=match[1];return [7,trans(_sd_,rest2$6)];
             case 8:var switch$0=5,switch$8=0;break;
             case 9:var switch$0=6,switch$8=0;break;
             case 10:var switch$0=0,switch$8=0;break;
             case 11:var switch$0=1,switch$8=0;break;
             case 12:var switch$0=2,switch$8=0;break;
             case 13:var switch$0=3,switch$8=0;break;
             case 14:var switch$0=4,switch$8=0;break;
             default:var switch$8=1}
          if(switch$8)var switch$0=7;
          break;
         case 8:
          var _se_=ty1[2],_sf_=ty1[1];
          if(typeof match === "number")
           var switch$9=1;
          else
           switch(match[0])
            {case 8:
              var rest2$7=match[2],ty2=match[1],_sg_=trans(_se_,rest2$7);
              return [8,trans(_sf_,ty2),_sg_];
             case 10:var switch$0=0,switch$9=0;break;
             case 11:var switch$0=1,switch$9=0;break;
             case 12:var switch$0=2,switch$9=0;break;
             case 13:var switch$0=3,switch$9=0;break;
             case 14:var switch$0=4,switch$9=0;break;
             default:var switch$9=1}
          if(switch$9)throw [0,Assert_failure,_ag_];
          break;
         case 9:
          var _sh_=ty1[3],_si_=ty1[2],_sj_=ty1[1];
          if(typeof match === "number")
           var switch$10=1;
          else
           switch(match[0])
            {case 8:var switch$0=5,switch$10=0;break;
             case 9:
              var
               rest2$8=match[3],
               ty22=match[2],
               ty21=match[1],
               ty=trans(symm(_si_),ty21),
               match$0=fmtty_rel_det(ty),
               f4=match$0[4],
               f2=match$0[2];
              caml_call1(f2,0);
              caml_call1(f4,0);
              return [9,_sj_,ty22,trans(_sh_,rest2$8)];
             case 10:var switch$0=0,switch$10=0;break;
             case 11:var switch$0=1,switch$10=0;break;
             case 12:var switch$0=2,switch$10=0;break;
             case 13:var switch$0=3,switch$10=0;break;
             case 14:var switch$0=4,switch$10=0;break;
             default:var switch$10=1}
          if(switch$10)throw [0,Assert_failure,_ah_];
          break;
         case 10:
          var _sk_=ty1[1];
          if(typeof match !== "number" && 10 === match[0])
           {var rest2$9=match[1];return [10,trans(_sk_,rest2$9)]}
          throw [0,Assert_failure,_ai_];
         case 11:
          var _sl_=ty1[1];
          if(typeof match === "number")
           var switch$11=1;
          else
           switch(match[0])
            {case 10:var switch$0=0,switch$11=0;break;
             case 11:var rest2$10=match[1];return [11,trans(_sl_,rest2$10)];
             default:var switch$11=1}
          if(switch$11)throw [0,Assert_failure,_aj_];
          break;
         case 12:
          var _sm_=ty1[1];
          if(typeof match === "number")
           var switch$12=1;
          else
           switch(match[0])
            {case 10:var switch$0=0,switch$12=0;break;
             case 11:var switch$0=1,switch$12=0;break;
             case 12:var rest2$11=match[1];return [12,trans(_sm_,rest2$11)];
             default:var switch$12=1}
          if(switch$12)throw [0,Assert_failure,_ak_];
          break;
         case 13:
          var _sn_=ty1[1];
          if(typeof match === "number")
           var switch$13=1;
          else
           switch(match[0])
            {case 10:var switch$0=0,switch$13=0;break;
             case 11:var switch$0=1,switch$13=0;break;
             case 12:var switch$0=2,switch$13=0;break;
             case 13:var rest2$12=match[1];return [13,trans(_sn_,rest2$12)];
             default:var switch$13=1}
          if(switch$13)throw [0,Assert_failure,_al_];
          break;
         default:
          var _so_=ty1[1];
          if(typeof match === "number")
           var switch$14=1;
          else
           switch(match[0])
            {case 10:var switch$0=0,switch$14=0;break;
             case 11:var switch$0=1,switch$14=0;break;
             case 12:var switch$0=2,switch$14=0;break;
             case 13:var switch$0=3,switch$14=0;break;
             case 14:var rest2$13=match[1];return [14,trans(_so_,rest2$13)];
             default:var switch$14=1}
          if(switch$14)throw [0,Assert_failure,_am_]}
      switch(switch$0)
       {case 0:throw [0,Assert_failure,_aa_];
        case 1:throw [0,Assert_failure,_ab_];
        case 2:throw [0,Assert_failure,_ac_];
        case 3:throw [0,Assert_failure,_ad_];
        case 4:throw [0,Assert_failure,_ae_];
        case 5:throw [0,Assert_failure,___];
        case 6:throw [0,Assert_failure,_$_];
        default:throw [0,Assert_failure,_af_]}}
    function fmtty_of_padding_fmtty(pad,fmtty)
     {return typeof pad === "number"?fmtty:0 === pad[0]?fmtty:[2,fmtty]}
    function fmtty_of_custom(arity,fmtty)
     {if(arity)
       {var arity$0=arity[1];return [12,fmtty_of_custom(arity$0,fmtty)]}
      return fmtty}
    function fmtty_of_fmt(fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:var rest=fmtty$0[1];return [0,fmtty_of_fmt(rest)];
          case 1:var rest$0=fmtty$0[1];return [0,fmtty_of_fmt(rest$0)];
          case 2:
           var rest$1=fmtty$0[2],pad=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad,[1,fmtty_of_fmt(rest$1)]);
          case 3:
           var rest$2=fmtty$0[2],pad$0=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$0,[1,fmtty_of_fmt(rest$2)]);
          case 4:
           var
            rest$3=fmtty$0[4],
            prec=fmtty$0[3],
            pad$1=fmtty$0[2],
            ty_rest=fmtty_of_fmt(rest$3),
            prec_ty=fmtty_of_precision_fmtty(prec,[2,ty_rest]);
           return fmtty_of_padding_fmtty(pad$1,prec_ty);
          case 5:
           var
            rest$4=fmtty$0[4],
            prec$0=fmtty$0[3],
            pad$2=fmtty$0[2],
            ty_rest$0=fmtty_of_fmt(rest$4),
            prec_ty$0=fmtty_of_precision_fmtty(prec$0,[3,ty_rest$0]);
           return fmtty_of_padding_fmtty(pad$2,prec_ty$0);
          case 6:
           var
            rest$5=fmtty$0[4],
            prec$1=fmtty$0[3],
            pad$3=fmtty$0[2],
            ty_rest$1=fmtty_of_fmt(rest$5),
            prec_ty$1=fmtty_of_precision_fmtty(prec$1,[4,ty_rest$1]);
           return fmtty_of_padding_fmtty(pad$3,prec_ty$1);
          case 7:
           var
            rest$6=fmtty$0[4],
            prec$2=fmtty$0[3],
            pad$4=fmtty$0[2],
            ty_rest$2=fmtty_of_fmt(rest$6),
            prec_ty$2=fmtty_of_precision_fmtty(prec$2,[5,ty_rest$2]);
           return fmtty_of_padding_fmtty(pad$4,prec_ty$2);
          case 8:
           var
            rest$7=fmtty$0[4],
            prec$3=fmtty$0[3],
            pad$5=fmtty$0[2],
            ty_rest$3=fmtty_of_fmt(rest$7),
            prec_ty$3=fmtty_of_precision_fmtty(prec$3,[6,ty_rest$3]);
           return fmtty_of_padding_fmtty(pad$5,prec_ty$3);
          case 9:
           var rest$8=fmtty$0[2],pad$6=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$6,[7,fmtty_of_fmt(rest$8)]);
          case 10:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 11:var fmtty$2=fmtty$0[2],fmtty$0=fmtty$2;continue;
          case 12:var fmtty$3=fmtty$0[2],fmtty$0=fmtty$3;continue;
          case 13:
           var rest$9=fmtty$0[3],ty=fmtty$0[2];
           return [8,ty,fmtty_of_fmt(rest$9)];
          case 14:
           var rest$10=fmtty$0[3],ty$0=fmtty$0[2];
           return [9,ty$0,ty$0,fmtty_of_fmt(rest$10)];
          case 15:var rest$11=fmtty$0[1];return [10,fmtty_of_fmt(rest$11)];
          case 16:var rest$12=fmtty$0[1];return [11,fmtty_of_fmt(rest$12)];
          case 17:var fmtty$4=fmtty$0[2],fmtty$0=fmtty$4;continue;
          case 18:
           var
            rest$13=fmtty$0[2],
            fmting_gen=fmtty$0[1],
            _r6_=fmtty_of_fmt(rest$13);
           if(0 === fmting_gen[0])
            var match=fmting_gen[1],fmt=match[1],_r7_=fmtty_of_fmt(fmt);
           else
            var
             match$0=fmting_gen[1],
             fmt$0=match$0[1],
             _r7_=fmtty_of_fmt(fmt$0);
           return concat_fmtty(_r7_,_r6_);
          case 19:var rest$14=fmtty$0[1];return [13,fmtty_of_fmt(rest$14)];
          case 20:var rest$15=fmtty$0[3];return [1,fmtty_of_fmt(rest$15)];
          case 21:var rest$16=fmtty$0[2];return [2,fmtty_of_fmt(rest$16)];
          case 22:var rest$17=fmtty$0[1];return [0,fmtty_of_fmt(rest$17)];
          case 23:
           var rest$18=fmtty$0[2],ign=fmtty$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:return [14,fmtty_of_fmt(rest$18)];
              default:var fmtty$0=rest$18;continue}
           else
            switch(ign[0])
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:var fmtty$0=rest$18;continue;
              case 3:var fmtty$0=rest$18;continue;
              case 4:var fmtty$0=rest$18;continue;
              case 5:var fmtty$0=rest$18;continue;
              case 6:var fmtty$0=rest$18;continue;
              case 7:var fmtty$0=rest$18;continue;
              case 8:var fmtty$0=rest$18;continue;
              case 9:
               var fmtty$5=ign[2];
               return concat_fmtty(fmtty$5,fmtty_of_fmt(rest$18));
              case 10:var fmtty$0=rest$18;continue;
              default:var fmtty$0=rest$18;continue}
          default:
           var rest$19=fmtty$0[3],arity=fmtty$0[1];
           return fmtty_of_custom(arity,fmtty_of_fmt(rest$19))}}
    function fmtty_of_precision_fmtty(prec,fmtty)
     {return typeof prec === "number"?0 === prec?fmtty:[2,fmtty]:fmtty}
    var
     Type_mismatch=
      [248,cst_CamlinternalFormat_Type_mismatch,caml_fresh_oo_id(0)];
    function type_padding(pad,match)
     {if(typeof pad === "number")
       return [0,0,match];
      else
       {if(0 === pad[0])
         {var w=pad[2],padty=pad[1];return [0,[0,padty,w],match]}
        if(typeof match !== "number" && 2 === match[0])
         {var rest=match[1],padty$0=pad[1];return [0,[1,padty$0],rest]}
        throw Type_mismatch}}
    function type_padprec(pad,prec,fmtty)
     {var match=type_padding(pad,fmtty);
      if(typeof prec === "number")
       {if(0 === prec)
         {var rest=match[2],pad$0=match[1];return [0,pad$0,0,rest]}
        var _r5_=match[2];
        if(typeof _r5_ !== "number" && 2 === _r5_[0])
         {var rest$0=_r5_[1],pad$1=match[1];return [0,pad$1,1,rest$0]}
        throw Type_mismatch}
      var rest$1=match[2],pad$2=match[1],p=prec[1];
      return [0,pad$2,[0,p],rest$1]}
    function type_format(fmt,fmtty)
     {var _r4_=type_format_gen(fmt,fmtty);
      if(typeof _r4_[2] === "number"){var fmt$0=_r4_[1];return fmt$0}
      throw Type_mismatch}
    function type_ignored_param_one(ign,fmt,fmtty)
     {var match=type_format_gen(fmt,fmtty),fmtty$0=match[2],fmt$0=match[1];
      return [0,[23,ign,fmt$0],fmtty$0]}
    function type_format_gen(fmt,fmtty)
     {if(typeof fmt === "number")
       return [0,0,fmtty];
      else
       switch(fmt[0])
        {case 0:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest=fmtty[1],
             fmt_rest=fmt[1],
             match=type_format_gen(fmt_rest,fmtty_rest),
             fmtty$0=match[2],
             fmt$0=match[1];
            return [0,[0,fmt$0],fmtty$0]}
          break;
         case 1:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest$0=fmtty[1],
             fmt_rest$0=fmt[1],
             match$0=type_format_gen(fmt_rest$0,fmtty_rest$0),
             fmtty$1=match$0[2],
             fmt$1=match$0[1];
            return [0,[1,fmt$1],fmtty$1]}
          break;
         case 2:
          var
           fmt_rest$1=fmt[2],
           pad=fmt[1],
           _rz_=type_padding(pad,fmtty),
           _rA_=_rz_[2],
           _rB_=_rz_[1];
          if(typeof _rA_ !== "number" && 1 === _rA_[0])
           {var
             fmtty_rest$1=_rA_[1],
             match$1=type_format_gen(fmt_rest$1,fmtty_rest$1),
             fmtty$2=match$1[2],
             fmt$2=match$1[1];
            return [0,[2,_rB_,fmt$2],fmtty$2]}
          throw Type_mismatch;
         case 3:
          var
           fmt_rest$2=fmt[2],
           pad$0=fmt[1],
           _rC_=type_padding(pad$0,fmtty),
           _rD_=_rC_[2],
           _rE_=_rC_[1];
          if(typeof _rD_ !== "number" && 1 === _rD_[0])
           {var
             fmtty_rest$2=_rD_[1],
             match$2=type_format_gen(fmt_rest$2,fmtty_rest$2),
             fmtty$3=match$2[2],
             fmt$3=match$2[1];
            return [0,[3,_rE_,fmt$3],fmtty$3]}
          throw Type_mismatch;
         case 4:
          var
           fmt_rest$3=fmt[4],
           prec=fmt[3],
           pad$1=fmt[2],
           iconv=fmt[1],
           _rF_=type_padprec(pad$1,prec,fmtty),
           _rG_=_rF_[3],
           _rH_=_rF_[2],
           _rI_=_rF_[1];
          if(typeof _rG_ !== "number" && 2 === _rG_[0])
           {var
             fmtty_rest$3=_rG_[1],
             match$3=type_format_gen(fmt_rest$3,fmtty_rest$3),
             fmtty$4=match$3[2],
             fmt$4=match$3[1];
            return [0,[4,iconv,_rI_,_rH_,fmt$4],fmtty$4]}
          throw Type_mismatch;
         case 5:
          var
           fmt_rest$4=fmt[4],
           prec$0=fmt[3],
           pad$2=fmt[2],
           iconv$0=fmt[1],
           _rJ_=type_padprec(pad$2,prec$0,fmtty),
           _rK_=_rJ_[3],
           _rL_=_rJ_[2],
           _rM_=_rJ_[1];
          if(typeof _rK_ !== "number" && 3 === _rK_[0])
           {var
             fmtty_rest$4=_rK_[1],
             match$4=type_format_gen(fmt_rest$4,fmtty_rest$4),
             fmtty$5=match$4[2],
             fmt$5=match$4[1];
            return [0,[5,iconv$0,_rM_,_rL_,fmt$5],fmtty$5]}
          throw Type_mismatch;
         case 6:
          var
           fmt_rest$5=fmt[4],
           prec$1=fmt[3],
           pad$3=fmt[2],
           iconv$1=fmt[1],
           _rN_=type_padprec(pad$3,prec$1,fmtty),
           _rO_=_rN_[3],
           _rP_=_rN_[2],
           _rQ_=_rN_[1];
          if(typeof _rO_ !== "number" && 4 === _rO_[0])
           {var
             fmtty_rest$5=_rO_[1],
             match$5=type_format_gen(fmt_rest$5,fmtty_rest$5),
             fmtty$6=match$5[2],
             fmt$6=match$5[1];
            return [0,[6,iconv$1,_rQ_,_rP_,fmt$6],fmtty$6]}
          throw Type_mismatch;
         case 7:
          var
           fmt_rest$6=fmt[4],
           prec$2=fmt[3],
           pad$4=fmt[2],
           iconv$2=fmt[1],
           _rR_=type_padprec(pad$4,prec$2,fmtty),
           _rS_=_rR_[3],
           _rT_=_rR_[2],
           _rU_=_rR_[1];
          if(typeof _rS_ !== "number" && 5 === _rS_[0])
           {var
             fmtty_rest$6=_rS_[1],
             match$6=type_format_gen(fmt_rest$6,fmtty_rest$6),
             fmtty$7=match$6[2],
             fmt$7=match$6[1];
            return [0,[7,iconv$2,_rU_,_rT_,fmt$7],fmtty$7]}
          throw Type_mismatch;
         case 8:
          var
           fmt_rest$7=fmt[4],
           prec$3=fmt[3],
           pad$5=fmt[2],
           fconv=fmt[1],
           _rV_=type_padprec(pad$5,prec$3,fmtty),
           _rW_=_rV_[3],
           _rX_=_rV_[2],
           _rY_=_rV_[1];
          if(typeof _rW_ !== "number" && 6 === _rW_[0])
           {var
             fmtty_rest$7=_rW_[1],
             match$7=type_format_gen(fmt_rest$7,fmtty_rest$7),
             fmtty$8=match$7[2],
             fmt$8=match$7[1];
            return [0,[8,fconv,_rY_,_rX_,fmt$8],fmtty$8]}
          throw Type_mismatch;
         case 9:
          var
           fmt_rest$8=fmt[2],
           pad$6=fmt[1],
           _rZ_=type_padding(pad$6,fmtty),
           _r0_=_rZ_[2],
           _r1_=_rZ_[1];
          if(typeof _r0_ !== "number" && 7 === _r0_[0])
           {var
             fmtty_rest$8=_r0_[1],
             match$8=type_format_gen(fmt_rest$8,fmtty_rest$8),
             fmtty$9=match$8[2],
             fmt$9=match$8[1];
            return [0,[9,_r1_,fmt$9],fmtty$9]}
          throw Type_mismatch;
         case 10:
          var
           fmt_rest$9=fmt[1],
           match$9=type_format_gen(fmt_rest$9,fmtty),
           fmtty$10=match$9[2],
           fmt$10=match$9[1];
          return [0,[10,fmt$10],fmtty$10];
         case 11:
          var
           fmt_rest$10=fmt[2],
           str=fmt[1],
           match$10=type_format_gen(fmt_rest$10,fmtty),
           fmtty$11=match$10[2],
           fmt$11=match$10[1];
          return [0,[11,str,fmt$11],fmtty$11];
         case 12:
          var
           fmt_rest$11=fmt[2],
           chr=fmt[1],
           match$11=type_format_gen(fmt_rest$11,fmtty),
           fmtty$12=match$11[2],
           fmt$12=match$11[1];
          return [0,[12,chr,fmt$12],fmtty$12];
         case 13:
          if(typeof fmtty !== "number" && 8 === fmtty[0])
           {var
             fmtty_rest$9=fmtty[2],
             sub_fmtty=fmtty[1],
             fmt_rest$12=fmt[3],
             sub_fmtty$0=fmt[2],
             pad_opt=fmt[1];
            if(caml_notequal([0,sub_fmtty$0],[0,sub_fmtty]))
             throw Type_mismatch;
            var
             match$12=type_format_gen(fmt_rest$12,fmtty_rest$9),
             fmtty$13=match$12[2],
             fmt$13=match$12[1];
            return [0,[13,pad_opt,sub_fmtty,fmt$13],fmtty$13]}
          break;
         case 14:
          if(typeof fmtty !== "number" && 9 === fmtty[0])
           {var
             fmtty_rest$10=fmtty[3],
             sub_fmtty1=fmtty[1],
             fmt_rest$13=fmt[3],
             sub_fmtty$1=fmt[2],
             pad_opt$0=fmt[1],
             _r2_=[0,erase_rel(sub_fmtty1)];
            if(caml_notequal([0,erase_rel(sub_fmtty$1)],_r2_))
             throw Type_mismatch;
            var
             match$13=type_format_gen(fmt_rest$13,erase_rel(fmtty_rest$10)),
             fmtty$14=match$13[2],
             fmt$14=match$13[1];
            return [0,[14,pad_opt$0,sub_fmtty1,fmt$14],fmtty$14]}
          break;
         case 15:
          if(typeof fmtty !== "number" && 10 === fmtty[0])
           {var
             fmtty_rest$11=fmtty[1],
             fmt_rest$14=fmt[1],
             match$14=type_format_gen(fmt_rest$14,fmtty_rest$11),
             fmtty$15=match$14[2],
             fmt$15=match$14[1];
            return [0,[15,fmt$15],fmtty$15]}
          break;
         case 16:
          if(typeof fmtty !== "number" && 11 === fmtty[0])
           {var
             fmtty_rest$12=fmtty[1],
             fmt_rest$15=fmt[1],
             match$15=type_format_gen(fmt_rest$15,fmtty_rest$12),
             fmtty$16=match$15[2],
             fmt$16=match$15[1];
            return [0,[16,fmt$16],fmtty$16]}
          break;
         case 17:
          var
           fmt_rest$16=fmt[2],
           formatting_lit=fmt[1],
           match$16=type_format_gen(fmt_rest$16,fmtty),
           fmtty$17=match$16[2],
           fmt$17=match$16[1];
          return [0,[17,formatting_lit,fmt$17],fmtty$17];
         case 18:
          var fmt_rest$17=fmt[2],formatting_gen=fmt[1];
          if(0 === formatting_gen[0])
           {var
             match$20=formatting_gen[1],
             str$0=match$20[2],
             fmt1=match$20[1],
             match$21=type_format_gen(fmt1,fmtty),
             fmtty2=match$21[2],
             fmt2=match$21[1],
             match$22=type_format_gen(fmt_rest$17,fmtty2),
             fmtty3=match$22[2],
             fmt3=match$22[1];
            return [0,[18,[0,[0,fmt2,str$0]],fmt3],fmtty3]}
          var
           match$23=formatting_gen[1],
           str$1=match$23[2],
           fmt1$0=match$23[1],
           match$24=type_format_gen(fmt1$0,fmtty),
           fmtty2$0=match$24[2],
           fmt2$0=match$24[1],
           match$25=type_format_gen(fmt_rest$17,fmtty2$0),
           fmtty3$0=match$25[2],
           fmt3$0=match$25[1];
          return [0,[18,[1,[0,fmt2$0,str$1]],fmt3$0],fmtty3$0];
         case 19:
          if(typeof fmtty !== "number" && 13 === fmtty[0])
           {var
             fmtty_rest$13=fmtty[1],
             fmt_rest$18=fmt[1],
             match$17=type_format_gen(fmt_rest$18,fmtty_rest$13),
             fmtty$18=match$17[2],
             fmt$18=match$17[1];
            return [0,[19,fmt$18],fmtty$18]}
          break;
         case 20:
          if(typeof fmtty !== "number" && 1 === fmtty[0])
           {var
             fmtty_rest$14=fmtty[1],
             fmt_rest$19=fmt[3],
             char_set=fmt[2],
             width_opt=fmt[1],
             match$18=type_format_gen(fmt_rest$19,fmtty_rest$14),
             fmtty$19=match$18[2],
             fmt$19=match$18[1];
            return [0,[20,width_opt,char_set,fmt$19],fmtty$19]}
          break;
         case 21:
          if(typeof fmtty !== "number" && 2 === fmtty[0])
           {var
             fmtty_rest$15=fmtty[1],
             fmt_rest$20=fmt[2],
             counter=fmt[1],
             match$19=type_format_gen(fmt_rest$20,fmtty_rest$15),
             fmtty$20=match$19[2],
             fmt$20=match$19[1];
            return [0,[21,counter,fmt$20],fmtty$20]}
          break;
         case 23:
          var rest=fmt[2],ign=fmt[1];
          if(typeof ign === "number")
           switch(ign)
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:
              if(typeof fmtty !== "number" && 14 === fmtty[0])
               {var
                 fmtty_rest$16=fmtty[1],
                 match$26=type_format_gen(rest,fmtty_rest$16),
                 fmtty$21=match$26[2],
                 fmt$21=match$26[1];
                return [0,[23,2,fmt$21],fmtty$21]}
              throw Type_mismatch;
             default:return type_ignored_param_one(ign,rest,fmtty)}
          else
           switch(ign[0])
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:return type_ignored_param_one(ign,rest,fmtty);
             case 3:return type_ignored_param_one(ign,rest,fmtty);
             case 4:return type_ignored_param_one(ign,rest,fmtty);
             case 5:return type_ignored_param_one(ign,rest,fmtty);
             case 6:return type_ignored_param_one(ign,rest,fmtty);
             case 7:return type_ignored_param_one(ign,rest,fmtty);
             case 8:
              var sub_fmtty$2=ign[2],pad_opt$1=ign[1];
              return type_ignored_param_one
                      ([8,pad_opt$1,sub_fmtty$2],rest,fmtty);
             case 9:
              var
               sub_fmtty$3=ign[2],
               pad_opt$2=ign[1],
               _r3_=type_ignored_format_substitution(sub_fmtty$3,rest,fmtty),
               match$27=_r3_[2],
               fmtty$22=match$27[2],
               fmt$22=match$27[1],
               sub_fmtty$4=_r3_[1];
              return [0,[23,[9,pad_opt$2,sub_fmtty$4],fmt$22],fmtty$22];
             case 10:return type_ignored_param_one(ign,rest,fmtty);
             default:return type_ignored_param_one(ign,rest,fmtty)}
         }
      throw Type_mismatch}
    function type_ignored_format_substitution(sub_fmtty,fmt,match)
     {if(typeof sub_fmtty === "number")
       return [0,0,type_format_gen(fmt,match)];
      else
       switch(sub_fmtty[0])
        {case 0:
          if(typeof match !== "number" && 0 === match[0])
           {var
             fmtty_rest=match[1],
             sub_fmtty_rest=sub_fmtty[1],
             match$0=
              type_ignored_format_substitution(sub_fmtty_rest,fmt,fmtty_rest),
             fmt$0=match$0[2],
             sub_fmtty_rest$0=match$0[1];
            return [0,[0,sub_fmtty_rest$0],fmt$0]}
          break;
         case 1:
          if(typeof match !== "number" && 1 === match[0])
           {var
             fmtty_rest$0=match[1],
             sub_fmtty_rest$1=sub_fmtty[1],
             match$1=
              type_ignored_format_substitution
               (sub_fmtty_rest$1,fmt,fmtty_rest$0),
             fmt$1=match$1[2],
             sub_fmtty_rest$2=match$1[1];
            return [0,[1,sub_fmtty_rest$2],fmt$1]}
          break;
         case 2:
          if(typeof match !== "number" && 2 === match[0])
           {var
             fmtty_rest$1=match[1],
             sub_fmtty_rest$3=sub_fmtty[1],
             match$2=
              type_ignored_format_substitution
               (sub_fmtty_rest$3,fmt,fmtty_rest$1),
             fmt$2=match$2[2],
             sub_fmtty_rest$4=match$2[1];
            return [0,[2,sub_fmtty_rest$4],fmt$2]}
          break;
         case 3:
          if(typeof match !== "number" && 3 === match[0])
           {var
             fmtty_rest$2=match[1],
             sub_fmtty_rest$5=sub_fmtty[1],
             match$3=
              type_ignored_format_substitution
               (sub_fmtty_rest$5,fmt,fmtty_rest$2),
             fmt$3=match$3[2],
             sub_fmtty_rest$6=match$3[1];
            return [0,[3,sub_fmtty_rest$6],fmt$3]}
          break;
         case 4:
          if(typeof match !== "number" && 4 === match[0])
           {var
             fmtty_rest$3=match[1],
             sub_fmtty_rest$7=sub_fmtty[1],
             match$4=
              type_ignored_format_substitution
               (sub_fmtty_rest$7,fmt,fmtty_rest$3),
             fmt$4=match$4[2],
             sub_fmtty_rest$8=match$4[1];
            return [0,[4,sub_fmtty_rest$8],fmt$4]}
          break;
         case 5:
          if(typeof match !== "number" && 5 === match[0])
           {var
             fmtty_rest$4=match[1],
             sub_fmtty_rest$9=sub_fmtty[1],
             match$5=
              type_ignored_format_substitution
               (sub_fmtty_rest$9,fmt,fmtty_rest$4),
             fmt$5=match$5[2],
             sub_fmtty_rest$10=match$5[1];
            return [0,[5,sub_fmtty_rest$10],fmt$5]}
          break;
         case 6:
          if(typeof match !== "number" && 6 === match[0])
           {var
             fmtty_rest$5=match[1],
             sub_fmtty_rest$11=sub_fmtty[1],
             match$6=
              type_ignored_format_substitution
               (sub_fmtty_rest$11,fmt,fmtty_rest$5),
             fmt$6=match$6[2],
             sub_fmtty_rest$12=match$6[1];
            return [0,[6,sub_fmtty_rest$12],fmt$6]}
          break;
         case 7:
          if(typeof match !== "number" && 7 === match[0])
           {var
             fmtty_rest$6=match[1],
             sub_fmtty_rest$13=sub_fmtty[1],
             match$7=
              type_ignored_format_substitution
               (sub_fmtty_rest$13,fmt,fmtty_rest$6),
             fmt$7=match$7[2],
             sub_fmtty_rest$14=match$7[1];
            return [0,[7,sub_fmtty_rest$14],fmt$7]}
          break;
         case 8:
          if(typeof match !== "number" && 8 === match[0])
           {var
             fmtty_rest$7=match[2],
             sub2_fmtty=match[1],
             sub_fmtty_rest$15=sub_fmtty[2],
             sub2_fmtty$0=sub_fmtty[1];
            if(caml_notequal([0,sub2_fmtty$0],[0,sub2_fmtty]))
             throw Type_mismatch;
            var
             match$8=
              type_ignored_format_substitution
               (sub_fmtty_rest$15,fmt,fmtty_rest$7),
             fmt$8=match$8[2],
             sub_fmtty_rest$16=match$8[1];
            return [0,[8,sub2_fmtty,sub_fmtty_rest$16],fmt$8]}
          break;
         case 9:
          if(typeof match !== "number" && 9 === match[0])
           {var
             fmtty_rest$8=match[3],
             sub2_fmtty$1=match[2],
             sub1_fmtty=match[1],
             sub_fmtty_rest$17=sub_fmtty[3],
             sub2_fmtty$2=sub_fmtty[2],
             sub1_fmtty$0=sub_fmtty[1],
             _rx_=[0,erase_rel(sub1_fmtty)];
            if(caml_notequal([0,erase_rel(sub1_fmtty$0)],_rx_))
             throw Type_mismatch;
            var _ry_=[0,erase_rel(sub2_fmtty$1)];
            if(caml_notequal([0,erase_rel(sub2_fmtty$2)],_ry_))
             throw Type_mismatch;
            var
             sub_fmtty$0=trans(symm(sub1_fmtty),sub2_fmtty$1),
             match$9=fmtty_rel_det(sub_fmtty$0),
             f4=match$9[4],
             f2=match$9[2];
            caml_call1(f2,0);
            caml_call1(f4,0);
            var
             match$10=
              type_ignored_format_substitution
               (erase_rel(sub_fmtty_rest$17),fmt,fmtty_rest$8),
             fmt$9=match$10[2],
             sub_fmtty_rest$18=match$10[1];
            return [0,
                    [9,sub1_fmtty,sub2_fmtty$1,symm(sub_fmtty_rest$18)],
                    fmt$9]}
          break;
         case 10:
          if(typeof match !== "number" && 10 === match[0])
           {var
             fmtty_rest$9=match[1],
             sub_fmtty_rest$19=sub_fmtty[1],
             match$11=
              type_ignored_format_substitution
               (sub_fmtty_rest$19,fmt,fmtty_rest$9),
             fmt$10=match$11[2],
             sub_fmtty_rest$20=match$11[1];
            return [0,[10,sub_fmtty_rest$20],fmt$10]}
          break;
         case 11:
          if(typeof match !== "number" && 11 === match[0])
           {var
             fmtty_rest$10=match[1],
             sub_fmtty_rest$21=sub_fmtty[1],
             match$12=
              type_ignored_format_substitution
               (sub_fmtty_rest$21,fmt,fmtty_rest$10),
             fmt$11=match$12[2],
             sub_fmtty_rest$22=match$12[1];
            return [0,[11,sub_fmtty_rest$22],fmt$11]}
          break;
         case 13:
          if(typeof match !== "number" && 13 === match[0])
           {var
             fmtty_rest$11=match[1],
             sub_fmtty_rest$23=sub_fmtty[1],
             match$13=
              type_ignored_format_substitution
               (sub_fmtty_rest$23,fmt,fmtty_rest$11),
             fmt$12=match$13[2],
             sub_fmtty_rest$24=match$13[1];
            return [0,[13,sub_fmtty_rest$24],fmt$12]}
          break;
         case 14:
          if(typeof match !== "number" && 14 === match[0])
           {var
             fmtty_rest$12=match[1],
             sub_fmtty_rest$25=sub_fmtty[1],
             match$14=
              type_ignored_format_substitution
               (sub_fmtty_rest$25,fmt,fmtty_rest$12),
             fmt$13=match$14[2],
             sub_fmtty_rest$26=match$14[1];
            return [0,[14,sub_fmtty_rest$26],fmt$13]}
          break
         }
      throw Type_mismatch}
    function recast(fmt,fmtty){return type_format(fmt,erase_rel(symm(fmtty)))}
    function fix_padding(padty,width,str)
     {var
       len=caml_ml_string_length(str),
       padty$0=0 <= width?padty:0,
       width$0=abs(width);
      if(width$0 <= len)return str;
      var _rw_=2 === padty$0?48:32,res=make(width$0,_rw_);
      switch(padty$0)
       {case 0:blit$0(str,0,res,0,len);break;
        case 1:blit$0(str,0,res,width$0 - len | 0,len);break;
        default:
         if(0 < len)
          {if(43 === caml_string_get(str,0))
            var switch$1=1;
           else
            if(45 === caml_string_get(str,0))
             var switch$1=1;
            else
             if(32 === caml_string_get(str,0))
              var switch$1=1;
             else
              var switch$0=0,switch$1=0;
           if(switch$1)
            {caml_bytes_set(res,0,caml_string_get(str,0));
             blit$0(str,1,res,(width$0 - len | 0) + 1 | 0,len - 1 | 0);
             var switch$0=1}}
         else
          var switch$0=0;
         if(! switch$0)
          {if(1 < len)
            if(48 === caml_string_get(str,0))
             {if(120 === caml_string_get(str,1))
               var switch$3=1;
              else
               if(88 === caml_string_get(str,1))
                var switch$3=1;
               else
                var switch$2=0,switch$3=0;
              if(switch$3)
               {caml_bytes_set(res,1,caml_string_get(str,1));
                blit$0(str,2,res,(width$0 - len | 0) + 2 | 0,len - 2 | 0);
                var switch$2=1}}
            else
             var switch$2=0;
           else
            var switch$2=0;
           if(! switch$2)blit$0(str,0,res,width$0 - len | 0,len)}}
      return caml_string_of_bytes(res)}
    function fix_int_precision(prec,str)
     {var
       prec$0=abs(prec),
       len=caml_ml_string_length(str),
       c=caml_string_get(str,0);
      if(58 <= c)
       var switch$0=71 <= c?5 < (c - 97 | 0) >>> 0?1:0:65 <= c?0:1;
      else
       {if(32 === c)
         var switch$1=1;
        else
         if(43 <= c)
          {var switcher=c - 43 | 0;
           switch(switcher)
            {case 5:
              if(len < (prec$0 + 2 | 0))
               if(1 < len)
                {var
                  switch$2=
                   120 === caml_string_get(str,1)
                    ?0
                    :88 === caml_string_get(str,1)?0:1;
                 if(! switch$2)
                  {var res$1=make(prec$0 + 2 | 0,48);
                   caml_bytes_set(res$1,1,caml_string_get(str,1));
                   blit$0(str,2,res$1,(prec$0 - len | 0) + 4 | 0,len - 2 | 0);
                   return caml_string_of_bytes(res$1)}}
              var switch$0=0,switch$1=0;
              break;
             case 0:
             case 2:var switch$1=1;break;
             case 1:
             case 3:
             case 4:var switch$0=1,switch$1=0;break;
             default:var switch$0=0,switch$1=0}}
         else
          var switch$0=1,switch$1=0;
        if(switch$1)
         {if(len < (prec$0 + 1 | 0))
           {var res$0=make(prec$0 + 1 | 0,48);
            caml_bytes_set(res$0,0,c);
            blit$0(str,1,res$0,(prec$0 - len | 0) + 2 | 0,len - 1 | 0);
            return caml_string_of_bytes(res$0)}
          var switch$0=1}}
      if(! switch$0)
       if(len < prec$0)
        {var res=make(prec$0,48);
         blit$0(str,0,res,prec$0 - len | 0,len);
         return caml_string_of_bytes(res)}
      return str}
    function string_to_caml_string(str)
     {var
       str$0=escaped$1(str),
       l=caml_ml_string_length(str$0),
       res=make(l + 2 | 0,34);
      caml_blit_string(str$0,0,res,1,l);
      return caml_string_of_bytes(res)}
    function transform_int_alt(iconv,s)
     {if(13 <= iconv)
       {var n=[0,0],_rr_=caml_ml_string_length(s) - 1 | 0,_rq_=0;
        if(! (_rr_ < 0))
         {var i$0=_rq_;
          for(;;)
           {var match=caml_string_unsafe_get(s,i$0),switcher$0=match - 48 | 0;
            if(! (9 < switcher$0 >>> 0))n[1]++;
            var _rv_=i$0 + 1 | 0;
            if(_rr_ !== i$0){var i$0=_rv_;continue}
            break}}
        var
         digits=n[1],
         buf=
          caml_create_bytes
           (caml_ml_string_length(s) + ((digits - 1 | 0) / 3 | 0) | 0),
         pos=[0,0],
         put=function(c){caml_bytes_set(buf,pos[1],c);pos[1]++;return 0},
         left=[0,((digits - 1 | 0) % 3 | 0) + 1 | 0],
         _rt_=caml_ml_string_length(s) - 1 | 0,
         _rs_=0;
        if(! (_rt_ < 0))
         {var i=_rs_;
          for(;;)
           {var c=caml_string_unsafe_get(s,i),switcher=c - 48 | 0;
            if(9 < switcher >>> 0)
             put(c);
            else
             {if(0 === left[1]){put(95);left[1] = 3}left[1] += -1;put(c)}
            var _ru_=i + 1 | 0;
            if(_rt_ !== i){var i=_ru_;continue}
            break}}
        return caml_string_of_bytes(buf)}
      return s}
    function convert_int(iconv,n)
     {switch(iconv)
       {case 1:var _rp_=cst_d$3;break;
        case 2:var _rp_=cst_d$4;break;
        case 4:var _rp_=cst_i$1;break;
        case 5:var _rp_=cst_i$2;break;
        case 6:var _rp_=cst_x;break;
        case 7:var _rp_=cst_x$0;break;
        case 8:var _rp_=cst_X$0;break;
        case 9:var _rp_=cst_X$1;break;
        case 10:var _rp_=cst_o;break;
        case 11:var _rp_=cst_o$0;break;
        case 0:
        case 13:var _rp_=cst_d$2;break;
        case 3:
        case 14:var _rp_=cst_i$0;break;
        default:var _rp_=cst_u}
      return transform_int_alt(iconv,caml_format_int(_rp_,n))}
    function convert_int32(iconv,n)
     {switch(iconv)
       {case 1:var _ro_=cst_ld$0;break;
        case 2:var _ro_=cst_ld$1;break;
        case 4:var _ro_=cst_li$1;break;
        case 5:var _ro_=cst_li$2;break;
        case 6:var _ro_=cst_lx;break;
        case 7:var _ro_=cst_lx$0;break;
        case 8:var _ro_=cst_lX;break;
        case 9:var _ro_=cst_lX$0;break;
        case 10:var _ro_=cst_lo;break;
        case 11:var _ro_=cst_lo$0;break;
        case 0:
        case 13:var _ro_=cst_ld;break;
        case 3:
        case 14:var _ro_=cst_li$0;break;
        default:var _ro_=cst_lu}
      return transform_int_alt(iconv,caml_format_int(_ro_,n))}
    function convert_nativeint(iconv,n)
     {switch(iconv)
       {case 1:var _rn_=cst_nd$0;break;
        case 2:var _rn_=cst_nd$1;break;
        case 4:var _rn_=cst_ni$1;break;
        case 5:var _rn_=cst_ni$2;break;
        case 6:var _rn_=cst_nx;break;
        case 7:var _rn_=cst_nx$0;break;
        case 8:var _rn_=cst_nX;break;
        case 9:var _rn_=cst_nX$0;break;
        case 10:var _rn_=cst_no;break;
        case 11:var _rn_=cst_no$0;break;
        case 0:
        case 13:var _rn_=cst_nd;break;
        case 3:
        case 14:var _rn_=cst_ni$0;break;
        default:var _rn_=cst_nu}
      return transform_int_alt(iconv,caml_format_int(_rn_,n))}
    function convert_int64(iconv,n)
     {switch(iconv)
       {case 1:var _rm_=cst_Ld$0;break;
        case 2:var _rm_=cst_Ld$1;break;
        case 4:var _rm_=cst_Li$1;break;
        case 5:var _rm_=cst_Li$2;break;
        case 6:var _rm_=cst_Lx;break;
        case 7:var _rm_=cst_Lx$0;break;
        case 8:var _rm_=cst_LX;break;
        case 9:var _rm_=cst_LX$0;break;
        case 10:var _rm_=cst_Lo;break;
        case 11:var _rm_=cst_Lo$0;break;
        case 0:
        case 13:var _rm_=cst_Ld;break;
        case 3:
        case 14:var _rm_=cst_Li$0;break;
        default:var _rm_=cst_Lu}
      return transform_int_alt(iconv,caml_int64_format(_rm_,n))}
    function convert_float(fconv,prec$0,x)
     {if(16 <= fconv)
       {if(17 <= fconv)
         switch(fconv - 17 | 0)
          {case 2:var switch$0=0;break;
           case 0:
           case 3:var sign=43,switch$0=1;break;
           default:var sign=32,switch$0=1}
        else
         var switch$0=0;
        if(! switch$0)var sign=45;
        var str=runtime.caml_hexstring_of_float(x,prec$0,sign);
        return 19 <= fconv?uppercase_ascii$1(str):str}
      if(15 === fconv)
       var _rj_=cst_12g$0;
      else
       {var prec=abs(prec$0),symb=char_of_fconv(fconv),buf=buffer_create(16);
        buffer_add_char(buf,37);
        bprint_fconv_flag(buf,fconv);
        buffer_add_char(buf,46);
        buffer_add_string(buf,caml_new_string("" + prec));
        buffer_add_char(buf,symb);
        var _rj_=buffer_contents(buf)}
      var str$0=caml_format_float(_rj_,x);
      if(15 === fconv)
       {var
         len=caml_ml_string_length(str$0),
         match$0=runtime.caml_classify_float(x);
        if(3 === match$0)return x < 0.?cst_neg_infinity:cst_infinity;
        if(4 <= match$0)return cst_nan;
        var i=0;
        for(;;)
         {if(i === len)
           var _rl_=0;
          else
           {var
             match=caml_string_get(str$0,i),
             _rk_=match - 46 | 0,
             switch$1=
              23 < _rk_ >>> 0?55 === _rk_?1:0:21 < (_rk_ - 1 | 0) >>> 0?1:0;
            if(! switch$1){var i$0=i + 1 | 0,i=i$0;continue}
            var _rl_=1}
          return _rl_?str$0:symbol(str$0,cst$28)}}
      return str$0}
    function string_of_fmtty(fmtty)
     {var buf=buffer_create(16);
      bprint_fmtty(buf,fmtty);
      return buffer_contents(buf)}
    function make_int_padding_precision(k,acc,fmt,pad,match,trans,iconv)
     {if(typeof pad === "number")
       {if(typeof match === "number")
         return 0 === match
                 ?function(x)
                   {var str=caml_call2(trans,iconv,x);
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(p,x)
                   {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)};
        var p=match[1];
        return function(x)
         {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
          return make_printf(k,[4,acc,str],fmt)}}
      else
       {if(0 === pad[0])
         {var _rg_=pad[2],_rh_=pad[1];
          if(typeof match === "number")
           return 0 === match
                   ?function(x)
                     {var str=fix_padding(_rh_,_rg_,caml_call2(trans,iconv,x));
                      return make_printf(k,[4,acc,str],fmt)}
                   :function(p,x)
                     {var
                       str=
                        fix_padding
                         (_rh_,_rg_,fix_int_precision(p,caml_call2(trans,iconv,x)));
                      return make_printf(k,[4,acc,str],fmt)};
          var p$0=match[1];
          return function(x)
           {var
             str=
              fix_padding
               (_rh_,_rg_,fix_int_precision(p$0,caml_call2(trans,iconv,x)));
            return make_printf(k,[4,acc,str],fmt)}}
        var _ri_=pad[1];
        if(typeof match === "number")
         return 0 === match
                 ?function(w,x)
                   {var str=fix_padding(_ri_,w,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(w,p,x)
                   {var
                     str=
                      fix_padding
                       (_ri_,w,fix_int_precision(p,caml_call2(trans,iconv,x)));
                    return make_printf(k,[4,acc,str],fmt)};
        var p$1=match[1];
        return function(w,x)
         {var
           str=
            fix_padding
             (_ri_,w,fix_int_precision(p$1,caml_call2(trans,iconv,x)));
          return make_printf(k,[4,acc,str],fmt)}}}
    function make_padding(k,acc,fmt,pad,trans)
     {if(typeof pad === "number")
       return function(x)
        {var new_acc=[4,acc,caml_call1(trans,x)];
         return make_printf(k,new_acc,fmt)};
      else
       {if(0 === pad[0])
         {var width=pad[2],padty=pad[1];
          return function(x)
           {var new_acc=[4,acc,fix_padding(padty,width,caml_call1(trans,x))];
            return make_printf(k,new_acc,fmt)}}
        var padty$0=pad[1];
        return function(w,x)
         {var new_acc=[4,acc,fix_padding(padty$0,w,caml_call1(trans,x))];
          return make_printf(k,new_acc,fmt)}}}
    function make_printf$0(counter,k,acc,fmt)
     {var k$0=k,acc$0=acc,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,acc$0);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest)};
          case 1:
           var rest$0=fmt$0[1];
           return function(c)
            {var
              str=escaped(c),
              l=caml_ml_string_length(str),
              res=make(l + 2 | 0,39);
             caml_blit_string(str,0,res,1,l);
             var new_acc=[4,acc$0,caml_string_of_bytes(res)];
             return make_printf(k$0,new_acc,rest$0)};
          case 2:
           var rest$1=fmt$0[2],pad=fmt$0[1];
           return make_padding(k$0,acc$0,rest$1,pad,function(str){return str});
          case 3:
           var rest$2=fmt$0[2],pad$0=fmt$0[1];
           return make_padding(k$0,acc$0,rest$2,pad$0,string_to_caml_string);
          case 4:
           var rest$3=fmt$0[4],prec=fmt$0[3],pad$1=fmt$0[2],iconv=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$3,pad$1,prec,convert_int,iconv);
          case 5:
           var
            rest$4=fmt$0[4],
            prec$0=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$0=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$4,pad$2,prec$0,convert_int32,iconv$0);
          case 6:
           var
            rest$5=fmt$0[4],
            prec$1=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$1=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$5,pad$3,prec$1,convert_nativeint,iconv$1);
          case 7:
           var
            rest$6=fmt$0[4],
            prec$2=fmt$0[3],
            pad$4=fmt$0[2],
            iconv$2=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$6,pad$4,prec$2,convert_int64,iconv$2);
          case 8:
           var rest$7=fmt$0[4],prec$3=fmt$0[3],pad$5=fmt$0[2],fconv=fmt$0[1];
           if(typeof pad$5 === "number")
            {if(typeof prec$3 === "number")
              return 0 === prec$3
                      ?function(x)
                        {var str=convert_float(fconv,default_float_precision,x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)}
                      :function(p,x)
                        {var str=convert_float(fconv,p,x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)};
             var p=prec$3[1];
             return function(x)
              {var str=convert_float(fconv,p,x);
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
           else
            {if(0 === pad$5[0])
              {var _rd_=pad$5[2],_re_=pad$5[1];
               if(typeof prec$3 === "number")
                return 0 === prec$3
                        ?function(x)
                          {var
                            str=convert_float(fconv,default_float_precision,x),
                            str$0=fix_padding(_re_,_rd_,str);
                           return make_printf(k$0,[4,acc$0,str$0],rest$7)}
                        :function(p,x)
                          {var str=fix_padding(_re_,_rd_,convert_float(fconv,p,x));
                           return make_printf(k$0,[4,acc$0,str],rest$7)};
               var p$0=prec$3[1];
               return function(x)
                {var str=fix_padding(_re_,_rd_,convert_float(fconv,p$0,x));
                 return make_printf(k$0,[4,acc$0,str],rest$7)}}
             var _rf_=pad$5[1];
             if(typeof prec$3 === "number")
              return 0 === prec$3
                      ?function(w,x)
                        {var
                          str=convert_float(fconv,default_float_precision,x),
                          str$0=fix_padding(_rf_,w,str);
                         return make_printf(k$0,[4,acc$0,str$0],rest$7)}
                      :function(w,p,x)
                        {var str=fix_padding(_rf_,w,convert_float(fconv,p,x));
                         return make_printf(k$0,[4,acc$0,str],rest$7)};
             var p$1=prec$3[1];
             return function(w,x)
              {var str=fix_padding(_rf_,w,convert_float(fconv,p$1,x));
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
          case 9:
           var rest$8=fmt$0[2],pad$6=fmt$0[1];
           return make_padding(k$0,acc$0,rest$8,pad$6,string_of_bool);
          case 10:
           var fmt$1=fmt$0[1],acc$1=[7,acc$0],acc$0=acc$1,fmt$0=fmt$1;
           continue;
          case 11:
           var
            fmt$2=fmt$0[2],
            str=fmt$0[1],
            acc$2=[2,acc$0,str],
            acc$0=acc$2,
            fmt$0=fmt$2;
           continue;
          case 12:
           var
            fmt$3=fmt$0[2],
            chr=fmt$0[1],
            acc$3=[3,acc$0,chr],
            acc$0=acc$3,
            fmt$0=fmt$3;
           continue;
          case 13:
           var
            rest$9=fmt$0[3],
            sub_fmtty=fmt$0[2],
            ty=string_of_fmtty(sub_fmtty);
           return function(str){return make_printf(k$0,[4,acc$0,ty],rest$9)};
          case 14:
           var rest$10=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_printf
                     (k$0,acc$0,concat_fmt(recast(fmt,fmtty),rest$10))};
          case 15:
           var rest$11=fmt$0[1];
           return function(f,x)
            {return make_printf
                     (k$0,
                      [6,acc$0,function(o){return caml_call2(f,o,x)}],
                      rest$11)};
          case 16:
           var rest$12=fmt$0[1];
           return function(f){return make_printf(k$0,[6,acc$0,f],rest$12)};
          case 17:
           var
            fmt$4=fmt$0[2],
            fmting_lit=fmt$0[1],
            acc$4=[0,acc$0,fmting_lit],
            acc$0=acc$4,
            fmt$0=fmt$4;
           continue;
          case 18:
           var _rb_=fmt$0[1];
           if(0 === _rb_[0])
            {var
              rest$13=fmt$0[2],
              match=_rb_[1],
              fmt$5=match[1],
              k$3=
               function(acc,k,rest)
                {function k$0(kacc)
                  {return make_printf(k,[1,acc,[0,kacc]],rest)}
                 return k$0},
              k$1=k$3(acc$0,k$0,rest$13),
              k$0=k$1,
              acc$0=0,
              fmt$0=fmt$5;
             continue}
           var
            rest$14=fmt$0[2],
            match$0=_rb_[1],
            fmt$6=match$0[1],
            k$4=
             function(acc,k,rest)
              {function k$0(kacc){return make_printf(k,[1,acc,[1,kacc]],rest)}
               return k$0},
            k$2=k$4(acc$0,k$0,rest$14),
            k$0=k$2,
            acc$0=0,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_an_];
          case 20:
           var rest$15=fmt$0[3],new_acc=[8,acc$0,cst_Printf_bad_conversion];
           return function(param){return make_printf(k$0,new_acc,rest$15)};
          case 21:
           var rest$16=fmt$0[2];
           return function(n)
            {var new_acc=[4,acc$0,caml_format_int(cst_u$0,n)];
             return make_printf(k$0,new_acc,rest$16)};
          case 22:
           var rest$17=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest$17)};
          case 23:
           var rest$18=fmt$0[2],ign=fmt$0[1];
           if(counter < 50)
            {var counter$1=counter + 1 | 0;
             return make_ignored_param$0(counter$1,k$0,acc$0,ign,rest$18)}
           return caml_trampoline_return
                   (make_ignored_param$0,[0,k$0,acc$0,ign,rest$18]);
          default:
           var
            rest$19=fmt$0[3],
            f=fmt$0[2],
            arity=fmt$0[1],
            _rc_=caml_call1(f,0);
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return make_custom$0(counter$0,k$0,acc$0,rest$19,arity,_rc_)}
           return caml_trampoline_return
                   (make_custom$0,[0,k$0,acc$0,rest$19,arity,_rc_])}}
    function make_ignored_param$0(counter,k,acc,ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return make_invalid_arg(counter$0,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return make_invalid_arg(counter$1,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:throw [0,Assert_failure,_ao_];
         default:
          if(counter < 50)
           {var counter$2=counter + 1 | 0;
            return make_invalid_arg(counter$2,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(ign[0])
        {case 0:
          if(counter < 50)
           {var counter$3=counter + 1 | 0;
            return make_invalid_arg(counter$3,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$4=counter + 1 | 0;
            return make_invalid_arg(counter$4,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:
          if(counter < 50)
           {var counter$5=counter + 1 | 0;
            return make_invalid_arg(counter$5,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 3:
          if(counter < 50)
           {var counter$6=counter + 1 | 0;
            return make_invalid_arg(counter$6,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 4:
          if(counter < 50)
           {var counter$7=counter + 1 | 0;
            return make_invalid_arg(counter$7,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 5:
          if(counter < 50)
           {var counter$8=counter + 1 | 0;
            return make_invalid_arg(counter$8,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 6:
          if(counter < 50)
           {var counter$9=counter + 1 | 0;
            return make_invalid_arg(counter$9,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 7:
          if(counter < 50)
           {var counter$10=counter + 1 | 0;
            return make_invalid_arg(counter$10,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 8:
          if(counter < 50)
           {var counter$11=counter + 1 | 0;
            return make_invalid_arg(counter$11,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 9:
          var fmtty=ign[2];
          if(counter < 50)
           {var counter$14=counter + 1 | 0;
            return make_from_fmtty$0(counter$14,k,acc,fmtty,fmt)}
          return caml_trampoline_return(make_from_fmtty$0,[0,k,acc,fmtty,fmt]);
         case 10:
          if(counter < 50)
           {var counter$12=counter + 1 | 0;
            return make_invalid_arg(counter$12,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         default:
          if(counter < 50)
           {var counter$13=counter + 1 | 0;
            return make_invalid_arg(counter$13,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}}
    function make_from_fmtty$0(counter,k,acc,fmtty,fmt)
     {if(typeof fmtty === "number")
       {if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return make_invalid_arg(counter$0,k,acc,fmt)}
        return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(fmtty[0])
        {case 0:
          var rest=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest,fmt)};
         case 1:
          var rest$0=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$0,fmt)};
         case 2:
          var rest$1=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$1,fmt)};
         case 3:
          var rest$2=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$2,fmt)};
         case 4:
          var rest$3=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$3,fmt)};
         case 5:
          var rest$4=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$4,fmt)};
         case 6:
          var rest$5=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$5,fmt)};
         case 7:
          var rest$6=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$6,fmt)};
         case 8:
          var rest$7=fmtty[2];
          return function(param){return make_from_fmtty(k,acc,rest$7,fmt)};
         case 9:
          var
           rest$8=fmtty[3],
           ty2=fmtty[2],
           ty1=fmtty[1],
           ty=trans(symm(ty1),ty2);
          return function(param)
           {return make_from_fmtty(k,acc,concat_fmtty(ty,rest$8),fmt)};
         case 10:
          var rest$9=fmtty[1];
          return function(param,_ra_)
           {return make_from_fmtty(k,acc,rest$9,fmt)};
         case 11:
          var rest$10=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$10,fmt)};
         case 12:
          var rest$11=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$11,fmt)};
         case 13:throw [0,Assert_failure,_ap_];
         default:throw [0,Assert_failure,_aq_]}}
    function make_invalid_arg(counter,k,acc,fmt)
     {var _q$_=[8,acc,cst_Printf_bad_conversion$0];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_q$_,fmt)}
      return caml_trampoline_return(make_printf$0,[0,k,_q$_,fmt])}
    function make_custom$0(counter,k,acc,rest,arity,f)
     {if(arity)
       {var arity$0=arity[1];
        return function(x)
         {return make_custom(k,acc,rest,arity$0,caml_call1(f,x))}}
      var _q__=[4,acc,f];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_q__,rest)}
      return caml_trampoline_return(make_printf$0,[0,k,_q__,rest])}
    function make_printf(k,acc,fmt)
     {return caml_trampoline(make_printf$0(0,k,acc,fmt))}
    function make_ignored_param(k,acc,ign,fmt)
     {return caml_trampoline(make_ignored_param$0(0,k,acc,ign,fmt))}
    function make_from_fmtty(k,acc,fmtty,fmt)
     {return caml_trampoline(make_from_fmtty$0(0,k,acc,fmtty,fmt))}
    function make_custom(k,acc,rest,arity,f)
     {return caml_trampoline(make_custom$0(0,k,acc,rest,arity,f))}
    function fn_of_padding_precision(k,o,fmt,pad,prec)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(0 === prec)
           {var _qG_=make_iprintf(k,o,fmt);return function(_qY_){return _qG_}}
          var _qH_=make_iprintf(k,o,fmt),_qI_=function(_qX_){return _qH_};
          return function(_qW_){return _qI_}}
        var _qJ_=make_iprintf(k,o,fmt);
        return function(_qV_){return _qJ_}}
      else
       {if(0 === pad[0])
         {if(typeof prec === "number")
           {if(0 === prec)
             {var _qK_=make_iprintf(k,o,fmt);
              return function(_q9_){return _qK_}}
            var _qL_=make_iprintf(k,o,fmt),_qM_=function(_q8_){return _qL_};
            return function(_q7_){return _qM_}}
          var _qN_=make_iprintf(k,o,fmt);
          return function(_q6_){return _qN_}}
        if(typeof prec === "number")
         {if(0 === prec)
           {var _qO_=make_iprintf(k,o,fmt),_qP_=function(_q5_){return _qO_};
            return function(_q4_){return _qP_}}
          var
           _qQ_=make_iprintf(k,o,fmt),
           _qR_=function(_q3_){return _qQ_},
           _qS_=function(_q2_){return _qR_};
          return function(_q1_){return _qS_}}
        var _qT_=make_iprintf(k,o,fmt),_qU_=function(_q0_){return _qT_};
        return function(_qZ_){return _qU_}}}
    function make_iprintf$0(counter,k,o,fmt)
     {var k$0=k,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,o);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1],_pX_=make_iprintf(k$0,o,rest);
           return function(_qF_){return _pX_};
          case 1:
           var rest$0=fmt$0[1],_pY_=make_iprintf(k$0,o,rest$0);
           return function(_qE_){return _pY_};
          case 2:
           var _pZ_=fmt$0[1];
           if(typeof _pZ_ === "number")
            {var rest$1=fmt$0[2],_p0_=make_iprintf(k$0,o,rest$1);
             return function(_qA_){return _p0_}}
           else
            {if(0 === _pZ_[0])
              {var rest$2=fmt$0[2],_p1_=make_iprintf(k$0,o,rest$2);
               return function(_qD_){return _p1_}}
             var
              rest$3=fmt$0[2],
              _p2_=make_iprintf(k$0,o,rest$3),
              _p3_=function(_qC_){return _p2_};
             return function(_qB_){return _p3_}}
          case 3:
           var _p4_=fmt$0[1];
           if(typeof _p4_ === "number")
            {var rest$4=fmt$0[2],_p5_=make_iprintf(k$0,o,rest$4);
             return function(_qw_){return _p5_}}
           else
            {if(0 === _p4_[0])
              {var rest$5=fmt$0[2],_p6_=make_iprintf(k$0,o,rest$5);
               return function(_qz_){return _p6_}}
             var
              rest$6=fmt$0[2],
              _p7_=make_iprintf(k$0,o,rest$6),
              _p8_=function(_qy_){return _p7_};
             return function(_qx_){return _p8_}}
          case 4:
           var rest$7=fmt$0[4],prec=fmt$0[3],pad=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$7,pad,prec);
          case 5:
           var rest$8=fmt$0[4],prec$0=fmt$0[3],pad$0=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$8,pad$0,prec$0);
          case 6:
           var rest$9=fmt$0[4],prec$1=fmt$0[3],pad$1=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$9,pad$1,prec$1);
          case 7:
           var rest$10=fmt$0[4],prec$2=fmt$0[3],pad$2=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$10,pad$2,prec$2);
          case 8:
           var rest$11=fmt$0[4],prec$3=fmt$0[3],pad$3=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$11,pad$3,prec$3);
          case 9:
           var _p9_=fmt$0[1];
           if(typeof _p9_ === "number")
            {var rest$12=fmt$0[2],_p__=make_iprintf(k$0,o,rest$12);
             return function(_qs_){return _p__}}
           else
            {if(0 === _p9_[0])
              {var rest$13=fmt$0[2],_p$_=make_iprintf(k$0,o,rest$13);
               return function(_qv_){return _p$_}}
             var
              rest$14=fmt$0[2],
              _qa_=make_iprintf(k$0,o,rest$14),
              _qb_=function(_qu_){return _qa_};
             return function(_qt_){return _qb_}}
          case 10:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 11:var fmt$2=fmt$0[2],fmt$0=fmt$2;continue;
          case 12:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 13:
           var rest$15=fmt$0[3],_qc_=make_iprintf(k$0,o,rest$15);
           return function(_qr_){return _qc_};
          case 14:
           var rest$16=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_iprintf(k$0,o,concat_fmt(recast(fmt,fmtty),rest$16))};
          case 15:
           var
            rest$17=fmt$0[1],
            _qd_=make_iprintf(k$0,o,rest$17),
            _qe_=function(_qq_){return _qd_};
           return function(_qp_){return _qe_};
          case 16:
           var rest$18=fmt$0[1],_qf_=make_iprintf(k$0,o,rest$18);
           return function(_qo_){return _qf_};
          case 17:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 18:
           var _qg_=fmt$0[1];
           if(0 === _qg_[0])
            {var
              rest$19=fmt$0[2],
              match=_qg_[1],
              fmt$5=match[1],
              k$3=
               function(k,rest)
                {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
              k$1=k$3(k$0,rest$19),
              k$0=k$1,
              fmt$0=fmt$5;
             continue}
           var
            rest$20=fmt$0[2],
            match$0=_qg_[1],
            fmt$6=match$0[1],
            k$4=
             function(k,rest)
              {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
            k$2=k$4(k$0,rest$20),
            k$0=k$2,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_ar_];
          case 20:
           var rest$21=fmt$0[3],_qh_=make_iprintf(k$0,o,rest$21);
           return function(_qn_){return _qh_};
          case 21:
           var rest$22=fmt$0[2],_qi_=make_iprintf(k$0,o,rest$22);
           return function(_qm_){return _qi_};
          case 22:
           var rest$23=fmt$0[1],_qj_=make_iprintf(k$0,o,rest$23);
           return function(_ql_){return _qj_};
          case 23:
           var rest$24=fmt$0[2],ign=fmt$0[1],_qk_=0;
           return make_ignored_param
                   (function(param){return caml_call1(k$0,o)},_qk_,ign,rest$24);
          default:
           var rest$25=fmt$0[3],arity=fmt$0[1];
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return fn_of_custom_arity$0(counter$0,k$0,o,rest$25,arity)}
           return caml_trampoline_return
                   (fn_of_custom_arity$0,[0,k$0,o,rest$25,arity])}}
    function fn_of_custom_arity$0(counter,k,o,fmt,param)
     {if(param)
       {var arity=param[1],_pV_=fn_of_custom_arity(k,o,fmt,arity);
        return function(_pW_){return _pV_}}
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_iprintf$0(counter$0,k,o,fmt)}
      return caml_trampoline_return(make_iprintf$0,[0,k,o,fmt])}
    function make_iprintf(k,o,fmt)
     {return caml_trampoline(make_iprintf$0(0,k,o,fmt))}
    function fn_of_custom_arity(k,o,fmt,param)
     {return caml_trampoline(fn_of_custom_arity$0(0,k,o,fmt,param))}
    function output_acc(o,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           output_acc(o,p);
           return output_string(o,s);
          case 1:
           var _pT_=acc$0[2],_pU_=acc$0[1];
           if(0 === _pT_[0])
            {var acc$1=_pT_[1];
             output_acc(o,_pU_);
             output_string(o,cst$29);
             var acc$0=acc$1;
             continue}
           var acc$2=_pT_[1];
           output_acc(o,_pU_);
           output_string(o,cst$30);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           output_acc(o,p$2);
           return caml_call1(f,o);
          case 7:var p$3=acc$0[1];output_acc(o,p$3);return caml_ml_flush(o);
          case 8:
           var msg=acc$0[2],p$4=acc$0[1];
           output_acc(o,p$4);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           output_acc(o,p$0);
           return output_string(o,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];
           output_acc(o,p$1);
           return caml_ml_output_char(o,c)}}
    function bufput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           bufput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _pR_=acc$0[2],_pS_=acc$0[1];
           if(0 === _pR_[0])
            {var acc$1=_pR_[1];
             bufput_acc(b,_pS_);
             add_string(b,cst$31);
             var acc$0=acc$1;
             continue}
           var acc$2=_pR_[1];
           bufput_acc(b,_pS_);
           add_string(b,cst$32);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           bufput_acc(b,p$2);
           return caml_call1(f,b);
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           bufput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           bufput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];bufput_acc(b,p$1);return add_char(b,c)}}
    function strput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           strput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _pP_=acc$0[2],_pQ_=acc$0[1];
           if(0 === _pP_[0])
            {var acc$1=_pP_[1];
             strput_acc(b,_pQ_);
             add_string(b,cst$33);
             var acc$0=acc$1;
             continue}
           var acc$2=_pP_[1];
           strput_acc(b,_pQ_);
           add_string(b,cst$34);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           strput_acc(b,p$2);
           return add_string(b,caml_call1(f,0));
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           strput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           strput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];strput_acc(b,p$1);return add_char(b,c)}}
    function failwith_message(param)
     {var fmt=param[1],buf=create$2(256);
      function k(acc){strput_acc(buf,acc);return failwith(contents(buf))}
      return make_printf(k,0,fmt)}
    function open_box_of_string(str)
     {if(caml_string_equal(str,cst$35))return _as_;
      var len=caml_ml_string_length(str);
      function invalid_box(param)
       {return caml_call1(failwith_message(_at_),str)}
      function parse_spaces(i)
       {var i$0=i;
        for(;;)
         {if(i$0 === len)return i$0;
          var match=caml_string_get(str,i$0);
          if(9 !== match)if(32 !== match)return i$0;
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function parse_lword(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var match=caml_string_get(str,j$0),switcher=match - 97 | 0;
          if(25 < switcher >>> 0)return j$0;
          var j$1=j$0 + 1 | 0,j$0=j$1;
          continue}}
      function parse_int(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var
           match=caml_string_get(str,j$0),
           switch$0=48 <= match?58 <= match?0:1:45 === match?1:0;
          if(switch$0){var j$1=j$0 + 1 | 0,j$0=j$1;continue}
          return j$0}}
      var
       wstart=parse_spaces(0),
       wend=parse_lword(wstart,wstart),
       box_name=sub$0(str,wstart,wend - wstart | 0),
       nstart=parse_spaces(wend),
       nend=parse_int(nstart,nstart);
      if(nstart === nend)
       var indent=0;
      else
       try
        {var
          _pN_=caml_int_of_string(sub$0(str,nstart,nend - nstart | 0)),
          indent=_pN_}
       catch(_pO_)
        {_pO_ = caml_wrap_exception(_pO_);
         if(_pO_[1] !== Failure)throw _pO_;
         var indent=invalid_box(0)}
      var exp_end=parse_spaces(nend);
      if(exp_end !== len)invalid_box(0);
      if(caml_string_notequal(box_name,cst$36))
       if(caml_string_notequal(box_name,cst_b$0))
        if(caml_string_notequal(box_name,cst_h))
         if(caml_string_notequal(box_name,cst_hov))
          if(caml_string_notequal(box_name,cst_hv))
           if(caml_string_notequal(box_name,cst_v))
            var box_type=invalid_box(0),switch$0=1;
           else
            var box_type=1,switch$0=1;
          else
           var box_type=2,switch$0=1;
         else
          var box_type=3,switch$0=1;
        else
         var box_type=0,switch$0=1;
       else
        var switch$0=0;
      else
       var switch$0=0;
      if(! switch$0)var box_type=4;
      return [0,indent,box_type]}
    function make_padding_fmt_ebb(pad,fmt)
     {if(typeof pad === "number")
       return [0,0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],fmt]}}
    function make_padprec_fmt_ebb(pad,prec,fmt)
     {if(typeof prec === "number")
       var match=0 === prec?[0,0,fmt]:[0,1,fmt];
      else
       var p=prec[1],match=[0,[0,p],fmt];
      var prec$0=match[1];
      if(typeof pad === "number")
       return [0,0,prec$0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],prec$0,fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],prec$0,fmt]}}
    function fmt_ebb_of_string(legacy_behavior,str)
     {if(legacy_behavior)
       var flag=legacy_behavior[1],legacy_behavior$0=flag;
      else
       var legacy_behavior$0=1;
      function invalid_format_message(str_ind,msg)
       {return caml_call3(failwith_message(_au_),str,str_ind,msg)}
      function unexpected_end_of_format(end_ind)
       {return invalid_format_message(end_ind,cst_unexpected_end_of_format)}
      function invalid_format_without(str_ind,c,s)
       {return caml_call4(failwith_message(_av_),str,str_ind,c,s)}
      function expected_character(str_ind,expected,read)
       {return caml_call4(failwith_message(_aw_),str,str_ind,expected,read)}
      function add_literal(lit_start,str_ind,fmt)
       {var size=str_ind - lit_start | 0;
        return 0 === size
                ?[0,fmt]
                :1 === size
                  ?[0,[12,caml_string_get(str,lit_start),fmt]]
                  :[0,[11,sub$0(str,lit_start,size),fmt]]}
      function parse(lit_start,end_ind)
       {var str_ind=lit_start;
        for(;;)
         {if(str_ind === end_ind)return add_literal(lit_start,str_ind,0);
          var match=caml_string_get(str,str_ind);
          if(37 === match)
           {var str_ind$2=str_ind + 1 | 0;
            if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
            var
             match$1=caml_string_get(str,str_ind$2),
             _pM_=
              95 === match$1
               ?parse_flags(str_ind,str_ind$2 + 1 | 0,end_ind,1)
               :parse_flags(str_ind,str_ind$2,end_ind,0),
             fmt_rest=_pM_[1];
            return add_literal(lit_start,str_ind,fmt_rest)}
          if(64 === match)
           {var str_ind$0=str_ind + 1 | 0;
            if(str_ind$0 === end_ind)
             var match$0=_aI_;
            else
             {var c=caml_string_get(str,str_ind$0);
              if(65 <= c)
               if(94 <= c)
                {var switcher=c - 123 | 0;
                 if(2 < switcher >>> 0)
                  var switch$0=0;
                 else
                  switch(switcher)
                   {case 0:
                     var
                      match$0=parse_tag(1,str_ind$0 + 1 | 0,end_ind),
                      switch$0=1;
                     break;
                    case 1:var switch$0=0;break;
                    default:
                     var
                      match$3=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$2=match$3[1],
                      match$0=[0,[17,1,fmt_rest$2]],
                      switch$0=1}}
               else
                if(91 <= c)
                 {var switcher$0=c - 91 | 0;
                  switch(switcher$0)
                   {case 0:
                     var
                      match$0=parse_tag(0,str_ind$0 + 1 | 0,end_ind),
                      switch$0=1;
                     break;
                    case 1:var switch$0=0;break;
                    default:
                     var
                      match$4=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$3=match$4[1],
                      match$0=[0,[17,0,fmt_rest$3]],
                      switch$0=1}}
                else
                 var switch$0=0;
              else
               if(10 === c)
                var
                 match$5=parse(str_ind$0 + 1 | 0,end_ind),
                 fmt_rest$4=match$5[1],
                 match$0=[0,[17,3,fmt_rest$4]],
                 switch$0=1;
               else
                if(32 <= c)
                 {var switcher$1=c - 32 | 0;
                  switch(switcher$1)
                   {case 0:
                     var
                      match$6=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$5=match$6[1],
                      match$0=[0,[17,_aJ_,fmt_rest$5]],
                      switch$0=1;
                     break;
                    case 5:
                     if((str_ind$0 + 1 | 0) < end_ind)
                      if(37 === caml_string_get(str,str_ind$0 + 1 | 0))
                       var
                        match$7=parse(str_ind$0 + 2 | 0,end_ind),
                        fmt_rest$6=match$7[1],
                        match$0=[0,[17,6,fmt_rest$6]],
                        switch$0=1,
                        switch$1=0;
                      else
                       var switch$1=1;
                     else
                      var switch$1=1;
                     if(switch$1)
                      var
                       match$8=parse(str_ind$0,end_ind),
                       fmt_rest$7=match$8[1],
                       match$0=[0,[12,64,fmt_rest$7]],
                       switch$0=1;
                     break;
                    case 12:
                     var
                      match$9=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$8=match$9[1],
                      match$0=[0,[17,_aK_,fmt_rest$8]],
                      switch$0=1;
                     break;
                    case 14:
                     var
                      match$10=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$9=match$10[1],
                      match$0=[0,[17,4,fmt_rest$9]],
                      switch$0=1;
                     break;
                    case 27:
                     var
                      match$0=parse_good_break(str_ind$0 + 1 | 0,end_ind),
                      switch$0=1;
                     break;
                    case 28:
                     var
                      match$0=parse_magic_size(str_ind$0 + 1 | 0,end_ind),
                      switch$0=1;
                     break;
                    case 31:
                     var
                      match$11=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$10=match$11[1],
                      match$0=[0,[17,2,fmt_rest$10]],
                      switch$0=1;
                     break;
                    case 32:
                     var
                      match$12=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$11=match$12[1],
                      match$0=[0,[17,5,fmt_rest$11]],
                      switch$0=1;
                     break;
                    default:var switch$0=0}}
                else
                 var switch$0=0;
              if(! switch$0)
               var
                match$2=parse(str_ind$0 + 1 | 0,end_ind),
                fmt_rest$1=match$2[1],
                match$0=[0,[17,[2,c],fmt_rest$1]]}
            var fmt_rest$0=match$0[1];
            return add_literal(lit_start,str_ind,fmt_rest$0)}
          var str_ind$1=str_ind + 1 | 0,str_ind=str_ind$1;
          continue}}
      function parse_conversion
       (pct_ind,str_ind,end_ind,plus,hash,space,ign,pad,prec,padprec,symb)
       {var
         plus_used=[0,0],
         hash_used=[0,0],
         space_used=[0,0],
         ign_used=[0,0],
         pad_used=[0,0],
         prec_used=[0,0];
        function get_plus(param){plus_used[1] = 1;return plus}
        function get_hash(param){hash_used[1] = 1;return hash}
        function get_space(param){space_used[1] = 1;return space}
        function get_ign(param){ign_used[1] = 1;return ign}
        function get_pad(param){pad_used[1] = 1;return pad}
        function get_prec(param){prec_used[1] = 1;return prec}
        function get_padprec(param){pad_used[1] = 1;return padprec}
        function get_int_pad(param)
         {var pad=get_pad(0),match=get_prec(0);
          if(typeof match === "number")if(0 === match)return pad;
          if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var n=pad[2];
                return legacy_behavior$0
                        ?[0,1,n]
                        :incompatible_flag(pct_ind,str_ind,48,cst_precision$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aC_
                      :incompatible_flag(pct_ind,str_ind,48,cst_precision$1)
                    :pad}}
        function check_no_0(symb,pad)
         {if(typeof pad === "number")
           return pad;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var width=pad[2];
                return legacy_behavior$0
                        ?[0,1,width]
                        :incompatible_flag(pct_ind,str_ind,symb,cst_0$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aD_
                      :incompatible_flag(pct_ind,str_ind,symb,cst_0$1)
                    :pad}}
        function opt_of_pad(c,pad)
         {if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             switch(pad[1])
              {case 0:
                var width=pad[2];
                return legacy_behavior$0
                        ?[0,width]
                        :incompatible_flag(pct_ind,str_ind,c,cst$37);
               case 1:var width$0=pad[2];return [0,width$0];
               default:
                var width$1=pad[2];
                return legacy_behavior$0
                        ?[0,width$1]
                        :incompatible_flag(pct_ind,str_ind,c,cst_0$2)}
            return incompatible_flag(pct_ind,str_ind,c,cst$38)}}
        function get_pad_opt(c){return opt_of_pad(c,get_pad(0))}
        function get_padprec_opt(c){return opt_of_pad(c,get_padprec(0))}
        if(124 <= symb)
         var switch$0=0;
        else
         switch(symb)
          {case 33:
            var
             match$6=parse(str_ind,end_ind),
             fmt_rest$5=match$6[1],
             fmt_result=[0,[10,fmt_rest$5]],
             switch$0=1;
            break;
           case 40:
            var
             sub_end=search_subformat_end(str_ind,end_ind,41),
             match$8=parse(sub_end + 2 | 0,end_ind),
             fmt_rest$7=match$8[1],
             match$9=parse(str_ind,sub_end),
             sub_fmt=match$9[1],
             sub_fmtty=fmtty_of_fmt(sub_fmt);
            if(get_ign(0))
             var
              ignored$2=[9,get_pad_opt(95),sub_fmtty],
              _pl_=[0,[23,ignored$2,fmt_rest$7]];
            else
             var _pl_=[0,[14,get_pad_opt(40),sub_fmtty,fmt_rest$7]];
            var fmt_result=_pl_,switch$0=1;
            break;
           case 44:var fmt_result=parse(str_ind,end_ind),switch$0=1;break;
           case 67:
            var
             match$12=parse(str_ind,end_ind),
             fmt_rest$10=match$12[1],
             _pn_=get_ign(0)?[0,[23,1,fmt_rest$10]]:[0,[1,fmt_rest$10]],
             fmt_result=_pn_,
             switch$0=1;
            break;
           case 78:
            var
             match$16=parse(str_ind,end_ind),
             fmt_rest$14=match$16[1],
             counter$0=2;
            if(get_ign(0))
             var ignored$6=[11,counter$0],_pt_=[0,[23,ignored$6,fmt_rest$14]];
            else
             var _pt_=[0,[21,counter$0,fmt_rest$14]];
            var fmt_result=_pt_,switch$0=1;
            break;
           case 83:
            var
             pad$6=check_no_0(symb,get_padprec(0)),
             match$17=parse(str_ind,end_ind),
             fmt_rest$15=match$17[1];
            if(get_ign(0))
             var
              ignored$7=[1,get_padprec_opt(95)],
              _pu_=[0,[23,ignored$7,fmt_rest$15]];
            else
             var
              match$18=make_padding_fmt_ebb(pad$6,fmt_rest$15),
              fmt_rest$16=match$18[2],
              pad$7=match$18[1],
              _pu_=[0,[3,pad$7,fmt_rest$16]];
            var fmt_result=_pu_,switch$0=1;
            break;
           case 91:
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var
             char_set=create_char_set(0),
             add_char=function(c){return add_in_char_set(char_set,c)},
             add_range=
              function(c$0,c)
               {if(! (c < c$0))
                 {var i=c$0;
                  for(;;)
                   {add_in_char_set(char_set,char_of_int(i));
                    var _pL_=i + 1 | 0;
                    if(c !== i){var i=_pL_;continue}
                    break}}
                return 0},
             fail_single_percent=
              function(str_ind)
               {return caml_call2(failwith_message(_aM_),str,str_ind)},
             parse_char_set_content=
              function(counter,str_ind,end_ind)
               {var str_ind$0=str_ind;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c=caml_string_get(str,str_ind$0);
                  if(45 === c)
                   {add_char(45);
                    var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
                    continue}
                  if(93 === c)return str_ind$0 + 1 | 0;
                  var _pK_=str_ind$0 + 1 | 0;
                  if(counter < 50)
                   {var counter$0=counter + 1 | 0;
                    return parse_char_set_after_char$0(counter$0,_pK_,end_ind,c)}
                  return caml_trampoline_return
                          (parse_char_set_after_char$0,[0,_pK_,end_ind,c])}},
             parse_char_set_after_char$0=
              function(counter,str_ind,end_ind,c)
               {var str_ind$0=str_ind,c$0=c;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c$1=caml_string_get(str,str_ind$0);
                  if(46 <= c$1)
                   if(64 === c$1)
                    var switch$0=0;
                   else
                    {if(93 === c$1){add_char(c$0);return str_ind$0 + 1 | 0}
                     var switch$0=1}
                  else
                   if(37 === c$1)
                    var switch$0=0;
                   else
                    {if(45 <= c$1)
                      {var str_ind$2=str_ind$0 + 1 | 0;
                       if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
                       var c$2=caml_string_get(str,str_ind$2);
                       if(37 === c$2)
                        {if((str_ind$2 + 1 | 0) === end_ind)
                          unexpected_end_of_format(end_ind);
                         var c$3=caml_string_get(str,str_ind$2 + 1 | 0);
                         if(37 !== c$3)
                          if(64 !== c$3)return fail_single_percent(str_ind$2);
                         add_range(c$0,c$3);
                         var _pI_=str_ind$2 + 2 | 0;
                         if(counter < 50)
                          {var counter$2=counter + 1 | 0;
                           return parse_char_set_content(counter$2,_pI_,end_ind)}
                         return caml_trampoline_return
                                 (parse_char_set_content,[0,_pI_,end_ind])}
                       if(93 === c$2)
                        {add_char(c$0);add_char(45);return str_ind$2 + 1 | 0}
                       add_range(c$0,c$2);
                       var _pJ_=str_ind$2 + 1 | 0;
                       if(counter < 50)
                        {var counter$1=counter + 1 | 0;
                         return parse_char_set_content(counter$1,_pJ_,end_ind)}
                       return caml_trampoline_return
                               (parse_char_set_content,[0,_pJ_,end_ind])}
                     var switch$0=1}
                  if(! switch$0)
                   if(37 === c$0)
                    {add_char(c$1);
                     var _pH_=str_ind$0 + 1 | 0;
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return parse_char_set_content(counter$0,_pH_,end_ind)}
                     return caml_trampoline_return
                             (parse_char_set_content,[0,_pH_,end_ind])}
                  if(37 === c$0)fail_single_percent(str_ind$0);
                  add_char(c$0);
                  var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,c$0=c$1;
                  continue}},
             parse_char_set_after_char=
              function(str_ind,end_ind,c)
               {return caml_trampoline
                        (parse_char_set_after_char$0(0,str_ind,end_ind,c))};
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var match$31=caml_string_get(str,str_ind);
            if(94 === match$31)
             var str_ind$0=str_ind + 1 | 0,str_ind$1=str_ind$0,reverse=1;
            else
             var str_ind$1=str_ind,reverse=0;
            if(str_ind$1 === end_ind)unexpected_end_of_format(end_ind);
            var
             c=caml_string_get(str,str_ind$1),
             next_ind=parse_char_set_after_char(str_ind$1 + 1 | 0,end_ind,c),
             char_set$0=freeze_char_set(char_set),
             char_set$1=reverse?rev_char_set(char_set$0):char_set$0,
             match$21=parse(next_ind,end_ind),
             fmt_rest$19=match$21[1];
            if(get_ign(0))
             var
              ignored$9=[10,get_pad_opt(95),char_set$1],
              _pz_=[0,[23,ignored$9,fmt_rest$19]];
            else
             var _pz_=[0,[20,get_pad_opt(91),char_set$1,fmt_rest$19]];
            var fmt_result=_pz_,switch$0=1;
            break;
           case 97:
            var
             match$22=parse(str_ind,end_ind),
             fmt_rest$20=match$22[1],
             fmt_result=[0,[15,fmt_rest$20]],
             switch$0=1;
            break;
           case 99:
            var
             char_format=
              function(fmt_rest)
               {return get_ign(0)?[0,[23,0,fmt_rest]]:[0,[0,fmt_rest]]},
             match$23=parse(str_ind,end_ind),
             fmt_rest$21=match$23[1],
             match$24=get_pad_opt(99);
            if(match$24)
             {if(0 === match$24[1])
               var
                _pA_=get_ign(0)?[0,[23,3,fmt_rest$21]]:[0,[22,fmt_rest$21]],
                _pB_=_pA_;
              else
               var
                _pB_=
                 legacy_behavior$0
                  ?char_format(fmt_rest$21)
                  :invalid_format_message
                    (str_ind,
                     cst_non_zero_widths_are_unsupported_for_c_conversions);
              var _pC_=_pB_}
            else
             var _pC_=char_format(fmt_rest$21);
            var fmt_result=_pC_,switch$0=1;
            break;
           case 114:
            var
             match$25=parse(str_ind,end_ind),
             fmt_rest$22=match$25[1],
             _pD_=get_ign(0)?[0,[23,2,fmt_rest$22]]:[0,[19,fmt_rest$22]],
             fmt_result=_pD_,
             switch$0=1;
            break;
           case 115:
            var
             pad$9=check_no_0(symb,get_padprec(0)),
             match$26=parse(str_ind,end_ind),
             fmt_rest$23=match$26[1];
            if(get_ign(0))
             var
              ignored$10=[0,get_padprec_opt(95)],
              _pE_=[0,[23,ignored$10,fmt_rest$23]];
            else
             var
              match$27=make_padding_fmt_ebb(pad$9,fmt_rest$23),
              fmt_rest$24=match$27[2],
              pad$10=match$27[1],
              _pE_=[0,[2,pad$10,fmt_rest$24]];
            var fmt_result=_pE_,switch$0=1;
            break;
           case 116:
            var
             match$28=parse(str_ind,end_ind),
             fmt_rest$25=match$28[1],
             fmt_result=[0,[16,fmt_rest$25]],
             switch$0=1;
            break;
           case 123:
            var
             sub_end$0=search_subformat_end(str_ind,end_ind,125),
             match$29=parse(str_ind,sub_end$0),
             sub_fmt$0=match$29[1],
             match$30=parse(sub_end$0 + 2 | 0,end_ind),
             fmt_rest$26=match$30[1],
             sub_fmtty$0=fmtty_of_fmt(sub_fmt$0);
            if(get_ign(0))
             var
              ignored$11=[8,get_pad_opt(95),sub_fmtty$0],
              _pF_=[0,[23,ignored$11,fmt_rest$26]];
            else
             var _pF_=[0,[13,get_pad_opt(123),sub_fmtty$0,fmt_rest$26]];
            var fmt_result=_pF_,switch$0=1;
            break;
           case 66:
           case 98:
            var
             pad$3=check_no_0(symb,get_padprec(0)),
             match$10=parse(str_ind,end_ind),
             fmt_rest$8=match$10[1];
            if(get_ign(0))
             var
              ignored$3=[7,get_padprec_opt(95)],
              _pm_=[0,[23,ignored$3,fmt_rest$8]];
            else
             var
              match$11=make_padding_fmt_ebb(pad$3,fmt_rest$8),
              fmt_rest$9=match$11[2],
              pad$4=match$11[1],
              _pm_=[0,[9,pad$4,fmt_rest$9]];
            var fmt_result=_pm_,switch$0=1;
            break;
           case 37:
           case 64:
            var
             match$7=parse(str_ind,end_ind),
             fmt_rest$6=match$7[1],
             fmt_result=[0,[12,symb,fmt_rest$6]],
             switch$0=1;
            break;
           case 76:
           case 108:
           case 110:
            if(str_ind === end_ind)
             var switch$1=1;
            else
             {var symb$0=caml_string_get(str,str_ind),_pG_=symb$0 - 88 | 0;
              if(32 < _pG_ >>> 0)
               var switch$2=0;
              else
               switch(_pG_)
                {case 0:
                 case 12:
                 case 17:
                 case 23:
                 case 29:
                 case 32:var _ps_=1,switch$2=1;break;
                 default:var switch$2=0}
              if(! switch$2)var _ps_=0;
              if(_ps_)var switch$0=0,switch$1=0;else var switch$1=1}
            if(switch$1)
             {var match$15=parse(str_ind,end_ind),fmt_rest$13=match$15[1];
              if(108 <= symb)
               if(111 <= symb)
                var switch$3=0;
               else
                {var switcher$0=symb - 108 | 0;
                 switch(switcher$0)
                  {case 0:var counter=0,switch$3=1;break;
                   case 1:var switch$3=0;break;
                   default:var counter=1,switch$3=1}}
              else
               if(76 === symb)var counter=2,switch$3=1;else var switch$3=0;
              if(! switch$3)throw [0,Assert_failure,_aQ_];
              if(get_ign(0))
               var ignored$5=[11,counter],_pr_=[0,[23,ignored$5,fmt_rest$13]];
              else
               var _pr_=[0,[21,counter,fmt_rest$13]];
              var fmt_result=_pr_,switch$0=1}
            break;
           case 32:
           case 35:
           case 43:
           case 45:
           case 95:
            var
             fmt_result=caml_call3(failwith_message(_aH_),str,pct_ind,symb),
             switch$0=1;
            break;
           case 88:
           case 100:
           case 105:
           case 111:
           case 117:
           case 120:
            var
             _pv_=get_space(0),
             _pw_=get_hash(0),
             iconv$2=
              compute_int_conv(pct_ind,str_ind,get_plus(0),_pw_,_pv_,symb),
             match$19=parse(str_ind,end_ind),
             fmt_rest$17=match$19[1];
            if(get_ign(0))
             var
              ignored$8=[2,iconv$2,get_pad_opt(95)],
              _px_=[0,[23,ignored$8,fmt_rest$17]];
            else
             var
              _py_=get_prec(0),
              match$20=make_padprec_fmt_ebb(get_int_pad(0),_py_,fmt_rest$17),
              fmt_rest$18=match$20[3],
              prec$4=match$20[2],
              pad$8=match$20[1],
              _px_=[0,[4,iconv$2,pad$8,prec$4,fmt_rest$18]];
            var fmt_result=_px_,switch$0=1;
            break;
           case 69:
           case 70:
           case 71:
           case 72:
           case 101:
           case 102:
           case 103:
           case 104:
            var
             space$1=get_space(0),
             plus$2=get_plus(0),
             plus$3=plus$2,
             space$2=space$1;
            for(;;)
             {if(0 === plus$3)
               if(0 === space$2)
                {if(73 <= symb)
                  {var switcher$1=symb - 101 | 0;
                   if(3 < switcher$1 >>> 0)
                    var switch$4=0;
                   else
                    switch(switcher$1)
                     {case 0:var fconv=3,switch$4=1;break;
                      case 1:var fconv=0,switch$4=1;break;
                      case 2:var fconv=9,switch$4=1;break;
                      default:var fconv=16,switch$4=1}}
                 else
                  if(69 <= symb)
                   {var switcher$2=symb - 69 | 0;
                    switch(switcher$2)
                     {case 0:var fconv=6,switch$4=1;break;
                      case 1:var fconv=15,switch$4=1;break;
                      case 2:var fconv=12,switch$4=1;break;
                      default:var fconv=19,switch$4=1}}
                  else
                   var switch$4=0;
                 if(! switch$4)throw [0,Assert_failure,_aS_]}
               else
                {if(73 <= symb)
                  {var switcher$3=symb - 101 | 0;
                   if(3 < switcher$3 >>> 0)
                    var switch$5=0;
                   else
                    switch(switcher$3)
                     {case 0:var fconv=5,switch$5=1;break;
                      case 1:var fconv=2,switch$5=1;break;
                      case 2:var fconv=11,switch$5=1;break;
                      default:var fconv=18,switch$5=1}}
                 else
                  if(69 <= symb)
                   {var switcher$4=symb - 69 | 0;
                    switch(switcher$4)
                     {case 0:var fconv=8,switch$5=1;break;
                      case 1:var switch$5=0;break;
                      case 2:var fconv=14,switch$5=1;break;
                      default:var fconv=21,switch$5=1}}
                  else
                   var switch$5=0;
                 if(! switch$5)
                  {if(legacy_behavior$0){var space$2=0;continue}
                   var fconv=incompatible_flag(pct_ind,str_ind,symb,cst$49)}}
              else
               if(0 === space$2)
                {if(73 <= symb)
                  {var switcher$5=symb - 101 | 0;
                   if(3 < switcher$5 >>> 0)
                    var switch$6=0;
                   else
                    switch(switcher$5)
                     {case 0:var fconv=4,switch$6=1;break;
                      case 1:var fconv=1,switch$6=1;break;
                      case 2:var fconv=10,switch$6=1;break;
                      default:var fconv=17,switch$6=1}}
                 else
                  if(69 <= symb)
                   {var switcher$6=symb - 69 | 0;
                    switch(switcher$6)
                     {case 0:var fconv=7,switch$6=1;break;
                      case 1:var switch$6=0;break;
                      case 2:var fconv=13,switch$6=1;break;
                      default:var fconv=20,switch$6=1}}
                  else
                   var switch$6=0;
                 if(! switch$6)
                  {if(legacy_behavior$0){var plus$3=0;continue}
                   var fconv=incompatible_flag(pct_ind,str_ind,symb,cst$50)}}
               else
                {if(legacy_behavior$0){var space$2=0;continue}
                 var fconv=incompatible_flag(pct_ind,str_ind,32,cst$51)}
              var match$13=parse(str_ind,end_ind),fmt_rest$11=match$13[1];
              if(get_ign(0))
               {var match=get_prec(0);
                if(typeof match === "number")
                 var
                  _po_=
                   0 === match?0:incompatible_flag(pct_ind,str_ind,95,cst$39);
                else
                 var ndec=match[1],_po_=[0,ndec];
                var
                 ignored$4=[6,get_pad_opt(95),_po_],
                 _pp_=[0,[23,ignored$4,fmt_rest$11]]}
              else
               var
                _pq_=get_prec(0),
                match$14=make_padprec_fmt_ebb(get_pad(0),_pq_,fmt_rest$11),
                fmt_rest$12=match$14[3],
                prec$3=match$14[2],
                pad$5=match$14[1],
                _pp_=[0,[8,fconv,pad$5,prec$3,fmt_rest$12]];
              var fmt_result=_pp_,switch$0=1;
              break}
            break;
           default:var switch$0=0}
        if(! switch$0)
         {if(108 <= symb)
           if(111 <= symb)
            var switch$7=0;
           else
            {var switcher=symb - 108 | 0;
             switch(switcher)
              {case 0:
                var
                 _o7_=caml_string_get(str,str_ind),
                 _o8_=get_space(0),
                 _o9_=get_hash(0),
                 iconv=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_o9_,_o8_,_o7_),
                 match$0=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest=match$0[1];
                if(get_ign(0))
                 var
                  ignored=[3,iconv,get_pad_opt(95)],
                  _o__=[0,[23,ignored,fmt_rest]];
                else
                 var
                  _pa_=get_prec(0),
                  match$1=make_padprec_fmt_ebb(get_int_pad(0),_pa_,fmt_rest),
                  fmt_rest$0=match$1[3],
                  prec$0=match$1[2],
                  pad$0=match$1[1],
                  _o__=[0,[5,iconv,pad$0,prec$0,fmt_rest$0]];
                var _o$_=_o__,switch$8=1;
                break;
               case 1:var switch$7=0,switch$8=0;break;
               default:
                var
                 _pb_=caml_string_get(str,str_ind),
                 _pc_=get_space(0),
                 _pd_=get_hash(0),
                 iconv$0=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_pd_,_pc_,_pb_),
                 match$2=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest$1=match$2[1];
                if(get_ign(0))
                 var
                  ignored$0=[4,iconv$0,get_pad_opt(95)],
                  _pe_=[0,[23,ignored$0,fmt_rest$1]];
                else
                 var
                  _pf_=get_prec(0),
                  match$3=make_padprec_fmt_ebb(get_int_pad(0),_pf_,fmt_rest$1),
                  fmt_rest$2=match$3[3],
                  prec$1=match$3[2],
                  pad$1=match$3[1],
                  _pe_=[0,[6,iconv$0,pad$1,prec$1,fmt_rest$2]];
                var _o$_=_pe_,switch$8=1}
             if(switch$8)var fmt_result=_o$_,switch$7=1}
          else
           if(76 === symb)
            {var
              _pg_=caml_string_get(str,str_ind),
              _ph_=get_space(0),
              _pi_=get_hash(0),
              iconv$1=
               compute_int_conv
                (pct_ind,str_ind + 1 | 0,get_plus(0),_pi_,_ph_,_pg_),
              match$4=parse(str_ind + 1 | 0,end_ind),
              fmt_rest$3=match$4[1];
             if(get_ign(0))
              var
               ignored$1=[5,iconv$1,get_pad_opt(95)],
               _pj_=[0,[23,ignored$1,fmt_rest$3]];
             else
              var
               _pk_=get_prec(0),
               match$5=make_padprec_fmt_ebb(get_int_pad(0),_pk_,fmt_rest$3),
               fmt_rest$4=match$5[3],
               prec$2=match$5[2],
               pad$2=match$5[1],
               _pj_=[0,[7,iconv$1,pad$2,prec$2,fmt_rest$4]];
             var fmt_result=_pj_,switch$7=1}
           else
            var switch$7=0;
          if(! switch$7)
           var
            fmt_result=
             caml_call3(failwith_message(_aE_),str,str_ind - 1 | 0,symb)}
        if(1 - legacy_behavior$0)
         {var _oY_=1 - plus_used[1],plus$0=_oY_?plus:_oY_;
          if(plus$0)incompatible_flag(pct_ind,str_ind,symb,cst$40);
          var _oZ_=1 - hash_used[1],hash$0=_oZ_?hash:_oZ_;
          if(hash$0)incompatible_flag(pct_ind,str_ind,symb,cst$41);
          var _o0_=1 - space_used[1],space$0=_o0_?space:_o0_;
          if(space$0)incompatible_flag(pct_ind,str_ind,symb,cst$42);
          var _o1_=1 - pad_used[1],_o2_=_o1_?caml_notequal([0,pad],_aF_):_o1_;
          if(_o2_)incompatible_flag(pct_ind,str_ind,symb,cst_padding$0);
          var
           _o3_=1 - prec_used[1],
           _o4_=_o3_?caml_notequal([0,prec],_aG_):_o3_;
          if(_o4_)
           {var _o5_=ign?95:symb;
            incompatible_flag(pct_ind,str_ind,_o5_,cst_precision$2)}
          var plus$1=ign?plus:ign;
          if(plus$1)incompatible_flag(pct_ind,str_ind,95,cst$43)}
        var _o6_=1 - ign_used[1],ign$0=_o6_?ign:_o6_;
        if(ign$0)
         {var
           switch$9=
            38 <= symb
             ?44 === symb?0:64 === symb?0:1
             :33 === symb?0:37 <= symb?0:1,
           switch$10=switch$9?0:legacy_behavior$0?1:0;
          if(! switch$10)incompatible_flag(pct_ind,str_ind,symb,cst$44)}
        return fmt_result}
      function parse_after_precision
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad,match)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        function parse_conv(padprec)
         {return parse_conversion
                  (pct_ind,
                   str_ind + 1 | 0,
                   end_ind,
                   plus,
                   hash,
                   space,
                   ign,
                   pad,
                   match,
                   padprec,
                   caml_string_get(str,str_ind))}
        if(typeof pad === "number")
         {if(typeof match === "number")if(0 === match)return parse_conv(0);
          if(0 === minus)
           {if(typeof match === "number")return parse_conv(_aA_);
            var n=match[1];
            return parse_conv([0,1,n])}
          if(typeof match === "number")return parse_conv(_aB_);
          var n$0=match[1];
          return parse_conv([0,0,n$0])}
        return parse_conv(pad)}
      function parse_after_padding
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var symb=caml_string_get(str,str_ind);
        if(46 === symb)
         {var str_ind$0=str_ind + 1 | 0;
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           parse_literal=
            function(minus,str_ind)
             {var
               match=parse_positive(str_ind,end_ind,0),
               prec=match[2],
               new_ind=match[1];
              return parse_after_precision
                      (pct_ind,
                       new_ind,
                       end_ind,
                       minus,
                       plus,
                       hash,
                       space,
                       ign,
                       pad,
                       [0,prec])},
           symb$0=caml_string_get(str,str_ind$0);
          if(48 <= symb$0)
           {if(! (58 <= symb$0))return parse_literal(minus,str_ind$0)}
          else
           if(42 <= symb$0)
            {var switcher=symb$0 - 42 | 0;
             switch(switcher)
              {case 0:
                return parse_after_precision
                        (pct_ind,
                         str_ind$0 + 1 | 0,
                         end_ind,
                         minus,
                         plus,
                         hash,
                         space,
                         ign,
                         pad,
                         1);
               case 1:
               case 3:
                if(legacy_behavior$0)
                 {var
                   _oX_=str_ind$0 + 1 | 0,
                   minus$0=minus || (45 === symb$0?1:0);
                  return parse_literal(minus$0,_oX_)}
                break
               }}
          return legacy_behavior$0
                  ?parse_after_precision
                    (pct_ind,
                     str_ind$0,
                     end_ind,
                     minus,
                     plus,
                     hash,
                     space,
                     ign,
                     pad,
                     _az_)
                  :invalid_format_without(str_ind$0 - 1 | 0,46,cst_precision)}
        return parse_conversion
                (pct_ind,
                 str_ind + 1 | 0,
                 end_ind,
                 plus,
                 hash,
                 space,
                 ign,
                 pad,
                 0,
                 pad,
                 symb)}
      function parse_flags(pct_ind,str_ind,end_ind,ign)
       {var zero=[0,0],minus=[0,0],plus=[0,0],space=[0,0],hash=[0,0];
        function set_flag(str_ind,flag)
         {var _oU_=flag[1],_oV_=_oU_?1 - legacy_behavior$0:_oU_;
          if(_oV_)
           {var _oW_=caml_string_get(str,str_ind);
            caml_call3(failwith_message(_ax_),str,str_ind,_oW_)}
          flag[1] = 1;
          return 0}
        var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var match=caml_string_get(str,str_ind$0),switcher=match - 32 | 0;
          if(! (16 < switcher >>> 0))
           switch(switcher)
            {case 0:
              set_flag(str_ind$0,space);
              var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
              continue;
             case 3:
              set_flag(str_ind$0,hash);
              var str_ind$2=str_ind$0 + 1 | 0,str_ind$0=str_ind$2;
              continue;
             case 11:
              set_flag(str_ind$0,plus);
              var str_ind$3=str_ind$0 + 1 | 0,str_ind$0=str_ind$3;
              continue;
             case 13:
              set_flag(str_ind$0,minus);
              var str_ind$4=str_ind$0 + 1 | 0,str_ind$0=str_ind$4;
              continue;
             case 16:
              set_flag(str_ind$0,zero);
              var str_ind$5=str_ind$0 + 1 | 0,str_ind$0=str_ind$5;
              continue
             }
          var
           _oP_=space[1],
           _oQ_=hash[1],
           _oR_=plus[1],
           _oS_=minus[1],
           _oT_=zero[1];
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           padty=
            0 === _oT_
             ?0 === _oS_?1:0
             :0 === _oS_
               ?2
               :legacy_behavior$0
                 ?0
                 :incompatible_flag(pct_ind,str_ind$0,45,cst_0),
           match$0=caml_string_get(str,str_ind$0);
          if(48 <= match$0)
           {if(! (58 <= match$0))
             {var
               match$1=parse_positive(str_ind$0,end_ind,0),
               width=match$1[2],
               new_ind=match$1[1];
              return parse_after_padding
                      (pct_ind,
                       new_ind,
                       end_ind,
                       _oS_,
                       _oR_,
                       _oQ_,
                       _oP_,
                       ign,
                       [0,padty,width])}}
          else
           if(42 === match$0)
            return parse_after_padding
                    (pct_ind,
                     str_ind$0 + 1 | 0,
                     end_ind,
                     _oS_,
                     _oR_,
                     _oQ_,
                     _oP_,
                     ign,
                     [1,padty]);
          switch(padty)
           {case 0:
             if(1 - legacy_behavior$0)
              invalid_format_without(str_ind$0 - 1 | 0,45,cst_padding);
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_oS_,_oR_,_oQ_,_oP_,ign,0);
            case 1:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_oS_,_oR_,_oQ_,_oP_,ign,0);
            default:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_oS_,_oR_,_oQ_,_oP_,ign,_ay_)}}}
      function parse_tag(is_open_tag,str_ind,end_ind)
       {try
         {if(str_ind === end_ind)throw Not_found;
          var match$0=caml_string_get(str,str_ind);
          if(60 === match$0)
           {var ind=index_from$0(str,str_ind + 1 | 0,62);
            if(end_ind <= ind)throw Not_found;
            var
             sub_str=sub$0(str,str_ind,(ind - str_ind | 0) + 1 | 0),
             match$1=parse(ind + 1 | 0,end_ind),
             fmt_rest$0=match$1[1],
             match$2=parse(str_ind,ind + 1 | 0),
             sub_fmt=match$2[1],
             sub_format$0=[0,sub_fmt,sub_str];
            if(is_open_tag)
             var formatting$0=[0,sub_format$0];
            else
             {if(typeof sub_fmt === "number")
               var switch$0=0;
              else
               if(11 === sub_fmt[0])
                if(typeof sub_fmt[2] === "number")
                 {var str$0=sub_fmt[1];
                  try
                   {open_box_of_string(str$0);var switch$1=1}
                  catch(_oO_)
                   {_oO_ = caml_wrap_exception(_oO_);
                    if(_oO_[1] !== Failure)throw _oO_;
                    var switch$0=1,switch$1=0}
                  if(switch$1)var switch$0=1}
                else
                 var switch$0=0;
               else
                var switch$0=0;
              var formatting$0=[1,sub_format$0]}
            var _oM_=[0,[18,formatting$0,fmt_rest$0]];
            return _oM_}
          throw Not_found}
        catch(_oN_)
         {_oN_ = caml_wrap_exception(_oN_);
          if(_oN_ === Not_found)
           {var
             match=parse(str_ind,end_ind),
             fmt_rest=match[1],
             formatting=is_open_tag?[0,sub_format]:[1,sub_format];
            return [0,[18,formatting,fmt_rest]]}
          throw _oN_}}
      function parse_good_break(str_ind,end_ind)
       {try
         {var
           _oF_=str_ind === end_ind?1:0,
           _oG_=_oF_ || (60 !== caml_string_get(str,str_ind)?1:0);
          if(_oG_)throw Not_found;
          var
           str_ind_1=parse_spaces(str_ind + 1 | 0,end_ind),
           match$0=caml_string_get(str,str_ind_1),
           switch$0=48 <= match$0?58 <= match$0?0:1:45 === match$0?1:0;
          if(! switch$0)throw Not_found;
          var
           match$1=parse_integer(str_ind_1,end_ind),
           width=match$1[2],
           str_ind_2=match$1[1],
           str_ind_3=parse_spaces(str_ind_2,end_ind),
           match$2=caml_string_get(str,str_ind_3),
           switcher=match$2 - 45 | 0;
          if(12 < switcher >>> 0)
           if(17 === switcher)
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _oH_=[0,s,width,0],
             _oI_=str_ind_3 + 1 | 0,
             next_ind=_oI_,
             formatting_lit$0=_oH_,
             switch$1=1;
           else
            var switch$1=0;
          else
           {var switcher$0=switcher - 1 | 0;
            if(1 < switcher$0 >>> 0)
             {var
               match$3=parse_integer(str_ind_3,end_ind),
               offset=match$3[2],
               str_ind_4=match$3[1],
               str_ind_5=parse_spaces(str_ind_4,end_ind);
              if(62 !== caml_string_get(str,str_ind_5))throw Not_found;
              var
               s$0=
                sub$0(str,str_ind - 2 | 0,(str_ind_5 - str_ind | 0) + 3 | 0),
               _oJ_=[0,s$0,width,offset],
               _oK_=str_ind_5 + 1 | 0,
               next_ind=_oK_,
               formatting_lit$0=_oJ_,
               switch$1=1}
            else
             var switch$1=0}
          if(! switch$1)throw Not_found}
        catch(_oL_)
         {_oL_ = caml_wrap_exception(_oL_);
          if(_oL_ !== Not_found)if(_oL_[1] !== Failure)throw _oL_;
          var next_ind=str_ind,formatting_lit$0=formatting_lit}
        var match=parse(next_ind,end_ind),fmt_rest=match[1];
        return [0,[17,formatting_lit$0,fmt_rest]]}
      function parse_magic_size(str_ind,end_ind)
       {try
         {var
           str_ind_1=parse_spaces(str_ind,end_ind),
           match$2=caml_string_get(str,str_ind_1),
           switch$0=48 <= match$2?58 <= match$2?0:1:45 === match$2?1:0;
          if(switch$0)
           {var
             match$3=parse_integer(str_ind_1,end_ind),
             size=match$3[2],
             str_ind_2=match$3[1],
             str_ind_3=parse_spaces(str_ind_2,end_ind);
            if(62 !== caml_string_get(str,str_ind_3))throw Not_found;
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _oD_=[0,[0,str_ind_3 + 1 | 0,[1,s,size]]]}
          else
           var _oD_=0;
          var _oC_=_oD_}
        catch(_oE_)
         {_oE_ = caml_wrap_exception(_oE_);
          if(_oE_ !== Not_found)if(_oE_[1] !== Failure)throw _oE_;
          var _oC_=0}
        if(_oC_)
         {var
           match=_oC_[1],
           formatting_lit=match[2],
           next_ind=match[1],
           match$0=parse(next_ind,end_ind),
           fmt_rest=match$0[1];
          return [0,[17,formatting_lit,fmt_rest]]}
        var match$1=parse(str_ind,end_ind),fmt_rest$0=match$1[1];
        return [0,[17,_aL_,fmt_rest$0]]}
      function parse_spaces(str_ind,end_ind)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          if(32 === caml_string_get(str,str_ind$0))
           {var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;continue}
          return str_ind$0}}
      function parse_positive(str_ind,end_ind,acc)
       {var str_ind$0=str_ind,acc$0=acc;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var c=caml_string_get(str,str_ind$0),switcher=c - 48 | 0;
          if(9 < switcher >>> 0)return [0,str_ind$0,acc$0];
          var acc$1=(acc$0 * 10 | 0) + (c - 48 | 0) | 0;
          if(max_string_length < acc$1)
           return caml_call3
                   (failwith_message(_aN_),str,acc$1,max_string_length);
          var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,acc$0=acc$1;
          continue}}
      function parse_integer(str_ind,end_ind)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var match=caml_string_get(str,str_ind);
        if(48 <= match)
         {if(! (58 <= match))return parse_positive(str_ind,end_ind,0)}
        else
         if(45 === match)
          {if((str_ind + 1 | 0) === end_ind)unexpected_end_of_format(end_ind);
           var c=caml_string_get(str,str_ind + 1 | 0),switcher=c - 48 | 0;
           if(9 < switcher >>> 0)
            return expected_character(str_ind + 1 | 0,cst_digit,c);
           var
            match$0=parse_positive(str_ind + 1 | 0,end_ind,0),
            n=match$0[2],
            next_ind=match$0[1];
           return [0,next_ind,- n | 0]}
        throw [0,Assert_failure,_aO_]}
      function search_subformat_end(str_ind,end_ind,c)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)
           caml_call3(failwith_message(_aP_),str,c,end_ind);
          var match=caml_string_get(str,str_ind$0);
          if(37 === match)
           {if((str_ind$0 + 1 | 0) === end_ind)
             unexpected_end_of_format(end_ind);
            if(caml_string_get(str,str_ind$0 + 1 | 0) === c)return str_ind$0;
            var match$0=caml_string_get(str,str_ind$0 + 1 | 0);
            if(95 <= match$0)
             {if(123 <= match$0)
               {if(! (126 <= match$0))
                 {var switcher=match$0 - 123 | 0;
                  switch(switcher)
                   {case 0:
                     var
                      sub_end=search_subformat_end(str_ind$0 + 2 | 0,end_ind,125),
                      str_ind$2=sub_end + 2 | 0,
                      str_ind$0=str_ind$2;
                     continue;
                    case 1:break;
                    default:
                     return expected_character
                             (str_ind$0 + 1 | 0,cst_character,125)}}}
              else
               if(! (96 <= match$0))
                {if((str_ind$0 + 2 | 0) === end_ind)
                  unexpected_end_of_format(end_ind);
                 var match$1=caml_string_get(str,str_ind$0 + 2 | 0);
                 if(40 === match$1)
                  {var
                    sub_end$0=search_subformat_end(str_ind$0 + 3 | 0,end_ind,41),
                    str_ind$3=sub_end$0 + 2 | 0,
                    str_ind$0=str_ind$3;
                   continue}
                 if(123 === match$1)
                  {var
                    sub_end$1=
                     search_subformat_end(str_ind$0 + 3 | 0,end_ind,125),
                    str_ind$4=sub_end$1 + 2 | 0,
                    str_ind$0=str_ind$4;
                   continue}
                 var str_ind$5=str_ind$0 + 3 | 0,str_ind$0=str_ind$5;
                 continue}}
            else
             {if(40 === match$0)
               {var
                 sub_end$2=search_subformat_end(str_ind$0 + 2 | 0,end_ind,41),
                 str_ind$6=sub_end$2 + 2 | 0,
                 str_ind$0=str_ind$6;
                continue}
              if(41 === match$0)
               return expected_character(str_ind$0 + 1 | 0,cst_character$0,41)}
            var str_ind$1=str_ind$0 + 2 | 0,str_ind$0=str_ind$1;
            continue}
          var str_ind$7=str_ind$0 + 1 | 0,str_ind$0=str_ind$7;
          continue}}
      function incompatible_flag(pct_ind,str_ind,symb,option)
       {var subfmt=sub$0(str,pct_ind,str_ind - pct_ind | 0);
        return caml_call5
                (failwith_message(_aT_),str,pct_ind,option,symb,subfmt)}
      function compute_int_conv(pct_ind,str_ind,plus,hash,space,symb)
       {var plus$0=plus,hash$0=hash,space$0=space;
        for(;;)
         {if(0 === plus$0)
           if(0 === hash$0)
            if(0 === space$0)
             {var switcher=symb - 88 | 0;
              if(32 < switcher >>> 0)
               var switch$0=1;
              else
               switch(switcher)
                {case 0:return 8;
                 case 12:return 0;
                 case 17:return 3;
                 case 23:return 10;
                 case 29:return 12;
                 case 32:return 6;
                 default:var switch$0=1}}
            else
             {if(100 === symb)return 2;
              if(105 === symb)return 5;
              var switch$0=1}
           else
            if(0 === space$0)
             {var switcher$0=symb - 88 | 0;
              if(32 < switcher$0 >>> 0)
               var switch$0=0;
              else
               switch(switcher$0)
                {case 0:return 9;
                 case 12:return 13;
                 case 17:return 14;
                 case 23:return 11;
                 case 29:return 15;
                 case 32:return 7;
                 default:var switch$0=0}}
            else
             var switch$0=0;
          else
           if(0 === hash$0)
            if(0 === space$0)
             {if(100 === symb)return 1;
              if(105 === symb)return 4;
              var switch$0=1}
            else
             var switch$0=1;
           else
            var switch$0=0;
          if(! switch$0)
           {var switcher$1=symb - 88 | 0;
            if(! (32 < switcher$1 >>> 0))
             switch(switcher$1)
              {case 0:if(legacy_behavior$0)return 9;break;
               case 23:if(legacy_behavior$0)return 11;break;
               case 32:if(legacy_behavior$0)return 7;break;
               case 12:
               case 17:
               case 29:
                if(legacy_behavior$0){var hash$0=0;continue}
                return incompatible_flag(pct_ind,str_ind,symb,cst$48)
               }}
          if(0 === plus$0)
           {if(0 === space$0)throw [0,Assert_failure,_aR_];
            if(legacy_behavior$0){var space$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$45)}
          if(0 === space$0)
           {if(legacy_behavior$0){var plus$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$46)}
          if(legacy_behavior$0){var space$0=0;continue}
          return incompatible_flag(pct_ind,str_ind,32,cst$47)}}
      return parse(0,caml_ml_string_length(str))}
    function format_of_string_fmtty(str,fmtty)
     {var match=fmt_ebb_of_string(0,str),fmt=match[1];
      try
       {var _oA_=[0,type_format(fmt,fmtty),str];return _oA_}
      catch(_oB_)
       {_oB_ = caml_wrap_exception(_oB_);
        if(_oB_ === Type_mismatch)
         {var _oz_=string_of_fmtty(fmtty);
          return caml_call2(failwith_message(_aU_),str,_oz_)}
        throw _oB_}}
    function format_of_string_format(str,param)
     {var
       str$0=param[2],
       fmt=param[1],
       match=fmt_ebb_of_string(0,str),
       fmt$0=match[1];
      try
       {var _ox_=[0,type_format(fmt$0,fmtty_of_fmt(fmt)),str];return _ox_}
      catch(_oy_)
       {_oy_ = caml_wrap_exception(_oy_);
        if(_oy_ === Type_mismatch)
         return caml_call2(failwith_message(_aV_),str,str$0);
        throw _oy_}}
    var
     CamlinternalFormat=
      [0,
       is_in_char_set,
       rev_char_set,
       create_char_set,
       add_in_char_set,
       freeze_char_set,
       param_format_of_ignored_format,
       make_printf,
       make_iprintf,
       output_acc,
       bufput_acc,
       strput_acc,
       type_format,
       fmt_ebb_of_string,
       format_of_string_fmtty,
       format_of_string_format,
       char_of_iconv,
       string_of_formatting_lit,
       string_of_formatting_gen,
       string_of_fmtty,
       string_of_fmt,
       open_box_of_string,
       symm,
       trans,
       recast];
    caml_register_global(750,CamlinternalFormat,"CamlinternalFormat");
    function kfprintf(k,o,param)
     {var fmt=param[1],_ow_=0;
      return make_printf
              (function(acc){output_acc(o,acc);return caml_call1(k,o)},
               _ow_,
               fmt)}
    function kbprintf(k,b,param)
     {var fmt=param[1],_ov_=0;
      return make_printf
              (function(acc){bufput_acc(b,acc);return caml_call1(k,b)},
               _ov_,
               fmt)}
    function ikfprintf(k,oc,param)
     {var fmt=param[1];return make_iprintf(k,oc,fmt)}
    function fprintf(oc,fmt){return kfprintf(function(_ou_){return 0},oc,fmt)}
    function bprintf(b,fmt){return kbprintf(function(_ot_){return 0},b,fmt)}
    function ifprintf(oc,fmt)
     {return ikfprintf(function(_os_){return 0},oc,fmt)}
    function printf(fmt){return fprintf(stdout,fmt)}
    function eprintf(fmt){return fprintf(stderr,fmt)}
    function ksprintf(k,param)
     {var fmt=param[1];
      function k$0(acc)
       {var buf=create$2(64);
        strput_acc(buf,acc);
        return caml_call1(k,contents(buf))}
      return make_printf(k$0,0,fmt)}
    function sprintf(fmt){return ksprintf(function(s){return s},fmt)}
    var
     Stdlib_printf=
      [0,
       fprintf,
       printf,
       eprintf,
       sprintf,
       bprintf,
       ifprintf,
       kfprintf,
       ikfprintf,
       ksprintf,
       kbprintf,
       ksprintf];
    caml_register_global(751,Stdlib_printf,"Stdlib__printf");
    var
     Bad=[248,cst_Stdlib_Arg_Bad,caml_fresh_oo_id(0)],
     Help=[248,cst_Stdlib_Arg_Help,caml_fresh_oo_id(0)],
     Stop=[248,cst_Stdlib_Arg_Stop,caml_fresh_oo_id(0)];
    function assoc3(x,l)
     {var l$0=l;
      for(;;)
       {if(l$0)
         {var t=l$0[2],match=l$0[1],y2=match[2],y1=match[1];
          if(caml_equal(y1,x))return y2;
          var l$0=t;
          continue}
        throw Not_found}}
    function split$0(s)
     {var
       i=index$0(s,61),
       len=caml_ml_string_length(s),
       _or_=sub$0(s,i + 1 | 0,len - (i + 1 | 0) | 0);
      return [0,sub$0(s,0,i),_or_]}
    function make_symlist(prefix,sep,suffix,l)
     {if(l)
       {var t=l[2],h=l[1],_oq_=symbol(prefix,h);
        return symbol
                (fold_left$0
                  (function(x,y){return symbol(x,symbol(sep,y))},_oq_,t),
                 suffix)}
      return cst_none}
    function help_action(param){throw [0,Stop,_aY_]}
    function add_help(speclist)
     {try
       {assoc3(cst_help$2,speclist);var _on_=0,_ol_=_on_}
      catch(_op_)
       {_op_ = caml_wrap_exception(_op_);
        if(_op_ !== Not_found)throw _op_;
        var
         _ol_=
          [0,[0,cst_help,[0,help_action],cst_Display_this_list_of_options],0]}
      try
       {assoc3(cst_help$1,speclist);var _om_=0,add2=_om_}
      catch(_oo_)
       {_oo_ = caml_wrap_exception(_oo_);
        if(_oo_ !== Not_found)throw _oo_;
        var
         add2=
          [0,
           [0,cst_help$0,[0,help_action],cst_Display_this_list_of_options$0],
           0]}
      return append(speclist,append(_ol_,add2))}
    function usage_b(buf,speclist,errmsg)
     {caml_call1(bprintf(buf,_aZ_),errmsg);
      var _oi_=add_help(speclist);
      return iter$2
              (function(param)
                {var
                  doc=param[3],
                  spec=param[2],
                  key=param[1],
                  _oj_=0 < caml_ml_string_length(doc)?1:0;
                 if(_oj_)
                  {if(11 === spec[0])
                    {var l=spec[1],_ok_=make_symlist(cst$54,cst$53,cst$52,l);
                     return caml_call3(bprintf(buf,_aX_),key,_ok_,doc)}
                   return caml_call2(bprintf(buf,_aW_),key,doc)}
                 return _oj_},
               _oi_)}
    function usage_string(speclist,errmsg)
     {var b=create$2(200);usage_b(b,speclist,errmsg);return contents(b)}
    function usage(speclist,errmsg)
     {var _oh_=usage_string(speclist,errmsg);
      return caml_call1(eprintf(_a0_),_oh_)}
    var current=[0,0];
    function bool_of_string_opt$0(x)
     {try
       {var _of_=[0,bool_of_string(x)];return _of_}
      catch(_og_)
       {_og_ = caml_wrap_exception(_og_);
        if(_og_[1] === Invalid_argument)return 0;
        throw _og_}}
    function int_of_string_opt$0(x)
     {try
       {var _od_=[0,caml_int_of_string(x)];return _od_}
      catch(_oe_)
       {_oe_ = caml_wrap_exception(_oe_);
        if(_oe_[1] === Failure)return 0;
        throw _oe_}}
    function float_of_string_opt(x)
     {try
       {var _ob_=[0,caml_float_of_string(x)];return _ob_}
      catch(_oc_)
       {_oc_ = caml_wrap_exception(_oc_);
        if(_oc_[1] === Failure)return 0;
        throw _oc_}}
    function parse_and_expand_argv_dynamic_aux
     (allow_expand,current,argv,speclist,anonfun,errmsg)
     {var initpos=current[1];
      function convert_error(error)
       {var
         b=create$2(200),
         progname=
          initpos < argv[1].length - 1
           ?caml_check_bound(argv[1],initpos)[1 + initpos]
           :cst$55;
        switch(error[0])
         {case 0:
           var _oa_=error[1];
           if(caml_string_notequal(_oa_,cst_help$3))
            if(caml_string_notequal(_oa_,cst_help$4))
             caml_call2(bprintf(b,_a1_),progname,_oa_);
           break;
          case 1:
           var expected=error[3],arg=error[2],opt=error[1];
           caml_call4(bprintf(b,_a4_),progname,arg,opt,expected);
           break;
          case 2:var s=error[1];caml_call2(bprintf(b,_a5_),progname,s);break;
          default:var s$0=error[1];caml_call2(bprintf(b,_a6_),progname,s$0)}
        usage_b(b,speclist[1],errmsg);
        if(! caml_equal(error,_a2_))
         if(! caml_equal(error,_a3_))return [0,Bad,contents(b)];
        return [0,Help,contents(b)]}
      current[1]++;
      for(;;)
       {if(current[1] < argv[1].length - 1)
         {try
           {var _n3_=current[1],s=caml_check_bound(argv[1],_n3_)[1 + _n3_];
            if(1 <= caml_ml_string_length(s))
             if(45 === caml_string_get(s,0))
              {try
                {var
                  follow$1=0,
                  _n5_=assoc3(s,speclist[1]),
                  action=_n5_,
                  follow$0=follow$1}
               catch(_n__)
                {_n__ = caml_wrap_exception(_n__);
                 if(_n__ !== Not_found)throw _n__;
                 try
                  {var
                    match=split$0(s),
                    arg=match[2],
                    keyword=match[1],
                    follow=[0,arg],
                    _n4_=assoc3(keyword,speclist[1])}
                 catch(_n$_)
                  {_n$_ = caml_wrap_exception(_n$_);
                   if(_n$_ === Not_found)throw [0,Stop,[0,s]];
                   throw _n$_;
                   var _n6_=_n$_}
                 var action=_n4_,follow$0=follow,_n7_=_n__}
               var
                no_arg$0=
                 function(s,follow)
                  {function no_arg(param)
                    {if(follow)
                      {var arg=follow[1];throw [0,Stop,[1,s,arg,cst_no_argument]]}
                     return 0}
                   return no_arg},
                no_arg=no_arg$0(s,follow$0),
                get_arg$0=
                 function(s,follow)
                  {function get_arg(param)
                    {if(follow){var arg=follow[1];return arg}
                     if((current[1] + 1 | 0) < argv[1].length - 1)
                      {var _n9_=current[1] + 1 | 0;
                       return caml_check_bound(argv[1],_n9_)[1 + _n9_]}
                     throw [0,Stop,[2,s]]}
                   return get_arg},
                get_arg=get_arg$0(s,follow$0),
                consume_arg$0=
                 function(follow)
                  {function consume_arg(param)
                    {return follow?0:(current[1]++,0)}
                   return consume_arg},
                consume_arg=consume_arg$0(follow$0),
                treat_action$0=
                 function(s,no_arg,get_arg,consume_arg)
                  {function treat_action(param)
                    {switch(param[0])
                      {case 0:var f=param[1];no_arg(0);return caml_call1(f,0);
                       case 1:
                        var
                         f$0=param[1],
                         arg=get_arg(0),
                         match=bool_of_string_opt$0(arg);
                        if(match)
                         {var s$0=match[1];caml_call1(f$0,s$0);return consume_arg(0)}
                        throw [0,Stop,[1,s,arg,cst_a_boolean]];
                       case 2:var r=param[1];no_arg(0);r[1] = 1;return 0;
                       case 3:var r$0=param[1];no_arg(0);r$0[1] = 0;return 0;
                       case 4:
                        var f$1=param[1],arg$0=get_arg(0);
                        caml_call1(f$1,arg$0);
                        return consume_arg(0);
                       case 5:
                        var r$1=param[1];r$1[1] = get_arg(0);return consume_arg(0);
                       case 6:
                        var
                         f$2=param[1],
                         arg$1=get_arg(0),
                         match$0=int_of_string_opt$0(arg$1);
                        if(match$0)
                         {var x=match$0[1];caml_call1(f$2,x);return consume_arg(0)}
                        throw [0,Stop,[1,s,arg$1,cst_an_integer]];
                       case 7:
                        var
                         r$2=param[1],
                         arg$2=get_arg(0),
                         match$1=int_of_string_opt$0(arg$2);
                        if(match$1)
                         {var x$0=match$1[1];r$2[1] = x$0;return consume_arg(0)}
                        throw [0,Stop,[1,s,arg$2,cst_an_integer$0]];
                       case 8:
                        var
                         f$3=param[1],
                         arg$3=get_arg(0),
                         match$2=float_of_string_opt(arg$3);
                        if(match$2)
                         {var x$1=match$2[1];
                          caml_call1(f$3,x$1);
                          return consume_arg(0)}
                        throw [0,Stop,[1,s,arg$3,cst_a_float]];
                       case 9:
                        var
                         r$3=param[1],
                         arg$4=get_arg(0),
                         match$3=float_of_string_opt(arg$4);
                        if(match$3)
                         {var x$2=match$3[1];r$3[1] = x$2;return consume_arg(0)}
                        throw [0,Stop,[1,s,arg$4,cst_a_float$0]];
                       case 10:
                        var specs=param[1];
                        no_arg(0);
                        return iter$2(treat_action,specs);
                       case 11:
                        var f$4=param[2],symb=param[1],arg$5=get_arg(0);
                        if(mem(arg$5,symb))
                         {caml_call1(f$4,arg$5);return consume_arg(0)}
                        throw [0,
                               Stop,
                               [1,
                                s,
                                arg$5,
                                symbol(cst_one_of,make_symlist(cst$58,cst$57,cst$56,symb))]];
                       case 12:
                        var f$5=param[1];
                        no_arg(0);
                        for(;;)
                         {if(current[1] < (argv[1].length - 1 - 1 | 0))
                           {var _n8_=current[1] + 1 | 0;
                            caml_call1(f$5,caml_check_bound(argv[1],_n8_)[1 + _n8_]);
                            consume_arg(0);
                            continue}
                          return 0}
                       default:
                        var f$6=param[1];
                        if(1 - allow_expand)
                         throw [0,
                                Invalid_argument,
                                cst_Arg_Expand_is_is_only_allowed_with_Arg_parse_and_expand_argv_dynamic];
                        var arg$6=get_arg(0),newarg=caml_call1(f$6,arg$6);
                        consume_arg(0);
                        var
                         before=sub$1(argv[1],0,current[1] + 1 | 0),
                         after=
                          sub$1
                           (argv[1],
                            current[1] + 1 | 0,
                            (argv[1].length - 1 - current[1] | 0) - 1 | 0);
                        argv[1]
                        =
                        caml_array_concat([0,before,[0,newarg,[0,after,0]]]);
                        return 0}}
                   return treat_action},
                treat_action=treat_action$0(s,no_arg,get_arg,consume_arg);
               treat_action(action);
               var switch$0=1}
             else
              var switch$0=0;
            else
             var switch$0=0;
            if(! switch$0)caml_call1(anonfun,s)}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            if(exn$0[1] === Bad){var m=exn$0[2];throw convert_error([3,m])}
            if(exn$0[1] === Stop){var e=exn$0[2];throw convert_error(e)}
            throw exn$0;
            var exn=exn$0}
          current[1]++;
          continue}
        return 0}}
    function parse_and_expand_argv_dynamic
     (current,argv,speclist,anonfun,errmsg)
     {return parse_and_expand_argv_dynamic_aux
              (1,current,argv,speclist,anonfun,errmsg)}
    function parse_argv_dynamic(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_and_expand_argv_dynamic_aux
              (0,current$0,[0,argv],speclist,anonfun,errmsg)}
    function parse_argv(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_argv_dynamic
              ([0,current$0],argv,[0,speclist],anonfun,errmsg)}
    function parse(l,f,msg)
     {try
       {var _n2_=parse_argv(0,_n_,l,f,msg);return _n2_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a7_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_a8_),msg$1);return exit(0)}
        throw exn}}
    function parse_dynamic(l,f,msg)
     {try
       {var _n1_=parse_argv_dynamic(0,_n_,l,f,msg);return _n1_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a9_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_a__),msg$1);return exit(0)}
        throw exn}}
    function parse_expand(l,f,msg)
     {try
       {var
         argv=[0,_n_],
         spec=[0,l],
         current$0=[0,current[1]],
         _n0_=parse_and_expand_argv_dynamic(current$0,argv,spec,f,msg);
        return _n0_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a$_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_ba_),msg$1);return exit(0)}
        throw exn}}
    function second_word(s)
     {var len=caml_ml_string_length(s);
      function loop(n)
       {var n$0=n;
        for(;;)
         {if(len <= n$0)return len;
          if(32 === caml_string_get(s,n$0))
           {var n$1=n$0 + 1 | 0,n$0=n$1;continue}
          return n$0}}
      try
       {var n$0=index$0(s,9)}
      catch(_nY_)
       {_nY_ = caml_wrap_exception(_nY_);
        if(_nY_ === Not_found)
         {try
           {var n=index$0(s,32)}
          catch(_nZ_)
           {_nZ_ = caml_wrap_exception(_nZ_);
            if(_nZ_ === Not_found)return len;
            throw _nZ_}
          return loop(n + 1 | 0)}
        throw _nY_}
      return loop(n$0 + 1 | 0)}
    function max_arg_len(cur,param)
     {var doc=param[3],spec=param[2],kwd=param[1];
      return 11 === spec[0]
              ?max(cur,caml_ml_string_length(kwd))
              :max(cur,caml_ml_string_length(kwd) + second_word(doc) | 0)}
    function replace_leading_tab(s)
     {var seen=[0,0];
      return map$4
              (function(c)
                {if(9 === c)if(! seen[1]){seen[1] = 1;return 32}return c},
               s)}
    function align(opt,speclist)
     {if(opt)var sth=opt[1],limit=sth;else var limit=max_int;
      var
       completed=add_help(speclist),
       len=fold_left$0(max_arg_len,0,completed),
       len$0=min(len,limit);
      return map$2
              (function(ksd)
                {var _nW_=ksd[2],_nX_=ksd[1];
                 if(caml_string_notequal(ksd[3],cst$59))
                  {if(11 === _nW_[0])
                    {var
                      msg$0=ksd[3],
                      cutcol$0=second_word(msg$0),
                      spaces$0=make$0(max(0,len$0 - cutcol$0 | 0) + 3 | 0,32);
                     return [0,
                             _nX_,
                             _nW_,
                             symbol(cst$60,symbol(spaces$0,replace_leading_tab(msg$0)))]}
                   var
                    msg=ksd[3],
                    cutcol=second_word(msg),
                    kwd_len=caml_ml_string_length(_nX_),
                    diff=(len$0 - kwd_len | 0) - cutcol | 0;
                   if(0 < diff)
                    {var
                      spaces=make$0(diff,32),
                      prefix=sub$0(replace_leading_tab(msg),0,cutcol),
                      suffix=
                       sub$0(msg,cutcol,caml_ml_string_length(msg) - cutcol | 0);
                     return [0,_nX_,_nW_,symbol(prefix,symbol(spaces,suffix))]}
                   return [0,_nX_,_nW_,replace_leading_tab(msg)]}
                 return ksd},
               completed)}
    function read_aux(trim,sep,file)
     {var ic=open_in_bin(file),buf=create$2(200),words=[0,0];
      function stash(param)
       {var s=contents(buf);
        if(trim)
         {var len=caml_ml_string_length(s);
          if(0 < len)
           if(13 === caml_string_get(s,len - 1 | 0))
            var _nV_=sub$0(s,0,len - 1 | 0),switch$0=1;
           else
            var switch$0=0;
          else
           var switch$0=0;
          if(! switch$0)var _nV_=s;
          var word=_nV_}
        else
         var word=s;
        words[1] = [0,word,words[1]];
        return clear$1(buf)}
      try
       {for(;;)
         {var c=caml_ml_input_char(ic);
          if(c === sep)stash(0);else add_char(buf,c);
          continue}}
      catch(_nU_)
       {_nU_ = caml_wrap_exception(_nU_);
        if(_nU_ === End_of_file)
         {if(0 < buf[2])stash(0);
          caml_ml_close_channel(ic);
          return of_list(rev(words[1]))}
        throw _nU_}}
    var _bb_=10,_bc_=1;
    function read_arg(_nT_){return read_aux(_bc_,_bb_,_nT_)}
    var _bd_=0,_be_=0;
    function read_arg0(_nS_){return read_aux(_be_,_bd_,_nS_)}
    function write_aux(sep,file,args)
     {var oc=open_out_bin(file);
      iter$5(function(s){return caml_call2(fprintf(oc,_bf_),s,sep)},args);
      return close_out(oc)}
    var _bg_=10;
    function write_arg(_nQ_,_nR_){return write_aux(_bg_,_nQ_,_nR_)}
    var _bh_=0;
    function write_arg0(_nO_,_nP_){return write_aux(_bh_,_nO_,_nP_)}
    var
     Stdlib_arg=
      [0,
       parse,
       parse_dynamic,
       parse_argv,
       parse_argv_dynamic,
       parse_and_expand_argv_dynamic,
       parse_expand,
       Help,
       Bad,
       usage,
       usage_string,
       align,
       current,
       read_arg,
       read_arg0,
       write_arg,
       write_arg0];
    caml_register_global(752,Stdlib_arg,"Stdlib__arg");
    var printers=[0,0];
    function field(x,i)
     {var f=x[1 + i];
      return is_block(f)
              ?caml_obj_tag(f) === 252
                ?caml_call1(sprintf(_bi_),f)
                :caml_obj_tag(f) === 253?to_string(f):cst$61
              :caml_call1(sprintf(_bj_),f)}
    function other_fields(x,i)
     {if(x.length - 1 <= i)return cst$62;
      var _nM_=other_fields(x,i + 1 | 0),_nN_=field(x,i);
      return caml_call2(sprintf(_bk_),_nN_,_nM_)}
    function fields(x)
     {var match=x.length - 1;
      if(2 < match >>> 0)
       {var _nJ_=other_fields(x,2),_nK_=field(x,1);
        return caml_call2(sprintf(_bl_),_nK_,_nJ_)}
      switch(match)
       {case 0:return cst$63;
        case 1:return cst$64;
        default:var _nL_=field(x,1);return caml_call1(sprintf(_bm_),_nL_)}}
    function to_string$7(x)
     {function conv(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1];
            try {var _nH_=caml_call1(hd,x),_nG_=_nH_}catch(_nI_){var _nG_=0}
            if(_nG_){var s=_nG_[1];return s}
            var param$0=tl;
            continue}
          if(x === Out_of_memory)return cst_Out_of_memory;
          if(x === Stack_overflow)return cst_Stack_overflow;
          if(x[1] === Match_failure)
           {var match=x[2],char$0=match[3],line=match[2],file=match[1];
            return caml_call5
                    (sprintf(locfmt),
                     file,
                     line,
                     char$0,
                     char$0 + 5 | 0,
                     cst_Pattern_matching_failed)}
          if(x[1] === Assert_failure)
           {var
             match$0=x[2],
             char$1=match$0[3],
             line$0=match$0[2],
             file$0=match$0[1];
            return caml_call5
                    (sprintf(locfmt),
                     file$0,
                     line$0,
                     char$1,
                     char$1 + 6 | 0,
                     cst_Assertion_failed)}
          if(x[1] === Undefined_recursive_module)
           {var
             match$1=x[2],
             char$2=match$1[3],
             line$1=match$1[2],
             file$1=match$1[1];
            return caml_call5
                    (sprintf(locfmt),
                     file$1,
                     line$1,
                     char$2,
                     char$2 + 6 | 0,
                     cst_Undefined_recursive_module)}
          if(0 === caml_obj_tag(x))
           {var constructor=x[1][1];return symbol(constructor,fields(x))}
          return x[1]}}
      return conv(printers[1])}
    function print(fct,arg)
     {try
       {var _nF_=caml_call1(fct,arg);return _nF_}
      catch(x)
       {x = caml_wrap_exception(x);
        var _nE_=to_string$7(x);
        caml_call1(eprintf(_bn_),_nE_);
        caml_ml_flush(stderr);
        throw x}}
    function catch$0(fct,arg)
     {try
       {var _nD_=caml_call1(fct,arg);return _nD_}
      catch(x)
       {x = caml_wrap_exception(x);
        caml_ml_flush(stdout);
        var _nC_=to_string$7(x);
        caml_call1(eprintf(_bo_),_nC_);
        return exit(2)}}
    function convert_raw_backtrace(bt)
     {return [0,runtime.caml_convert_raw_backtrace(bt)]}
    function format_backtrace_slot(pos,slot)
     {function info(is_raise)
       {return is_raise
                ?0 === pos?cst_Raised_at:cst_Re_raised_at
                :0 === pos
                  ?cst_Raised_by_primitive_operation_at
                  :cst_Called_from}
      if(0 === slot[0])
       {var
         _nv_=slot[5],
         _nw_=slot[4],
         _nx_=slot[3],
         _ny_=slot[6]?cst_inlined:cst$65,
         _nz_=slot[2],
         _nA_=info(slot[1]);
        return [0,caml_call6(sprintf(_bp_),_nA_,_nz_,_ny_,_nx_,_nw_,_nv_)]}
      if(slot[1])return 0;
      var _nB_=info(0);
      return [0,caml_call1(sprintf(_bq_),_nB_)]}
    function print_raw_backtrace(outchan,raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],_nt_=a.length - 1 - 1 | 0,_ns_=0;
        if(! (_nt_ < 0))
         {var i=_ns_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(fprintf(outchan,_br_),str)}
            var _nu_=i + 1 | 0;
            if(_nt_ !== i){var i=_nu_;continue}
            break}}
        return 0}
      return fprintf(outchan,_bs_)}
    function print_backtrace(outchan)
     {return print_raw_backtrace(outchan,caml_get_exception_raw_backtrace(0))}
    function raw_backtrace_to_string(raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],b=create$2(1024),_nq_=a.length - 1 - 1 | 0,_np_=0;
        if(! (_nq_ < 0))
         {var i=_np_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(bprintf(b,_bt_),str)}
            var _nr_=i + 1 | 0;
            if(_nq_ !== i){var i=_nr_;continue}
            break}}
        return contents(b)}
      return cst_Program_not_linked_with_g_cannot_print_stack_backtrace}
    function backtrace_slot_is_raise(param)
     {return 0 === param[0]?param[1]:param[1]}
    function backtrace_slot_is_inline(param){return 0 === param[0]?param[6]:0}
    function backtrace_slot_location(param)
     {return 0 === param[0]?[0,[0,param[2],param[3],param[4],param[5]]]:0}
    function backtrace_slots(raw_backtrace)
     {var match=convert_raw_backtrace(raw_backtrace);
      if(match)
       {var backtrace=match[1],i$1=backtrace.length - 1 - 1 | 0,i=i$1;
        for(;;)
         {if(-1 === i)
           var _no_=0;
          else
           {var
             param=caml_check_bound(backtrace,i)[1 + i],
             _nn_=0 === param[0]?1:0;
            if(! _nn_){var i$0=i - 1 | 0,i=i$0;continue}
            var _no_=_nn_}
          return _no_?[0,backtrace]:0}}
      return 0}
    function get_backtrace(param)
     {return raw_backtrace_to_string(caml_get_exception_raw_backtrace(0))}
    function register_printer(fn){printers[1] = [0,fn,printers[1]];return 0}
    function exn_slot(x){return 0 === caml_obj_tag(x)?x[1]:x}
    function exn_slot_id(x){var slot=exn_slot(x);return slot[2]}
    function exn_slot_name(x){var slot=exn_slot(x);return slot[1]}
    var uncaught_exception_handler=[0,0];
    function set_uncaught_exception_handler(fn)
     {uncaught_exception_handler[1] = [0,fn];return 0}
    function _bu_(_nm_){return runtime.caml_raw_backtrace_next_slot(_nm_)}
    function _bv_(_nl_){return runtime.caml_convert_raw_backtrace_slot(_nl_)}
    function _bw_(_nk_,_nj_)
     {return runtime.caml_raw_backtrace_slot(_nk_,_nj_)}
    function _bx_(_ni_){return runtime.caml_raw_backtrace_length(_ni_)}
    var
     _by_=
      [0,
       backtrace_slot_is_raise,
       backtrace_slot_is_inline,
       backtrace_slot_location,
       format_backtrace_slot];
    function _bz_(_nh_){return runtime.caml_get_current_callstack(_nh_)}
    function _bA_(_ng_){return caml_get_exception_raw_backtrace(_ng_)}
    function _bB_(_nf_){return runtime.caml_backtrace_status(_nf_)}
    var
     Stdlib_printexc=
      [0,
       to_string$7,
       print,
       catch$0,
       print_backtrace,
       get_backtrace,
       function(_ne_){return runtime.caml_record_backtrace(_ne_)},
       _bB_,
       register_printer,
       _bA_,
       print_raw_backtrace,
       raw_backtrace_to_string,
       _bz_,
       set_uncaught_exception_handler,
       backtrace_slots,
       _by_,
       _bx_,
       _bw_,
       _bv_,
       _bu_,
       exn_slot_id,
       exn_slot_name];
    caml_register_global(753,Stdlib_printexc,"Stdlib__printexc");
    function const$0(c,param){return c}
    function flip(f,x,y){return caml_call2(f,y,x)}
    function negate(p,v){return 1 - caml_call1(p,v)}
    var
     Finally_raised=
      [248,cst_Stdlib_Fun_Finally_raised,caml_fresh_oo_id(0)];
    function protect(finally$0,work)
     {function finally_no_exn(param)
       {try
         {var _nd_=caml_call1(finally$0,0);return _nd_}
        catch(e)
         {e = caml_wrap_exception(e);
          var bt=caml_get_exception_raw_backtrace(0),exn=[0,Finally_raised,e];
          caml_restore_raw_backtrace(exn,bt);
          throw exn}}
      try
       {var result=caml_call1(work,0)}
      catch(work_exn)
       {work_exn = caml_wrap_exception(work_exn);
        var work_bt=caml_get_exception_raw_backtrace(0);
        finally_no_exn(0);
        caml_restore_raw_backtrace(work_exn,work_bt);
        throw work_exn}
      finally_no_exn(0);
      return result}
    var Stdlib_fun=[0,const$0,flip,negate,protect,Finally_raised];
    caml_register_global(754,Stdlib_fun,"Stdlib__fun");
    function print_stat(c)
     {var st=runtime.caml_gc_stat(0),_mY_=st[4];
      caml_call1(fprintf(c,_bC_),_mY_);
      var _mZ_=st[5];
      caml_call1(fprintf(c,_bD_),_mZ_);
      var _m0_=st[14];
      caml_call1(fprintf(c,_bE_),_m0_);
      fprintf(c,_bF_);
      var
       _m1_=st[1],
       l1=caml_ml_string_length(caml_call1(sprintf(_bG_),_m1_)),
       _m2_=st[1];
      caml_call2(fprintf(c,_bH_),l1,_m2_);
      var _m3_=st[2];
      caml_call2(fprintf(c,_bI_),l1,_m3_);
      var _m4_=st[3];
      caml_call2(fprintf(c,_bJ_),l1,_m4_);
      fprintf(c,_bK_);
      var
       _m5_=st[15],
       l2=caml_ml_string_length(caml_call1(sprintf(_bL_),_m5_)),
       _m6_=st[15];
      caml_call2(fprintf(c,_bM_),l2,_m6_);
      var _m7_=st[6];
      caml_call2(fprintf(c,_bN_),l2,_m7_);
      var _m8_=st[8];
      caml_call2(fprintf(c,_bO_),l2,_m8_);
      var _m9_=st[10];
      caml_call2(fprintf(c,_bP_),l2,_m9_);
      var _m__=st[12];
      caml_call2(fprintf(c,_bQ_),l2,_m__);
      var _m$_=st[13];
      caml_call2(fprintf(c,_bR_),l2,_m$_);
      fprintf(c,_bS_);
      var _na_=st[9];
      caml_call1(fprintf(c,_bT_),_na_);
      var _nb_=st[11];
      caml_call1(fprintf(c,_bU_),_nb_);
      var _nc_=st[7];
      return caml_call1(fprintf(c,_bV_),_nc_)}
    function allocated_bytes(param)
     {var
       match=runtime.caml_gc_counters(0),
       ma=match[3],
       pro=match[2],
       mi=match[1];
      return (mi + ma - pro) * 4}
    function create_alarm(f){return [0,1]}
    function delete_alarm(a){a[1] = 0;return 0}
    function _bW_(_mX_){return runtime.caml_final_release(_mX_)}
    function _bX_(_mW_,_mV_)
     {return runtime.caml_final_register_called_without_value(_mW_,_mV_)}
    var
     Stdlib_gc=
      [0,
       print_stat,
       allocated_bytes,
       function(_mU_,_mT_){return runtime.caml_final_register(_mU_,_mT_)},
       _bX_,
       _bW_,
       create_alarm,
       delete_alarm];
    caml_register_global(755,Stdlib_gc,"Stdlib__gc");
    function string(str)
     {return caml_md5_string(str,0,caml_ml_string_length(str))}
    function bytes(b){return string(caml_string_of_bytes(b))}
    function substring(str,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_string_length(str) - len | 0) < ofs))
         return caml_md5_string(str,ofs,len);
      return invalid_arg(cst_Digest_substring)}
    function subbytes(b,ofs,len)
     {return substring(caml_string_of_bytes(b),ofs,len)}
    function file(filename)
     {var ic=open_in_bin(filename);
      try
       {var d=runtime.caml_md5_chan(ic,-1)}
      catch(e){e = caml_wrap_exception(e);caml_ml_close_channel(ic);throw e}
      caml_ml_close_channel(ic);
      return d}
    function output$0(chan,digest){return output_string(chan,digest)}
    function input$0(chan){return really_input_string(chan,16)}
    function char_hex(n){var _mS_=10 <= n?87:48;return n + _mS_ | 0}
    function to_hex(d)
     {if(16 !== caml_ml_string_length(d))invalid_arg(cst_Digest_to_hex);
      var result=caml_create_bytes(32),i=0;
      for(;;)
       {var x=caml_string_get(d,i);
        caml_bytes_unsafe_set(result,i * 2 | 0,char_hex(x >>> 4 | 0));
        caml_bytes_unsafe_set(result,(i * 2 | 0) + 1 | 0,char_hex(x & 15));
        var _mR_=i + 1 | 0;
        if(15 !== i){var i=_mR_;continue}
        return caml_string_of_bytes(result)}}
    function from_hex(s)
     {if(32 !== caml_ml_string_length(s))invalid_arg(cst_Digest_from_hex);
      function digit(c)
       {if(65 <= c)
         {if(97 <= c)
           {if(! (103 <= c))return (c - 97 | 0) + 10 | 0}
          else
           if(! (71 <= c))return (c - 65 | 0) + 10 | 0}
        else
         {var switcher=c - 48 | 0;if(! (9 < switcher >>> 0))return c - 48 | 0}
        throw [0,Invalid_argument,cst_Digest_from_hex$0]}
      var result=caml_create_bytes(16),i=0;
      for(;;)
       {var i$0=2 * i | 0,_mP_=digit(caml_string_get(s,i$0 + 1 | 0));
        caml_bytes_set
         (result,i,chr((digit(caml_string_get(s,i$0)) << 4) + _mP_ | 0));
        var _mQ_=i + 1 | 0;
        if(15 !== i){var i=_mQ_;continue}
        return caml_string_of_bytes(result)}}
    var
     Stdlib_digest=
      [0,
       compare$5,
       equal$5,
       string,
       bytes,
       substring,
       subbytes,
       file,
       output$0,
       input$0,
       to_hex,
       from_hex];
    caml_register_global(756,Stdlib_digest,"Stdlib__digest");
    function new_state(param){return [0,caml_make_vect(55,0),0]}
    function assign(st1,st2)
     {blit$1(st2[1],0,st1[1],0,55);st1[2] = st2[2];return 0}
    function full_init(s,seed)
     {var seed$0=0 === seed.length - 1?[0,0]:seed,l=seed$0.length - 1,i$0=0;
      for(;;)
       {caml_check_bound(s[1],i$0)[1 + i$0] = i$0;
        var _mO_=i$0 + 1 | 0;
        if(54 !== i$0){var i$0=_mO_;continue}
        var accu=[0,cst_x$1],_mK_=54 + max(55,l) | 0,_mJ_=0;
        if(! (_mK_ < 0))
         {var i=_mJ_;
          for(;;)
           {var
             j=i % 55 | 0,
             k=caml_mod(i,l),
             x=caml_check_bound(seed$0,k)[1 + k];
            accu[1] = string(symbol(accu[1],caml_new_string("" + x)));
            var
             _mL_=accu[1],
             _mF_=caml_string_get(_mL_,3) << 24,
             _mG_=caml_string_get(_mL_,2) << 16,
             _mH_=caml_string_get(_mL_,1) << 8,
             _mI_=((caml_string_get(_mL_,0) + _mH_ | 0) + _mG_ | 0) + _mF_ | 0,
             _mM_=(caml_check_bound(s[1],j)[1 + j] ^ _mI_) & 1073741823;
            caml_check_bound(s[1],j)[1 + j] = _mM_;
            var _mN_=i + 1 | 0;
            if(_mK_ !== i){var i=_mN_;continue}
            break}}
        s[2] = 0;
        return 0}}
    function make$2(seed)
     {var result=new_state(0);full_init(result,seed);return result}
    function make_self_init(param){return make$2(caml_sys_random_seed(0))}
    function copy$5(s){var result=new_state(0);assign(result,s);return result}
    function bits(s)
     {s[2] = (s[2] + 1 | 0) % 55 | 0;
      var
       _mC_=s[2],
       curval=caml_check_bound(s[1],_mC_)[1 + _mC_],
       _mD_=(s[2] + 24 | 0) % 55 | 0,
       newval=
        caml_check_bound(s[1],_mD_)[1 + _mD_]
        +
        (curval ^ (curval >>> 25 | 0) & 31)
        |
        0,
       newval30=newval & 1073741823,
       _mE_=s[2];
      caml_check_bound(s[1],_mE_)[1 + _mE_] = newval30;
      return newval30}
    function int$0(s,bound)
     {if(! (1073741823 < bound))
       if(0 < bound)
        for(;;)
         {var r=bits(s),v=caml_mod(r,bound);
          if(((1073741823 - bound | 0) + 1 | 0) < (r - v | 0))continue;
          return v}
      return invalid_arg(cst_Random_int)}
    function int32(s,bound)
     {if(caml_lessequal(bound,0))return invalid_arg(cst_Random_int32);
      for(;;)
       {var b1=bits(s),b2=(bits(s) & 1) << 30,r=b1 | b2,v=caml_mod(r,bound);
        if(caml_greaterthan(r - v | 0,(2147483647 - bound | 0) + 1 | 0))
         continue;
        return v}}
    function int64(s,bound)
     {if(caml_lessequal(bound,_bZ_))return invalid_arg(cst_Random_int64);
      for(;;)
       {var
         b1=caml_int64_of_int32(bits(s)),
         b2=caml_int64_shift_left(caml_int64_of_int32(bits(s)),30),
         b3=caml_int64_shift_left(caml_int64_of_int32(bits(s) & 7),60),
         r=caml_int64_or(b1,caml_int64_or(b2,b3)),
         v=runtime.caml_int64_mod(r,bound);
        if
         (caml_greaterthan
           (caml_int64_sub(r,v),
            caml_int64_add(caml_int64_sub(max_int$2,bound),_bY_)))
         continue;
        return v}}
    function nativeint(s,bound){return int32(s,bound)}
    function float$0(s,bound)
     {var r1=bits(s),r2=bits(s);
      return (r1 / 1073741824. + r2) / 1073741824. * bound}
    function bool(s){return 0 === (bits(s) & 1)?1:0}
    var default$0=[0,_b0_.slice(),0];
    function bits$0(param){return bits(default$0)}
    function int$1(bound){return int$0(default$0,bound)}
    function int32$0(bound){return int32(default$0,bound)}
    function nativeint$0(bound){return nativeint(default$0,bound)}
    function int64$0(bound){return int64(default$0,bound)}
    function float$1(scale){return float$0(default$0,scale)}
    function bool$0(param){return bool(default$0)}
    function full_init$0(seed){return full_init(default$0,seed)}
    function init$4(seed){return full_init(default$0,[0,seed])}
    function self_init(param){return full_init$0(caml_sys_random_seed(0))}
    function get_state(param){return copy$5(default$0)}
    function set_state(s){return assign(default$0,s)}
    var
     _b1_=
      [0,
       make$2,
       make_self_init,
       copy$5,
       bits,
       int$0,
       int32,
       nativeint,
       int64,
       float$0,
       bool],
     Stdlib_random=
      [0,
       init$4,
       full_init$0,
       self_init,
       bits$0,
       int$1,
       int32$0,
       nativeint$0,
       int64$0,
       float$1,
       bool$0,
       _b1_,
       get_state,
       set_state];
    caml_register_global(757,Stdlib_random,"Stdlib__random");
    function hash$1(x){return caml_hash(10,100,0,x)}
    function hash_param(n1,n2,x){return caml_hash(n1,n2,0,x)}
    function seeded_hash(seed,x){return caml_hash(10,100,seed,x)}
    function ongoing_traversal(h)
     {var _mA_=h.length - 1 < 4?1:0,_mB_=_mA_ || (h[4] < 0?1:0);return _mB_}
    function flip_ongoing_traversal(h){h[4] = - h[4] | 0;return 0}
    try
     {var _cH_=caml_sys_getenv(cst_OCAMLRUNPARAM),params=_cH_}
    catch(_my_)
     {_my_ = caml_wrap_exception(_my_);
      if(_my_ !== Not_found)throw _my_;
      try
       {var _cG_=caml_sys_getenv(cst_CAMLRUNPARAM),_b2_=_cG_}
      catch(_mz_)
       {_mz_ = caml_wrap_exception(_mz_);
        if(_mz_ !== Not_found)throw _mz_;
        var _b2_=cst$66}
      var params=_b2_}
    var
     randomized_default=contains$0(params,82),
     randomized=[0,randomized_default];
    function randomize(param){randomized[1] = 1;return 0}
    function is_randomized(param){return randomized[1]}
    var prng=[246,function(_mx_){return caml_call1(_b1_[2],0)}];
    function create$3(opt,initial_size)
     {if(opt)var sth=opt[1],random=sth;else var random=randomized[1];
      var x=16;
      for(;;)
       {if(! (initial_size <= x))
         if(! (max_array_length < (x * 2 | 0)))
          {var x$0=x * 2 | 0,x=x$0;continue}
        if(random)
         var
          _mv_=caml_obj_tag(prng),
          _mw_=250 === _mv_?prng[1]:246 === _mv_?force_lazy_block(prng):prng,
          seed=caml_call1(_b1_[4],_mw_);
        else
         var seed=0;
        return [0,0,caml_make_vect(x,0),seed,x]}}
    function clear$2(h)
     {h[1] = 0;
      var len=h[2].length - 1,_mt_=len - 1 | 0,_ms_=0;
      if(! (_mt_ < 0))
       {var i=_ms_;
        for(;;)
         {caml_check_bound(h[2],i)[1 + i] = 0;
          var _mu_=i + 1 | 0;
          if(_mt_ !== i){var i=_mu_;continue}
          break}}
      return 0}
    function reset$0(h)
     {var len=h[2].length - 1;
      if(4 <= h.length - 1)
       if(len !== abs(h[4]))
        {h[1] = 0;h[2] = caml_make_vect(abs(h[4]),0);return 0}
      return clear$2(h)}
    function copy_bucketlist(param)
     {if(param)
       {var
         key=param[1],
         data=param[2],
         next=param[3],
         prec$0=[0,key,data,next],
         prec=prec$0,
         param$0=next;
        for(;;)
         {if(param$0)
           {var
             key$0=param$0[1],
             data$0=param$0[2],
             next$0=param$0[3],
             r=[0,key$0,data$0,next$0];
            if(prec){prec[3] = r;var prec=r,param$0=next$0;continue}
            throw [0,Assert_failure,_b3_]}
          return prec$0}}
      return 0}
    function copy$6(init)
     {var _mp_=init[4],_mq_=init[3],_mr_=map$5(copy_bucketlist,init[2]);
      return [0,init[1],_mr_,_mq_,_mp_]}
    function length$4(h){return h[1]}
    function resize$0(indexfun,h)
     {var
       odata=h[2],
       osize=odata.length - 1,
       nsize=osize * 2 | 0,
       _mg_=nsize < max_array_length?1:0;
      if(_mg_)
       {var
         ndata=caml_make_vect(nsize,0),
         ndata_tail=caml_make_vect(nsize,0),
         inplace=1 - ongoing_traversal(h);
        h[2] = ndata;
        var _mi_=osize - 1 | 0,_mh_=0;
        if(! (_mi_ < 0))
         {var i$0=_mh_;
          a:
          for(;;)
           {var cell$1=caml_check_bound(odata,i$0)[1 + i$0],cell=cell$1;
            for(;;)
             {if(cell)
               {var
                 key=cell[1],
                 data=cell[2],
                 next=cell[3],
                 cell$0=inplace?cell:[0,key,data,0],
                 nidx=caml_call2(indexfun,h,key),
                 match=caml_check_bound(ndata_tail,nidx)[1 + nidx];
                if(match)
                 match[3] = cell$0;
                else
                 caml_check_bound(ndata,nidx)[1 + nidx] = cell$0;
                caml_check_bound(ndata_tail,nidx)[1 + nidx] = cell$0;
                var cell=next;
                continue}
              var _mo_=i$0 + 1 | 0;
              if(_mi_ !== i$0){var i$0=_mo_;continue a}
              break}
            break}}
        if(inplace)
         {var _mk_=nsize - 1 | 0,_mj_=0;
          if(! (_mk_ < 0))
           {var i=_mj_;
            for(;;)
             {var match$0=caml_check_bound(ndata_tail,i)[1 + i];
              if(match$0)match$0[3] = 0;
              var _mn_=i + 1 | 0;
              if(_mk_ !== i){var i=_mn_;continue}
              break}}
          var _ml_=0}
        else
         var _ml_=inplace;
        var _mm_=_ml_}
      else
       var _mm_=_mg_;
      return _mm_}
    function key_index(h,key)
     {return 3 <= h.length - 1
              ?caml_hash(10,100,h[3],key) & (h[2].length - 1 - 1 | 0)
              :caml_mod
                (runtime.caml_hash_univ_param(10,100,key),h[2].length - 1)}
    function add$0(h,key,data)
     {var
       i=key_index(h,key),
       bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
      caml_check_bound(h[2],i)[1 + i] = bucket;
      h[1] = h[1] + 1 | 0;
      var _mf_=h[2].length - 1 << 1 < h[1]?1:0;
      return _mf_?resize$0(key_index,h):_mf_}
    function remove(h,key)
     {var i=key_index(h,key),c$0=caml_check_bound(h[2],i)[1 + i],prec=0,c=c$0;
      for(;;)
       {if(c)
         {var k=c[1],next=c[3];
          if(0 === caml_compare(k,key))
           {h[1] = h[1] - 1 | 0;
            return prec
                    ?(prec[3] = next,0)
                    :(caml_check_bound(h[2],i)[1 + i] = next,0)}
          var prec=c,c=next;
          continue}
        return 0}}
    function find$0(h,key)
     {var _me_=key_index(h,key),match=caml_check_bound(h[2],_me_)[1 + _me_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return d1;
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return d2;
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return d3;
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return data;
                var param=next;
                continue}
              throw Not_found}}
          throw Not_found}
        throw Not_found}
      throw Not_found}
    function find_opt$0(h,key)
     {var _md_=key_index(h,key),match=caml_check_bound(h[2],_md_)[1 + _md_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return [0,d1];
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return [0,d2];
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return [0,d3];
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return [0,data];
                var param=next;
                continue}
              return 0}}
          return 0}
        return 0}
      return 0}
    function find_all$0(h,key)
     {function find_in_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var k=param$0[1],data=param$0[2],next=param$0[3];
            if(0 === caml_compare(k,key))return [0,data,find_in_bucket(next)];
            var param$0=next;
            continue}
          return 0}}
      var _mc_=key_index(h,key);
      return find_in_bucket(caml_check_bound(h[2],_mc_)[1 + _mc_])}
    function replace(h,key,data)
     {var
       i=key_index(h,key),
       param$0=caml_check_bound(h[2],i)[1 + i],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3];
          if(0 !== caml_compare(k,key)){var param=next;continue}
          param[1] = key;
          param[2] = data;
          var _l$_=0}
        else
         var _l$_=1;
        if(_l$_)
         {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
          h[1] = h[1] + 1 | 0;
          var _ma_=h[2].length - 1 << 1 < h[1]?1:0;
          if(_ma_)return resize$0(key_index,h);
          var _mb_=_ma_}
        else
         var _mb_=_l$_;
        return _mb_}}
    function mem$2(h,key)
     {var
       _l__=key_index(h,key),
       param$0=caml_check_bound(h[2],_l__)[1 + _l__],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3],_l9_=0 === caml_compare(k,key)?1:0;
          if(_l9_)return _l9_;
          var param=next;
          continue}
        return 0}}
    function iter$10(f,h)
     {function do_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var key=param$0[1],data=param$0[2],next=param$0[3];
            caml_call2(f,key,data);
            var param$0=next;
            continue}
          return 0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],_l5_=d.length - 1 - 1 | 0,_l4_=0;
        if(! (_l5_ < 0))
         {var i=_l4_;
          for(;;)
           {do_bucket(caml_check_bound(d,i)[1 + i]);
            var _l8_=i + 1 | 0;
            if(_l5_ !== i){var i=_l8_;continue}
            break}}
        var _l6_=1 - old_trav,_l7_=_l6_?flip_ongoing_traversal(h):_l6_;
        return _l7_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function filter_map_inplace_bucket(f,h,i,prec,slot)
     {var prec$0=prec,slot$0=slot;
      for(;;)
       {if(slot$0)
         {var
           key=slot$0[1],
           data=slot$0[2],
           next=slot$0[3],
           match=caml_call2(f,key,data);
          if(match)
           {var data$0=match[1];
            if(prec$0)
             prec$0[3] = slot$0;
            else
             caml_check_bound(h[2],i)[1 + i] = slot$0;
            slot$0[2] = data$0;
            var prec$0=slot$0,slot$0=next;
            continue}
          h[1] = h[1] - 1 | 0;
          var slot$0=next;
          continue}
        return prec$0
                ?(prec$0[3] = 0,0)
                :(caml_check_bound(h[2],i)[1 + i] = 0,0)}}
    function filter_map_inplace(f,h)
     {var d=h[2],old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var _l1_=d.length - 1 - 1 | 0,_l0_=0;
        if(! (_l1_ < 0))
         {var i=_l0_;
          for(;;)
           {filter_map_inplace_bucket(f,h,i,0,caml_check_bound(h[2],i)[1 + i]);
            var _l3_=i + 1 | 0;
            if(_l1_ !== i){var i=_l3_;continue}
            break}}
        var _l2_=0;
        return _l2_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function fold$3(f,h,init)
     {function do_bucket(b,accu)
       {var b$0=b,accu$0=accu;
        for(;;)
         {if(b$0)
           {var
             key=b$0[1],
             data=b$0[2],
             next=b$0[3],
             accu$1=caml_call3(f,key,data,accu$0),
             b$0=next,
             accu$0=accu$1;
            continue}
          return accu$0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],accu=[0,init],_lW_=d.length - 1 - 1 | 0,_lV_=0;
        if(! (_lW_ < 0))
         {var i=_lV_;
          for(;;)
           {var _lY_=accu[1];
            accu[1] = do_bucket(caml_check_bound(d,i)[1 + i],_lY_);
            var _lZ_=i + 1 | 0;
            if(_lW_ !== i){var i=_lZ_;continue}
            break}}
        if(1 - old_trav)flip_ongoing_traversal(h);
        var _lX_=accu[1];
        return _lX_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function bucket_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[3],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function stats(h)
     {var
       _lS_=h[2],
       _lT_=0,
       mbl=
        fold_left$1(function(m,b){return max(m,bucket_length(0,b))},_lT_,_lS_),
       histo=caml_make_vect(mbl + 1 | 0,0),
       _lU_=h[2];
      iter$5
       (function(b)
         {var l=bucket_length(0,b);
          histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
          return 0},
        _lU_);
      return [0,h[1],h[2].length - 1,mbl,histo]}
    function to_seq$9(tbl)
     {var tbl_data=tbl[2];
      function aux(i,buck,param)
       {var i$0=i,buck$0=buck;
        for(;;)
         {if(buck$0)
           {var key=buck$0[1],data=buck$0[2],next=buck$0[3];
            return [0,[0,key,data],function(_lR_){return aux(i$0,next,_lR_)}]}
          if(i$0 === tbl_data.length - 1)return 0;
          var
           buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           buck$0=buck$1;
          continue}}
      var _lO_=0,_lP_=0;
      return function(_lQ_){return aux(_lP_,_lO_,_lQ_)}}
    function to_seq_keys(m)
     {var _lK_=to_seq$9(m);
      function _lL_(_lN_){return _lN_[1]}
      return function(_lM_){return map(_lL_,_lK_,_lM_)}}
    function to_seq_values(m)
     {var _lG_=to_seq$9(m);
      function _lH_(_lJ_){return _lJ_[2]}
      return function(_lI_){return map(_lH_,_lG_,_lI_)}}
    function add_seq$2(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return add$0(tbl,k,v)},
               i)}
    function replace_seq(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return replace(tbl,k,v)},
               i)}
    function of_seq$7(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
    function MakeSeeded(H)
     {function key_index(h,key)
       {var _lF_=h[2].length - 1 - 1 | 0;
        return caml_call2(H[2],h[3],key) & _lF_}
      function add(h,key,data)
       {var
         i=key_index(h,key),
         bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _lE_=h[2].length - 1 << 1 < h[1]?1:0;
        return _lE_?resize$0(key_index,h):_lE_}
      function remove(h,key)
       {var
         i=key_index(h,key),
         c$0=caml_check_bound(h[2],i)[1 + i],
         prec=0,
         c=c$0;
        for(;;)
         {if(c)
           {var k=c[1],next=c[3];
            if(caml_call2(H[1],k,key))
             {h[1] = h[1] - 1 | 0;
              return prec
                      ?(prec[3] = next,0)
                      :(caml_check_bound(h[2],i)[1 + i] = next,0)}
            var prec=c,c=next;
            continue}
          return 0}}
      function find(h,key)
       {var _lD_=key_index(h,key),match=caml_check_bound(h[2],_lD_)[1 + _lD_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return d1;
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return d2;
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return d3;
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return data;
                  var param=next;
                  continue}
                throw Not_found}}
            throw Not_found}
          throw Not_found}
        throw Not_found}
      function find_opt(h,key)
       {var _lC_=key_index(h,key),match=caml_check_bound(h[2],_lC_)[1 + _lC_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return [0,d1];
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return [0,d2];
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return [0,d3];
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return [0,data];
                  var param=next;
                  continue}
                return 0}}
            return 0}
          return 0}
        return 0}
      function find_all(h,key)
       {function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var k=param$0[1],d=param$0[2],next=param$0[3];
              if(caml_call2(H[1],k,key))return [0,d,find_in_bucket(next)];
              var param$0=next;
              continue}
            return 0}}
        var _lB_=key_index(h,key);
        return find_in_bucket(caml_check_bound(h[2],_lB_)[1 + _lB_])}
      function replace(h,key,data)
       {var
         i=key_index(h,key),
         param$0=caml_check_bound(h[2],i)[1 + i],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3];
            if(! caml_call2(H[1],k,key)){var param=next;continue}
            param[1] = key;
            param[2] = data;
            var _ly_=0}
          else
           var _ly_=1;
          if(_ly_)
           {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
            h[1] = h[1] + 1 | 0;
            var _lz_=h[2].length - 1 << 1 < h[1]?1:0;
            if(_lz_)return resize$0(key_index,h);
            var _lA_=_lz_}
          else
           var _lA_=_ly_;
          return _lA_}}
      function mem(h,key)
       {var
         _lx_=key_index(h,key),
         param$0=caml_check_bound(h[2],_lx_)[1 + _lx_],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3],_lw_=caml_call2(H[1],k,key);
            if(_lw_)return _lw_;
            var param=next;
            continue}
          return 0}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create$3,
              clear$2,
              reset$0,
              copy$6,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$10,
              filter_map_inplace,
              fold$3,
              length$4,
              stats,
              to_seq$9,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    function Make(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       _lv_=include[1];
      function create(sz){return caml_call2(_lv_,_b4_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    var
     Stdlib_hashtbl=
      [0,
       create$3,
       clear$2,
       reset$0,
       copy$6,
       add$0,
       find$0,
       find_opt$0,
       find_all$0,
       mem$2,
       remove,
       replace,
       iter$10,
       filter_map_inplace,
       fold$3,
       length$4,
       randomize,
       is_randomized,
       stats,
       to_seq$9,
       to_seq_keys,
       to_seq_values,
       add_seq$2,
       replace_seq,
       of_seq$7,
       Make,
       MakeSeeded,
       hash$1,
       seeded_hash,
       hash_param,
       caml_hash];
    caml_register_global(758,Stdlib_hashtbl,"Stdlib__hashtbl");
    function weak_create(l)
     {var _lt_=0 <= l?1:0,_lu_=_lt_?l <= _u_[15]?1:0:_lt_;
      if(1 - _lu_)invalid_arg(cst_Weak_create);
      return runtime.caml_weak_create(l)}
    function length$5(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset$0(e,o,msg)
     {var _lq_=0 <= o?1:0,_lr_=_lq_?o < length$5(e)?1:0:_lq_,_ls_=1 - _lr_;
      return _ls_?invalid_arg(msg):_ls_}
    function set(e,o,x)
     {raise_if_invalid_offset$0(e,o,cst_Weak_set);
      if(x){var x$0=x[1];return caml_ephe_set_key(e,o,x$0)}
      return caml_ephe_unset_key(e,o)}
    function get$0(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get);
      return runtime.caml_weak_get(e,o)}
    function get_copy(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get_copy);
      return runtime.caml_weak_get_copy(e,o)}
    function check$0(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_check);
      return runtime.caml_weak_check(e,o)}
    function blit$4(e1,o1,e2,o2,l)
     {if(0 <= l)
       if(0 <= o1)
        if(! ((length$5(e1) - l | 0) < o1))
         if(0 <= o2)
          if(! ((length$5(e2) - l | 0) < o2))
           {var
             _lo_=0 !== l?1:0,
             _lp_=_lo_?runtime.caml_weak_blit(e1,o1,e2,o2,l):_lo_;
            return _lp_}
      return invalid_arg(cst_Weak_blit)}
    function fill$2(ar,ofs,len,x)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((length$5(ar) - len | 0) < ofs))
         {var _lm_=(ofs + len | 0) - 1 | 0;
          if(! (_lm_ < ofs))
           {var i=ofs;
            for(;;)
             {set(ar,i,x);
              var _ln_=i + 1 | 0;
              if(_lm_ !== i){var i=_ln_;continue}
              break}}
          return 0}
      throw [0,Invalid_argument,cst_Weak_fill]}
    function Make$0(H)
     {var emptybucket=weak_create(0);
      function get_index(t,h){return caml_mod(h & 2147483647,t[1].length - 1)}
      var limit=7;
      function create(sz)
       {var
         sz$0=7 <= sz?sz:7,
         sz$1=max_array_length < sz$0?max_array_length:sz$0;
        return [0,
                caml_make_vect(sz$1,emptybucket),
                caml_make_vect(sz$1,[0]),
                limit,
                0,
                0]}
      function clear(t)
       {var _lk_=t[1].length - 1 - 1 | 0,_lj_=0;
        if(! (_lk_ < 0))
         {var i=_lj_;
          for(;;)
           {caml_check_bound(t[1],i)[1 + i] = emptybucket;
            caml_check_bound(t[2],i)[1 + i] = [0];
            var _ll_=i + 1 | 0;
            if(_lk_ !== i){var i=_ll_;continue}
            break}}
        t[3] = limit;
        t[4] = 0;
        return 0}
      function fold(f,t,init)
       {var _li_=t[1],i=0;
        return fold_right$0
                (function(b,accu$1)
                  {var i$0=i,accu=accu$1;
                   for(;;)
                    {if(length$5(b) <= i$0)return accu;
                     var match=get$0(b,i$0);
                     if(match)
                      {var
                        v=match[1],
                        accu$0=caml_call2(f,v,accu),
                        i$1=i$0 + 1 | 0,
                        i$0=i$1,
                        accu=accu$0;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _li_,
                 init)}
      function iter(f,t)
       {var _lh_=t[1],i=0;
        return iter$5
                (function(b)
                  {var i$0=i;
                   for(;;)
                    {if(length$5(b) <= i$0)return 0;
                     var match=get$0(b,i$0);
                     if(match)
                      {var v=match[1];
                       caml_call1(f,v);
                       var i$1=i$0 + 1 | 0,i$0=i$1;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _lh_)}
      function count_bucket(i,b,accu)
       {var i$0=i,accu$0=accu;
        for(;;)
         {if(length$5(b) <= i$0)return accu$0;
          var
           _lg_=check$0(b,i$0)?1:0,
           accu$1=accu$0 + _lg_ | 0,
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           accu$0=accu$1;
          continue}}
      function count(t)
       {var _lb_=0,_lc_=t[1],_ld_=0;
        return fold_right$0
                (function(_le_,_lf_){return count_bucket(_ld_,_le_,_lf_)},
                 _lc_,
                 _lb_)}
      function add_aux(t,setter,d,h,index)
       {var
         bucket$0=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket$0),
         i$3=0;
        for(;;)
         {if(sz <= i$3)
           {var
             newsz=
              min(((3 * sz | 0) / 2 | 0) + 3 | 0,max_array_length - 2 | 0);
            if(newsz <= sz)
             failwith(cst_Weak_Make_hash_bucket_cannot_grow_more);
            var
             newbucket=weak_create(newsz),
             newhashes=caml_make_vect(newsz,0);
            blit$4(bucket$0,0,newbucket,0,sz);
            blit$1(hashes,0,newhashes,0,sz);
            caml_call3(setter,newbucket,sz,d);
            caml_check_bound(newhashes,sz)[1 + sz] = h;
            caml_check_bound(t[1],index)[1 + index] = newbucket;
            caml_check_bound(t[2],index)[1 + index] = newhashes;
            var _k9_=sz <= t[3]?1:0,_k__=_k9_?t[3] < newsz?1:0:_k9_;
            if(_k__)
             {t[4] = t[4] + 1 | 0;
              var i$4=0;
              for(;;)
               {var
                 _k2_=t[5],
                 bucket=caml_check_bound(t[1],_k2_)[1 + _k2_],
                 _k3_=t[5],
                 hbucket=caml_check_bound(t[2],_k3_)[1 + _k3_],
                 n=length$5(bucket),
                 prev_len=(((n - 3 | 0) * 2 | 0) + 2 | 0) / 3 | 0,
                 live=count_bucket(0,bucket,0);
                if(live <= prev_len)
                 {var j$2=length$5(bucket) - 1 | 0,i$0=0,j=j$2;
                  for(;;)
                   {if(prev_len <= j)
                     {if(check$0(bucket,i$0))
                       {var i$1=i$0 + 1 | 0,i$0=i$1;continue}
                      if(check$0(bucket,j))
                       {blit$4(bucket,j,bucket,i$0,1);
                        var _k4_=caml_check_bound(hbucket,j)[1 + j];
                        caml_check_bound(hbucket,i$0)[1 + i$0] = _k4_;
                        var j$0=j - 1 | 0,i$2=i$0 + 1 | 0,i$0=i$2,j=j$0;
                        continue}
                      var j$1=j - 1 | 0,j=j$1;
                      continue}
                    if(0 === prev_len)
                     {var _k5_=t[5];
                      caml_check_bound(t[1],_k5_)[1 + _k5_] = emptybucket;
                      var _k6_=t[5];
                      caml_check_bound(t[2],_k6_)[1 + _k6_] = [0]}
                    else
                     {caml_obj_truncate(bucket,prev_len + 2 | 0);
                      caml_obj_truncate(hbucket,prev_len)}
                    var _k7_=t[3] < n?1:0,_k8_=_k7_?prev_len <= t[3]?1:0:_k7_;
                    if(_k8_)t[4] = t[4] - 1 | 0;
                    break}}
                t[5] = caml_mod(t[5] + 1 | 0,t[1].length - 1);
                var _la_=i$4 + 1 | 0;
                if(2 !== i$4){var i$4=_la_;continue}
                break}}
            var _k$_=((t[1].length - 1) / 2 | 0) < t[4]?1:0;
            if(_k$_)
             {var
               n$0=t[1].length - 1,
               newlen=min(((3 * n$0 | 0) / 2 | 0) + 3 | 0,max_array_length);
              if(n$0 < newlen)
               {var newt=create(newlen),_k1_=t[1],i=0;
                iteri$2
                 (function(j,ob)
                   {var i$0=i;
                    for(;;)
                     {if(length$5(ob) <= i$0)return 0;
                      var match=check$0(ob,i$0);
                      if(0 === match){var i$1=i$0 + 1 | 0,i$0=i$1;continue}
                      var
                       oh=caml_check_bound(t[2],j)[1 + j],
                       setter$0=
                        function(i)
                         {function setter(nb,ni,param){return blit$4(ob,i,nb,ni,1)}
                          return setter},
                       setter=setter$0(i$0),
                       h=caml_check_bound(oh,i$0)[1 + i$0];
                      add_aux(newt,setter,0,h,get_index(newt,h));
                      var i$2=i$0 + 1 | 0,i$0=i$2;
                      continue}},
                  _k1_);
                t[1] = newt[1];
                t[2] = newt[2];
                t[3] = newt[3];
                t[4] = newt[4];
                t[5] = caml_mod(t[5],newt[1].length - 1);
                return 0}
              t[3] = max_int;
              t[4] = 0;
              return 0}
            return _k$_}
          if(check$0(bucket$0,i$3)){var i$5=i$3 + 1 | 0,i$3=i$5;continue}
          caml_call3(setter,bucket$0,i$3,d);
          caml_check_bound(hashes,i$3)[1 + i$3] = h;
          return 0}}
      function add(t,d)
       {var h=caml_call1(H[2],d);return add_aux(t,set,[0,d],h,get_index(t,h))}
      function find_or(t,d,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return caml_call2(ifnotfound,h,index);
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$0(bucket,i);
                if(match$0){var v$0=match$0[1];return v$0}
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function merge(t,d)
       {return find_or
                (t,d,function(h,index){add_aux(t,set,[0,d],h,index);return d})}
      function find(t,d)
       {return find_or(t,d,function(h,index){throw Not_found})}
      function find_opt(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return 0;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var v$0=get$0(bucket,i);
                if(v$0)return v$0;
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function find_shadow(t,d,iffound,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return ifnotfound;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))return caml_call2(iffound,bucket,i)}
            var i$0=i + 1 | 0,i=i$0;
            continue}
          var i$1=i + 1 | 0,i=i$1;
          continue}}
      function remove(t,d)
       {var _k0_=0;
        return find_shadow(t,d,function(w,i){return set(w,i,0)},_k0_)}
      function mem(t,d)
       {var _kZ_=0;return find_shadow(t,d,function(w,i){return 1},_kZ_)}
      function find_all(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0,
         accu=0;
        for(;;)
         {if(sz <= i)return accu;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$0(bucket,i);
                if(match$0)
                 {var
                   v$0=match$0[1],
                   accu$0=[0,v$0,accu],
                   i$0=i + 1 | 0,
                   i=i$0,
                   accu=accu$0;
                  continue}
                var i$1=i + 1 | 0,i=i$1;
                continue}}
            var i$2=i + 1 | 0,i=i$2;
            continue}
          var i$3=i + 1 | 0,i=i$3;
          continue}}
      function stats(t)
       {var len=t[1].length - 1,lens=map$5(length$5,t[1]);
        sort(caml_int_compare,lens);
        var
         _kR_=0,
         totlen=
          fold_left$1(function(_kY_,_kX_){return _kY_ + _kX_ | 0},_kR_,lens),
         _kS_=len - 1 | 0,
         _kU_=len / 2 | 0,
         _kT_=caml_check_bound(lens,_kS_)[1 + _kS_],
         _kV_=caml_check_bound(lens,_kU_)[1 + _kU_],
         _kW_=caml_check_bound(lens,0)[1];
        return [0,len,count(t),totlen,_kW_,_kV_,_kT_]}
      return [0,
              create,
              clear,
              merge,
              add,
              remove,
              find,
              find_opt,
              find_all,
              mem,
              iter,
              fold,
              count,
              stats]}
    var
     Stdlib_weak=
      [0,weak_create,length$5,set,get$0,get_copy,check$0,fill$2,blit$4,Make$0];
    caml_register_global(759,Stdlib_weak,"Stdlib__weak");
    function id$0(x){return x}
    var
     String_tag=[248,cst_Stdlib_Format_String_tag,caml_fresh_oo_id(0)],
     size=0,
     unknown=-1;
    function pp_enqueue(state,token)
     {state[13] = state[13] + token[3] | 0;return add(token,state[28])}
    var pp_infinity=1000000010;
    function pp_output_string(state,s)
     {return caml_call3(state[17],s,0,caml_ml_string_length(s))}
    function pp_output_newline(state){return caml_call1(state[19],0)}
    function format_pp_text(state,size,text)
     {state[9] = state[9] - size | 0;
      pp_output_string(state,text);
      state[11] = 0;
      return 0}
    function format_string(state,s)
     {var _kQ_=caml_string_notequal(s,cst$67);
      return _kQ_?format_pp_text(state,caml_ml_string_length(s),s):_kQ_}
    function break_new_line(state,param,width)
     {var after=param[3],offset=param[2],before=param[1];
      format_string(state,before);
      pp_output_newline(state);
      state[11] = 1;
      var
       indent=(state[6] - width | 0) + offset | 0,
       real_indent=min(state[8],indent);
      state[10] = real_indent;
      state[9] = state[6] - state[10] | 0;
      caml_call1(state[21],state[10]);
      return format_string(state,after)}
    function break_line(state,width){return break_new_line(state,_b5_,width)}
    function break_same_line(state,param)
     {var after=param[3],width=param[2],before=param[1];
      format_string(state,before);
      state[9] = state[9] - width | 0;
      caml_call1(state[20],width);
      return format_string(state,after)}
    function advance_left(state)
     {for(;;)
       {var match$12=peek_opt(state[28]);
        if(match$12)
         {var
           match$13=match$12[1],
           size$0=match$13[1],
           length$0=match$13[3],
           token=match$13[2],
           pending_count=state[13] - state[12] | 0,
           _kO_=0 <= size$0?1:0,
           _kP_=_kO_ || (state[9] <= pending_count?1:0);
          if(_kP_)
           {take(state[28]);
            var size$1=0 <= size$0?size$0:pp_infinity;
            if(typeof token === "number")
             switch(token)
              {case 0:
                var match$3=top_opt(state[3]);
                if(match$3)
                 {var
                   match$4=match$3[1],
                   tabs=match$4[1],
                   add_tab=
                    function(n,ls)
                     {if(ls)
                       {var l=ls[2],x=ls[1];
                        return caml_lessthan(n,x)?[0,n,ls]:[0,x,add_tab(n,l)]}
                      return [0,n,0]};
                  tabs[1] = add_tab(state[6] - state[9] | 0,tabs[1])}
                break;
               case 1:pop_opt(state[2]);break;
               case 2:pop_opt(state[3]);break;
               case 3:
                var match$5=top_opt(state[2]);
                if(match$5)
                 {var match$6=match$5[1],width$0=match$6[2];
                  break_line(state,width$0)}
                else
                 pp_output_newline(state);
                break;
               case 4:
                if(state[10] !== (state[6] - state[9] | 0))
                 {var match$1=take_opt(state[28]);
                  if(match$1)
                   {var match$2=match$1[1],size=match$2[1],length=match$2[3];
                    state[12] = state[12] - length | 0;
                    state[9] = state[9] + size | 0}}
                break;
               default:
                var match$7=pop_opt(state[5]);
                if(match$7)
                 {var
                   tag_name=match$7[1],
                   marker=caml_call1(state[25],tag_name);
                  pp_output_string(state,marker)}}
            else
             switch(token[0])
              {case 0:var s=token[1];format_pp_text(state,size$1,s);break;
               case 1:
                var
                 breaks=token[2],
                 fits=token[1],
                 off=breaks[2],
                 before=breaks[1],
                 match$8=top_opt(state[2]);
                if(match$8)
                 {var
                   match$9=match$8[1],
                   width$1=match$9[2],
                   box_type$0=match$9[1];
                  switch(box_type$0)
                   {case 0:break_same_line(state,fits);break;
                    case 1:break_new_line(state,breaks,width$1);break;
                    case 2:break_new_line(state,breaks,width$1);break;
                    case 3:
                     if(state[9] < (size$1 + caml_ml_string_length(before) | 0))
                      break_new_line(state,breaks,width$1);
                     else
                      break_same_line(state,fits);
                     break;
                    case 4:
                     if(state[11])
                      break_same_line(state,fits);
                     else
                      if(state[9] < (size$1 + caml_ml_string_length(before) | 0))
                       break_new_line(state,breaks,width$1);
                      else
                       if(((state[6] - width$1 | 0) + off | 0) < state[10])
                        break_new_line(state,breaks,width$1);
                       else
                        break_same_line(state,fits);
                     break;
                    default:break_same_line(state,fits)}}
                break;
               case 2:
                var
                 off$0=token[2],
                 n=token[1],
                 insertion_point=state[6] - state[9] | 0,
                 match$10=top_opt(state[3]);
                if(match$10)
                 {var match$11=match$10[1],tabs$0=match$11[1],_kM_=tabs$0[1];
                  if(_kM_)
                   {var first=_kM_[1],param=tabs$0[1];
                    for(;;)
                     {if(param)
                       {var tail=param[2],head=param[1];
                        if(! (insertion_point <= head)){var param=tail;continue}
                        var _kN_=head}
                      else
                       var _kN_=first;
                      var tab=_kN_;
                      break}}
                  else
                   var tab=insertion_point;
                  var offset=tab - insertion_point | 0;
                  if(0 <= offset)
                   break_same_line(state,[0,cst$69,offset + n | 0,cst$68]);
                  else
                   break_new_line
                    (state,[0,cst$71,tab + off$0 | 0,cst$70],state[6])}
                break;
               case 3:
                var
                 ty=token[2],
                 off$1=token[1],
                 insertion_point$0=state[6] - state[9] | 0;
                if(state[8] < insertion_point$0)
                 {var match=top_opt(state[2]);
                  if(match)
                   {var match$0=match[1],width=match$0[2],box_type=match$0[1];
                    if(state[9] < width)
                     {var switcher=box_type - 1 | 0;
                      if(! (3 < switcher >>> 0))break_line(state,width)}}
                  else
                   pp_output_newline(state)}
                var
                 width$2=state[9] - off$1 | 0,
                 box_type$1=1 === ty?1:state[9] < size$1?ty:5;
                push([0,box_type$1,width$2],state[2]);
                break;
               case 4:var tbox=token[1];push(tbox,state[3]);break;
               default:
                var
                 tag_name$0=token[1],
                 marker$0=caml_call1(state[24],tag_name$0);
                pp_output_string(state,marker$0);
                push(tag_name$0,state[5])}
            state[12] = length$0 + state[12] | 0;
            continue}
          return _kP_}
        return 0}}
    function enqueue_advance(state,tok)
     {pp_enqueue(state,tok);return advance_left(state)}
    function enqueue_string_as(state,size,s)
     {return enqueue_advance(state,[0,size,[0,s],size])}
    function initialize_scan_stack(stack)
     {clear(stack);
      var queue_elem=[0,unknown,_b6_,0];
      return push([0,-1,queue_elem],stack)}
    function set_size(state,ty)
     {var match=top_opt(state[1]);
      if(match)
       {var
         match$0=match[1],
         queue_elem=match$0[2],
         left_total=match$0[1],
         _kJ_=queue_elem[1];
        if(left_total < state[12])return initialize_scan_stack(state[1]);
        var _kK_=queue_elem[2];
        if(typeof _kK_ !== "number")
         switch(_kK_[0])
          {case 3:
            var _kL_=1 - ty;
            return _kL_
                    ?(queue_elem[1] = state[13] + _kJ_ | 0,pop_opt(state[1]),0)
                    :_kL_;
           case 1:
           case 2:
            return ty
                    ?(queue_elem[1] = state[13] + _kJ_ | 0,pop_opt(state[1]),0)
                    :ty
           }
        return 0}
      return 0}
    function scan_push(state,b,token)
     {pp_enqueue(state,token);
      if(b)set_size(state,1);
      var elem=[0,state[13],token];
      return push(elem,state[1])}
    function pp_open_box_gen(state,indent,br_ty)
     {state[14] = state[14] + 1 | 0;
      if(state[14] < state[15])
       {var size=- state[13] | 0,elem=[0,size,[3,indent,br_ty],0];
        return scan_push(state,0,elem)}
      var _kH_=state[14] === state[15]?1:0;
      if(_kH_)
       {var _kI_=state[16];
        return enqueue_string_as(state,caml_ml_string_length(_kI_),_kI_)}
      return _kH_}
    function pp_close_box(state,param)
     {var _kF_=1 < state[14]?1:0;
      if(_kF_)
       {if(state[14] < state[15])
         {pp_enqueue(state,[0,size,1,0]);set_size(state,1);set_size(state,0)}
        state[14] = state[14] - 1 | 0;
        var _kG_=0}
      else
       var _kG_=_kF_;
      return _kG_}
    function pp_open_stag(state,tag_name)
     {if(state[22]){push(tag_name,state[4]);caml_call1(state[26],tag_name)}
      var _kE_=state[23];
      if(_kE_)
       {var token=[5,tag_name];return pp_enqueue(state,[0,size,token,0])}
      return _kE_}
    function pp_close_stag(state,param)
     {if(state[23])pp_enqueue(state,[0,size,5,0]);
      var _kC_=state[22];
      if(_kC_)
       {var match=pop_opt(state[4]);
        if(match){var tag_name=match[1];return caml_call1(state[27],tag_name)}
        var _kD_=0}
      else
       var _kD_=_kC_;
      return _kD_}
    function pp_open_tag(state,s){return pp_open_stag(state,[0,String_tag,s])}
    function pp_close_tag(state,param){return pp_close_stag(state,0)}
    function pp_set_print_tags(state,b){state[22] = b;return 0}
    function pp_set_mark_tags(state,b){state[23] = b;return 0}
    function pp_get_print_tags(state,param){return state[22]}
    function pp_get_mark_tags(state,param){return state[23]}
    function pp_set_tags(state,b)
     {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b)}
    function pp_get_formatter_stag_functions(state,param)
     {return [0,state[24],state[25],state[26],state[27]]}
    function pp_set_formatter_stag_functions(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      state[24] = mot;
      state[25] = mct;
      state[26] = pot;
      state[27] = pct;
      return 0}
    function pp_rinit(state)
     {state[12] = 1;
      state[13] = 1;
      clear$0(state[28]);
      initialize_scan_stack(state[1]);
      clear(state[2]);
      clear(state[3]);
      clear(state[4]);
      clear(state[5]);
      state[10] = 0;
      state[14] = 0;
      state[9] = state[6];
      return pp_open_box_gen(state,0,3)}
    function pp_flush_queue(state,b)
     {var _kB_=state[4];
      iter$7(function(param){return pp_close_tag(state,0)},_kB_);
      for(;;)
       {if(1 < state[14]){pp_close_box(state,0);continue}
        state[13] = pp_infinity;
        advance_left(state);
        if(b)pp_output_newline(state);
        return pp_rinit(state)}}
    function pp_print_as_size(state,size,s)
     {var _kA_=state[14] < state[15]?1:0;
      return _kA_?enqueue_string_as(state,size,s):_kA_}
    function pp_print_as(state,isize,s)
     {return pp_print_as_size(state,isize,s)}
    function pp_print_string(state,s)
     {return pp_print_as(state,caml_ml_string_length(s),s)}
    function pp_print_int(state,i)
     {return pp_print_string(state,caml_new_string("" + i))}
    function pp_print_float(state,f)
     {return pp_print_string(state,to_string(f))}
    function pp_print_bool(state,b)
     {return pp_print_string(state,string_of_bool(b))}
    function pp_print_char(state,c){return pp_print_as(state,1,make$0(1,c))}
    function pp_open_hbox(state,param){return pp_open_box_gen(state,0,0)}
    function pp_open_vbox(state,indent)
     {return pp_open_box_gen(state,indent,1)}
    function pp_open_hvbox(state,indent)
     {return pp_open_box_gen(state,indent,2)}
    function pp_open_hovbox(state,indent)
     {return pp_open_box_gen(state,indent,3)}
    function pp_open_box(state,indent){return pp_open_box_gen(state,indent,4)}
    function pp_print_newline(state,param)
     {pp_flush_queue(state,1);return caml_call1(state[18],0)}
    function pp_print_flush(state,param)
     {pp_flush_queue(state,0);return caml_call1(state[18],0)}
    function pp_force_newline(state,param)
     {var _kz_=state[14] < state[15]?1:0;
      return _kz_?enqueue_advance(state,[0,size,3,0]):_kz_}
    function pp_print_if_newline(state,param)
     {var _ky_=state[14] < state[15]?1:0;
      return _ky_?enqueue_advance(state,[0,size,4,0]):_ky_}
    function pp_print_custom_break(state,fits,breaks)
     {var
       after=fits[3],
       width=fits[2],
       before=fits[1],
       _kx_=state[14] < state[15]?1:0;
      if(_kx_)
       {var
         size=- state[13] | 0,
         token=[1,fits,breaks],
         length=
          (caml_ml_string_length(before) + width | 0)
          +
          caml_ml_string_length(after)
          |
          0,
         elem=[0,size,token,length];
        return scan_push(state,1,elem)}
      return _kx_}
    function pp_print_break(state,width,offset)
     {return pp_print_custom_break
              (state,[0,cst$75,width,cst$74],[0,cst$73,offset,cst$72])}
    function pp_print_space(state,param){return pp_print_break(state,1,0)}
    function pp_print_cut(state,param){return pp_print_break(state,0,0)}
    function pp_open_tbox(state,param)
     {state[14] = state[14] + 1 | 0;
      var _kw_=state[14] < state[15]?1:0;
      if(_kw_)
       {var elem=[0,size,[4,[0,[0,0]]],0];return enqueue_advance(state,elem)}
      return _kw_}
    function pp_close_tbox(state,param)
     {var _kt_=1 < state[14]?1:0;
      if(_kt_)
       {var _ku_=state[14] < state[15]?1:0;
        if(_ku_)
         {var elem=[0,size,2,0];
          enqueue_advance(state,elem);
          state[14] = state[14] - 1 | 0;
          var _kv_=0}
        else
         var _kv_=_ku_}
      else
       var _kv_=_kt_;
      return _kv_}
    function pp_print_tbreak(state,width,offset)
     {var _ks_=state[14] < state[15]?1:0;
      if(_ks_)
       {var size=- state[13] | 0,elem=[0,size,[2,width,offset],width];
        return scan_push(state,1,elem)}
      return _ks_}
    function pp_print_tab(state,param){return pp_print_tbreak(state,0,0)}
    function pp_set_tab(state,param)
     {var _kr_=state[14] < state[15]?1:0;
      if(_kr_){var elem=[0,size,0,0];return enqueue_advance(state,elem)}
      return _kr_}
    function pp_set_max_boxes(state,n)
     {var _kp_=1 < n?1:0,_kq_=_kp_?(state[15] = n,0):_kp_;return _kq_}
    function pp_get_max_boxes(state,param){return state[15]}
    function pp_over_max_boxes(state,param)
     {return state[14] === state[15]?1:0}
    function pp_set_ellipsis_text(state,s){state[16] = s;return 0}
    function pp_get_ellipsis_text(state,param){return state[16]}
    function pp_limit(n){return n < 1000000010?n:1000000009}
    function pp_set_max_indent(state,n$0)
     {var _ko_=1 < n$0?1:0;
      if(_ko_)
       {var n$1=state[6] - n$0 | 0,_kn_=1 <= n$1?1:0;
        if(_kn_)
         {var n=pp_limit(n$1);
          state[7] = n;
          state[8] = state[6] - state[7] | 0;
          return pp_rinit(state)}
        return _kn_}
      return _ko_}
    function pp_get_max_indent(state,param){return state[8]}
    function pp_set_margin(state,n)
     {var _km_=1 <= n?1:0;
      if(_km_)
       {var n$0=pp_limit(n);
        state[6] = n$0;
        var
         new_max_indent=
          state[8] <= state[6]
           ?state[8]
           :max(max(state[6] - state[7] | 0,state[6] / 2 | 0),1);
        return pp_set_max_indent(state,new_max_indent)}
      return _km_}
    function check_geometry(geometry)
     {var
       _kk_=1 < geometry[1]?1:0,
       _kl_=_kk_?geometry[1] < geometry[2]?1:0:_kk_;
      return _kl_}
    function pp_get_margin(state,param){return state[6]}
    function pp_set_geometry(state,max_indent,margin)
     {if(2 <= max_indent)
       {if(margin <= max_indent)
         throw [0,
                Invalid_argument,
                cst_Format_pp_set_geometry_margin_max_indent];
        pp_set_margin(state,margin);
        return pp_set_max_indent(state,max_indent)}
      throw [0,Invalid_argument,cst_Format_pp_set_geometry_max_indent_2]}
    function pp_safe_set_geometry(state,max_indent,margin)
     {return check_geometry([0,max_indent,margin])
              ?pp_set_geometry(state,max_indent,margin)
              :0}
    function pp_get_geometry(state,param){return [0,state[8],state[6]]}
    function pp_set_formatter_out_functions(state,param)
     {var j=param[5],i=param[4],h=param[3],g=param[2],f=param[1];
      state[17] = f;
      state[18] = g;
      state[19] = h;
      state[20] = i;
      state[21] = j;
      return 0}
    function pp_get_formatter_out_functions(state,param)
     {return [0,state[17],state[18],state[19],state[20],state[21]]}
    function pp_set_formatter_output_functions(state,f,g)
     {state[17] = f;state[18] = g;return 0}
    function pp_get_formatter_output_functions(state,param)
     {return [0,state[17],state[18]]}
    function display_newline(state,param)
     {return caml_call3(state[17],cst$76,0,1)}
    var blank_line=make$0(80,32);
    function display_indent(state,n)
     {var n$0=n;
      for(;;)
       {var _kj_=0 < n$0?1:0;
        if(_kj_)
         {if(80 < n$0)
           {caml_call3(state[17],blank_line,0,80);
            var n$1=n$0 - 80 | 0,n$0=n$1;
            continue}
          return caml_call3(state[17],blank_line,0,n$0)}
        return _kj_}}
    function pp_set_formatter_out_channel(state,oc)
     {state[17]
      =
      function(_kg_,_kh_,_ki_){return output_substring(oc,_kg_,_kh_,_ki_)};
      state[18] = function(param){return caml_ml_flush(oc)};
      state[19] = function(_kf_){return display_newline(state,_kf_)};
      state[20] = function(_ke_){return display_indent(state,_ke_)};
      state[21] = function(_kd_){return display_indent(state,_kd_)};
      return 0}
    function default_pp_mark_open_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return symbol(cst$78,symbol(s,cst$77))}
      return cst$79}
    function default_pp_mark_close_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return symbol(cst$81,symbol(s,cst$80))}
      return cst$82}
    function default_pp_print_open_tag(_kc_){return 0}
    function default_pp_print_close_tag(_kb_){return 0}
    function pp_make_formatter(f,g,h,i,j)
     {var pp_queue=create$1(0),sys_tok=[0,unknown,_b7_,0];
      add(sys_tok,pp_queue);
      var scan_stack=create$0(0);
      initialize_scan_stack(scan_stack);
      push([0,1,sys_tok],scan_stack);
      var _j__=create$0(0),_j$_=create$0(0),_ka_=create$0(0);
      return [0,
              scan_stack,
              create$0(0),
              _ka_,
              _j$_,
              _j__,
              78,
              10,
              68,
              78,
              0,
              1,
              1,
              1,
              1,
              max_int,
              cst$83,
              f,
              g,
              h,
              i,
              j,
              0,
              0,
              default_pp_mark_open_tag,
              default_pp_mark_close_tag,
              default_pp_print_open_tag,
              default_pp_print_close_tag,
              pp_queue]}
    function formatter_of_out_functions(out_funs)
     {return pp_make_formatter
              (out_funs[1],out_funs[2],out_funs[3],out_funs[4],out_funs[5])}
    function make_formatter(output,flush)
     {function _j2_(_j9_){return 0}
      function _j3_(_j8_){return 0}
      var
       ppf=
        pp_make_formatter(output,flush,function(_j7_){return 0},_j3_,_j2_);
      ppf[19] = function(_j6_){return display_newline(ppf,_j6_)};
      ppf[20] = function(_j5_){return display_indent(ppf,_j5_)};
      ppf[21] = function(_j4_){return display_indent(ppf,_j4_)};
      return ppf}
    function formatter_of_out_channel(oc)
     {function _jY_(param){return caml_ml_flush(oc)}
      return make_formatter
              (function(_jZ_,_j0_,_j1_)
                {return output_substring(oc,_jZ_,_j0_,_j1_)},
               _jY_)}
    function formatter_of_buffer(b)
     {function _jT_(_jX_){return 0}
      return make_formatter
              (function(_jU_,_jV_,_jW_)
                {return add_substring(b,_jU_,_jV_,_jW_)},
               _jT_)}
    var pp_buffer_size=512;
    function pp_make_buffer(param){return create$2(pp_buffer_size)}
    var
     stdbuf=pp_make_buffer(0),
     std_formatter=formatter_of_out_channel(stdout),
     err_formatter=formatter_of_out_channel(stderr),
     str_formatter=formatter_of_buffer(stdbuf);
    function flush_buffer_formatter(buf,ppf)
     {pp_flush_queue(ppf,0);var s=contents(buf);reset(buf);return s}
    function flush_str_formatter(param)
     {return flush_buffer_formatter(stdbuf,str_formatter)}
    function make_symbolic_output_buffer(param){return [0,0]}
    function clear_symbolic_output_buffer(sob){sob[1] = 0;return 0}
    function get_symbolic_output_buffer(sob){return rev(sob[1])}
    function flush_symbolic_output_buffer(sob)
     {var items=get_symbolic_output_buffer(sob);
      clear_symbolic_output_buffer(sob);
      return items}
    function add_symbolic_output_item(sob,item)
     {sob[1] = [0,item,sob[1]];return 0}
    function formatter_of_symbolic_output_buffer(sob)
     {function f(s,i,n){return add_symbolic_output_item(sob,[0,sub$0(s,i,n)])}
      function g(_jS_){return add_symbolic_output_item(sob,0)}
      function h(_jR_){return add_symbolic_output_item(sob,1)}
      function i(n){return add_symbolic_output_item(sob,[1,n])}
      function j(n){return add_symbolic_output_item(sob,[2,n])}
      return pp_make_formatter(f,g,h,i,j)}
    function open_hbox(_jQ_){return pp_open_hbox(std_formatter,_jQ_)}
    function open_vbox(_jP_){return pp_open_vbox(std_formatter,_jP_)}
    function open_hvbox(_jO_){return pp_open_hvbox(std_formatter,_jO_)}
    function open_hovbox(_jN_){return pp_open_hovbox(std_formatter,_jN_)}
    function open_box(_jM_){return pp_open_box(std_formatter,_jM_)}
    function close_box(_jL_){return pp_close_box(std_formatter,_jL_)}
    function open_tag(_jK_){return pp_open_tag(std_formatter,_jK_)}
    function close_tag(_jJ_){return pp_close_tag(std_formatter,_jJ_)}
    function open_stag(_jI_){return pp_open_stag(std_formatter,_jI_)}
    function close_stag(_jH_){return pp_close_stag(std_formatter,_jH_)}
    function print_as(_jF_,_jG_){return pp_print_as(std_formatter,_jF_,_jG_)}
    function print_string$0(_jE_){return pp_print_string(std_formatter,_jE_)}
    function print_int$0(_jD_){return pp_print_int(std_formatter,_jD_)}
    function print_float$0(_jC_){return pp_print_float(std_formatter,_jC_)}
    function print_char$0(_jB_){return pp_print_char(std_formatter,_jB_)}
    function print_bool(_jA_){return pp_print_bool(std_formatter,_jA_)}
    function print_break(_jy_,_jz_)
     {return pp_print_break(std_formatter,_jy_,_jz_)}
    function print_cut(_jx_){return pp_print_cut(std_formatter,_jx_)}
    function print_space(_jw_){return pp_print_space(std_formatter,_jw_)}
    function force_newline(_jv_){return pp_force_newline(std_formatter,_jv_)}
    function print_flush(_ju_){return pp_print_flush(std_formatter,_ju_)}
    function print_newline$0(_jt_)
     {return pp_print_newline(std_formatter,_jt_)}
    function print_if_newline(_js_)
     {return pp_print_if_newline(std_formatter,_js_)}
    function open_tbox(_jr_){return pp_open_tbox(std_formatter,_jr_)}
    function close_tbox(_jq_){return pp_close_tbox(std_formatter,_jq_)}
    function print_tbreak(_jo_,_jp_)
     {return pp_print_tbreak(std_formatter,_jo_,_jp_)}
    function set_tab(_jn_){return pp_set_tab(std_formatter,_jn_)}
    function print_tab(_jm_){return pp_print_tab(std_formatter,_jm_)}
    function set_margin(_jl_){return pp_set_margin(std_formatter,_jl_)}
    function get_margin(_jk_){return std_formatter[6]}
    function set_max_indent(_jj_)
     {return pp_set_max_indent(std_formatter,_jj_)}
    function get_max_indent(_ji_){return std_formatter[8]}
    function set_geometry(_jg_,_jh_)
     {return pp_set_geometry(std_formatter,_jg_,_jh_)}
    function safe_set_geometry(_je_,_jf_)
     {return pp_safe_set_geometry(std_formatter,_je_,_jf_)}
    function get_geometry(_jd_){return pp_get_geometry(std_formatter,_jd_)}
    function set_max_boxes(_jc_){return pp_set_max_boxes(std_formatter,_jc_)}
    function get_max_boxes(_jb_){return std_formatter[15]}
    function over_max_boxes(_ja_)
     {return pp_over_max_boxes(std_formatter,_ja_)}
    function set_ellipsis_text(_i$_)
     {return pp_set_ellipsis_text(std_formatter,_i$_)}
    function get_ellipsis_text(_i__){return std_formatter[16]}
    function set_formatter_out_channel(_i9_)
     {return pp_set_formatter_out_channel(std_formatter,_i9_)}
    function set_formatter_out_functions(_i8_)
     {return pp_set_formatter_out_functions(std_formatter,_i8_)}
    function get_formatter_out_functions(_i7_)
     {return pp_get_formatter_out_functions(std_formatter,_i7_)}
    function set_formatter_output_functions(_i5_,_i6_)
     {return pp_set_formatter_output_functions(std_formatter,_i5_,_i6_)}
    function get_formatter_output_functions(_i4_)
     {return pp_get_formatter_output_functions(std_formatter,_i4_)}
    function set_formatter_stag_functions(_i3_)
     {return pp_set_formatter_stag_functions(std_formatter,_i3_)}
    function get_formatter_stag_functions(_i2_)
     {return pp_get_formatter_stag_functions(std_formatter,_i2_)}
    function set_print_tags(_i1_)
     {return pp_set_print_tags(std_formatter,_i1_)}
    function get_print_tags(_i0_){return std_formatter[22]}
    function set_mark_tags(_iZ_){return pp_set_mark_tags(std_formatter,_iZ_)}
    function get_mark_tags(_iY_){return std_formatter[23]}
    function set_tags(_iX_){return pp_set_tags(std_formatter,_iX_)}
    function pp_print_list(opt,pp_v,ppf,param)
     {var opt$0=opt,param$0=param;
      for(;;)
       {if(opt$0)var sth=opt$0[1],pp_sep=sth;else var pp_sep=pp_print_cut;
        if(param$0)
         {var _iV_=param$0[2],_iW_=param$0[1];
          if(_iV_)
           {caml_call2(pp_v,ppf,_iW_);
            caml_call2(pp_sep,ppf,0);
            var opt$1=[0,pp_sep],opt$0=opt$1,param$0=_iV_;
            continue}
          return caml_call2(pp_v,ppf,_iW_)}
        return 0}}
    function pp_print_text(ppf,s)
     {var len=caml_ml_string_length(s),left=[0,0],right=[0,0];
      function flush(param)
       {pp_print_string(ppf,sub$0(s,left[1],right[1] - left[1] | 0));
        right[1]++;
        left[1] = right[1];
        return 0}
      for(;;)
       {if(right[1] !== len)
         {var match=caml_string_get(s,right[1]);
          if(10 === match)
           {flush(0);pp_force_newline(ppf,0)}
          else
           if(32 === match){flush(0);pp_print_space(ppf,0)}else right[1]++;
          continue}
        var _iU_=left[1] !== len?1:0;
        return _iU_?flush(0):_iU_}}
    function pp_print_option(opt,pp_v,ppf,param)
     {if(opt)
       var sth=opt[1],none=sth;
      else
       var none=function(param,_iT_){return 0};
      if(param){var v=param[1];return caml_call2(pp_v,ppf,v)}
      return caml_call2(none,ppf,0)}
    function pp_print_result(ok,error,ppf,param)
     {if(0 === param[0]){var v=param[1];return caml_call2(ok,ppf,v)}
      var e=param[1];
      return caml_call2(error,ppf,e)}
    function compute_tag(output,tag_acc)
     {var buf=create$2(16),ppf=formatter_of_buffer(buf);
      caml_call2(output,ppf,tag_acc);
      pp_print_flush(ppf,0);
      var len=buf[2];
      return 2 <= len?sub$3(buf,1,len - 2 | 0):contents(buf)}
    function output_formatting_lit(ppf,fmting_lit)
     {if(typeof fmting_lit === "number")
       switch(fmting_lit)
        {case 0:return pp_close_box(ppf,0);
         case 1:return pp_close_tag(ppf,0);
         case 2:return pp_print_flush(ppf,0);
         case 3:return pp_force_newline(ppf,0);
         case 4:return pp_print_newline(ppf,0);
         case 5:return pp_print_char(ppf,64);
         default:return pp_print_char(ppf,37)}
      else
       switch(fmting_lit[0])
        {case 0:
          var offset=fmting_lit[3],width=fmting_lit[2];
          return pp_print_break(ppf,width,offset);
         case 1:return 0;
         default:
          var c=fmting_lit[1];
          pp_print_char(ppf,64);
          return pp_print_char(ppf,c)}}
    function output_acc$0(ppf,acc)
     {if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          output_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _iJ_=acc[2],_iK_=acc[1];
          if(0 === _iJ_[0])
           {var acc$0=_iJ_[1];
            output_acc$0(ppf,_iK_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(output_acc$0,acc$0)])}
          var acc$1=_iJ_[1];
          output_acc$0(ppf,_iK_);
          var
           match=open_box_of_string(compute_tag(output_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _iL_=acc[1];
          if(typeof _iL_ === "number")
           var switch$1=1;
          else
           if(0 === _iL_[0])
            {var _iM_=_iL_[2];
             if(typeof _iM_ === "number")
              var switch$2=1;
             else
              if(1 === _iM_[0])
               var
                p$1=_iL_[1],
                size=_iM_[2],
                s$0=acc[2],
                switch$0=0,
                switch$1=0,
                switch$2=0;
              else
               var switch$2=1;
             if(switch$2)var switch$1=1}
           else
            var switch$1=1;
          if(switch$1)var p$0=_iL_,s=acc[2],switch$0=2;
          break;
         case 3:
          var _iN_=acc[1];
          if(typeof _iN_ === "number")
           var switch$3=1;
          else
           if(0 === _iN_[0])
            {var _iO_=_iN_[2];
             if(typeof _iO_ === "number")
              var switch$4=1;
             else
              if(1 === _iO_[0])
               var
                p$3=_iN_[1],
                size$0=_iO_[2],
                c$0=acc[2],
                switch$0=1,
                switch$3=0,
                switch$4=0;
              else
               var switch$4=1;
             if(switch$4)var switch$3=1}
           else
            var switch$3=1;
          if(switch$3)var p$2=_iN_,c=acc[2],switch$0=3;
          break;
         case 4:
          var _iP_=acc[1];
          if(typeof _iP_ === "number")
           var switch$5=1;
          else
           if(0 === _iP_[0])
            {var _iQ_=_iP_[2];
             if(typeof _iQ_ === "number")
              var switch$6=1;
             else
              if(1 === _iQ_[0])
               var
                p$1=_iP_[1],
                size=_iQ_[2],
                s$0=acc[2],
                switch$0=0,
                switch$5=0,
                switch$6=0;
              else
               var switch$6=1;
             if(switch$6)var switch$5=1}
           else
            var switch$5=1;
          if(switch$5)var p$0=_iP_,s=acc[2],switch$0=2;
          break;
         case 5:
          var _iR_=acc[1];
          if(typeof _iR_ === "number")
           var switch$7=1;
          else
           if(0 === _iR_[0])
            {var _iS_=_iR_[2];
             if(typeof _iS_ === "number")
              var switch$8=1;
             else
              if(1 === _iS_[0])
               var
                p$3=_iR_[1],
                size$0=_iS_[2],
                c$0=acc[2],
                switch$0=1,
                switch$7=0,
                switch$8=0;
              else
               var switch$8=1;
             if(switch$8)var switch$7=1}
           else
            var switch$7=1;
          if(switch$7)var p$2=_iR_,c=acc[2],switch$0=3;
          break;
         case 6:
          var f$0=acc[2],p$4=acc[1];
          output_acc$0(ppf,p$4);
          return caml_call1(f$0,ppf);
         case 7:
          var p$5=acc[1];output_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          output_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:output_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         output_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$0(1,c$0));
        case 2:output_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:output_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function strput_acc$0(ppf,acc)
     {if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          strput_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _ix_=acc[2],_iy_=acc[1];
          if(0 === _ix_[0])
           {var acc$0=_ix_[1];
            strput_acc$0(ppf,_iy_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(strput_acc$0,acc$0)])}
          var acc$1=_ix_[1];
          strput_acc$0(ppf,_iy_);
          var
           match=open_box_of_string(compute_tag(strput_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _iz_=acc[1];
          if(typeof _iz_ === "number")
           var switch$1=1;
          else
           if(0 === _iz_[0])
            {var _iA_=_iz_[2];
             if(typeof _iA_ === "number")
              var switch$2=1;
             else
              if(1 === _iA_[0])
               var
                p$1=_iz_[1],
                size=_iA_[2],
                s$0=acc[2],
                switch$0=0,
                switch$1=0,
                switch$2=0;
              else
               var switch$2=1;
             if(switch$2)var switch$1=1}
           else
            var switch$1=1;
          if(switch$1)var p$0=_iz_,s=acc[2],switch$0=2;
          break;
         case 3:
          var _iB_=acc[1];
          if(typeof _iB_ === "number")
           var switch$3=1;
          else
           if(0 === _iB_[0])
            {var _iC_=_iB_[2];
             if(typeof _iC_ === "number")
              var switch$4=1;
             else
              if(1 === _iC_[0])
               var
                p$3=_iB_[1],
                size$0=_iC_[2],
                c$0=acc[2],
                switch$0=1,
                switch$3=0,
                switch$4=0;
              else
               var switch$4=1;
             if(switch$4)var switch$3=1}
           else
            var switch$3=1;
          if(switch$3)var p$2=_iB_,c=acc[2],switch$0=3;
          break;
         case 4:
          var _iD_=acc[1];
          if(typeof _iD_ === "number")
           var switch$5=1;
          else
           if(0 === _iD_[0])
            {var _iE_=_iD_[2];
             if(typeof _iE_ === "number")
              var switch$6=1;
             else
              if(1 === _iE_[0])
               var
                p$1=_iD_[1],
                size=_iE_[2],
                s$0=acc[2],
                switch$0=0,
                switch$5=0,
                switch$6=0;
              else
               var switch$6=1;
             if(switch$6)var switch$5=1}
           else
            var switch$5=1;
          if(switch$5)var p$0=_iD_,s=acc[2],switch$0=2;
          break;
         case 5:
          var _iF_=acc[1];
          if(typeof _iF_ === "number")
           var switch$7=1;
          else
           if(0 === _iF_[0])
            {var _iG_=_iF_[2];
             if(typeof _iG_ === "number")
              var switch$8=1;
             else
              if(1 === _iG_[0])
               var
                p$3=_iF_[1],
                size$0=_iG_[2],
                c$0=acc[2],
                switch$0=1,
                switch$7=0,
                switch$8=0;
              else
               var switch$8=1;
             if(switch$8)var switch$7=1}
           else
            var switch$7=1;
          if(switch$7)var p$2=_iF_,c=acc[2],switch$0=3;
          break;
         case 6:
          var _iH_=acc[1];
          if(typeof _iH_ !== "number" && 0 === _iH_[0])
           {var _iI_=_iH_[2];
            if(typeof _iI_ !== "number" && 1 === _iI_[0])
             {var f$1=acc[2],size$1=_iI_[2],p$4=_iH_[1];
              strput_acc$0(ppf,p$4);
              return pp_print_as_size(ppf,size$1,caml_call1(f$1,0))}}
          var f$0=acc[2];
          strput_acc$0(ppf,_iH_);
          return pp_print_string(ppf,caml_call1(f$0,0));
         case 7:
          var p$5=acc[1];strput_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          strput_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:strput_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         strput_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$0(1,c$0));
        case 2:strput_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:strput_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function kfprintf$0(k,ppf,param)
     {var fmt=param[1],_iw_=0;
      return make_printf
              (function(acc){output_acc$0(ppf,acc);return caml_call1(k,ppf)},
               _iw_,
               fmt)}
    function ikfprintf$0(k,ppf,param)
     {var fmt=param[1];return make_iprintf(k,ppf,fmt)}
    function ifprintf$0(ppf,param)
     {var fmt=param[1],_iu_=0;
      return make_iprintf(function(_iv_){return 0},_iu_,fmt)}
    function fprintf$0(ppf)
     {function _ir_(_it_){return 0}
      return function(_is_){return kfprintf$0(_ir_,ppf,_is_)}}
    function printf$0(fmt){return caml_call1(fprintf$0(std_formatter),fmt)}
    function eprintf$0(fmt){return caml_call1(fprintf$0(err_formatter),fmt)}
    function kdprintf(k,param)
     {var fmt=param[1],_iq_=0;
      return make_printf
              (function(acc)
                {return caml_call1
                         (k,function(ppf){return output_acc$0(ppf,acc)})},
               _iq_,
               fmt)}
    function dprintf(fmt){return kdprintf(function(i){return i},fmt)}
    function kprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {strput_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function sprintf$0(fmt){return kprintf(id$0,fmt)}
    function kasprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {output_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function asprintf(fmt){return kasprintf(id$0,fmt)}
    function flush_standard_formatters(param)
     {pp_print_flush(std_formatter,0);return pp_print_flush(err_formatter,0)}
    at_exit(flush_standard_formatters);
    function pp_set_all_formatter_output_functions(state,f,g,h,i)
     {pp_set_formatter_output_functions(state,f,g);
      state[19] = h;
      state[20] = i;
      return 0}
    function pp_get_all_formatter_output_functions(state,param)
     {return [0,state[17],state[18],state[19],state[20]]}
    function set_all_formatter_output_functions(_im_,_in_,_io_,_ip_)
     {return pp_set_all_formatter_output_functions
              (std_formatter,_im_,_in_,_io_,_ip_)}
    function get_all_formatter_output_functions(_il_)
     {return pp_get_all_formatter_output_functions(std_formatter,_il_)}
    function bprintf$0(b,param)
     {var fmt=param[1],ppf=formatter_of_buffer(b);
      function k(acc){output_acc$0(ppf,acc);return pp_flush_queue(ppf,0)}
      return make_printf(k,0,fmt)}
    function pp_set_formatter_tag_functions(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      function stringify(f,e,param)
       {if(param[1] === String_tag){var s=param[2];return caml_call1(f,s)}
        return e}
      state[24] = function(_ik_){return stringify(mot,cst$84,_ik_)};
      state[25] = function(_ij_){return stringify(mct,cst$85,_ij_)};
      var _if_=0;
      state[26] = function(_ii_){return stringify(pot,_if_,_ii_)};
      var _ig_=0;
      state[27] = function(_ih_){return stringify(pct,_ig_,_ih_)};
      return 0}
    function pp_get_formatter_tag_functions(fmt,param)
     {var funs=pp_get_formatter_stag_functions(fmt,0);
      function mark_open_tag(s){return caml_call1(funs[1],[0,String_tag,s])}
      function mark_close_tag(s){return caml_call1(funs[2],[0,String_tag,s])}
      function print_open_tag(s){return caml_call1(funs[3],[0,String_tag,s])}
      function print_close_tag(s){return caml_call1(funs[4],[0,String_tag,s])}
      return [0,mark_open_tag,mark_close_tag,print_open_tag,print_close_tag]}
    function set_formatter_tag_functions(_ie_)
     {return pp_set_formatter_tag_functions(std_formatter,_ie_)}
    function get_formatter_tag_functions(_id_)
     {return pp_get_formatter_tag_functions(std_formatter,_id_)}
    var
     Stdlib_format=
      [0,
       pp_open_box,
       open_box,
       pp_close_box,
       close_box,
       pp_open_hbox,
       open_hbox,
       pp_open_vbox,
       open_vbox,
       pp_open_hvbox,
       open_hvbox,
       pp_open_hovbox,
       open_hovbox,
       pp_print_string,
       print_string$0,
       pp_print_as,
       print_as,
       pp_print_int,
       print_int$0,
       pp_print_float,
       print_float$0,
       pp_print_char,
       print_char$0,
       pp_print_bool,
       print_bool,
       pp_print_space,
       print_space,
       pp_print_cut,
       print_cut,
       pp_print_break,
       print_break,
       pp_print_custom_break,
       pp_force_newline,
       force_newline,
       pp_print_if_newline,
       print_if_newline,
       pp_print_flush,
       print_flush,
       pp_print_newline,
       print_newline$0,
       pp_set_margin,
       set_margin,
       pp_get_margin,
       get_margin,
       pp_set_max_indent,
       set_max_indent,
       pp_get_max_indent,
       get_max_indent,
       check_geometry,
       pp_set_geometry,
       set_geometry,
       pp_safe_set_geometry,
       safe_set_geometry,
       pp_get_geometry,
       get_geometry,
       pp_set_max_boxes,
       set_max_boxes,
       pp_get_max_boxes,
       get_max_boxes,
       pp_over_max_boxes,
       over_max_boxes,
       pp_open_tbox,
       open_tbox,
       pp_close_tbox,
       close_tbox,
       pp_set_tab,
       set_tab,
       pp_print_tab,
       print_tab,
       pp_print_tbreak,
       print_tbreak,
       pp_set_ellipsis_text,
       set_ellipsis_text,
       pp_get_ellipsis_text,
       get_ellipsis_text,
       String_tag,
       pp_open_stag,
       open_stag,
       pp_close_stag,
       close_stag,
       pp_set_tags,
       set_tags,
       pp_set_print_tags,
       set_print_tags,
       pp_set_mark_tags,
       set_mark_tags,
       pp_get_print_tags,
       get_print_tags,
       pp_get_mark_tags,
       get_mark_tags,
       pp_set_formatter_out_channel,
       set_formatter_out_channel,
       pp_set_formatter_output_functions,
       set_formatter_output_functions,
       pp_get_formatter_output_functions,
       get_formatter_output_functions,
       pp_set_formatter_out_functions,
       set_formatter_out_functions,
       pp_get_formatter_out_functions,
       get_formatter_out_functions,
       pp_set_formatter_stag_functions,
       set_formatter_stag_functions,
       pp_get_formatter_stag_functions,
       get_formatter_stag_functions,
       formatter_of_out_channel,
       std_formatter,
       err_formatter,
       formatter_of_buffer,
       stdbuf,
       str_formatter,
       flush_str_formatter,
       make_formatter,
       formatter_of_out_functions,
       make_symbolic_output_buffer,
       clear_symbolic_output_buffer,
       get_symbolic_output_buffer,
       flush_symbolic_output_buffer,
       add_symbolic_output_item,
       formatter_of_symbolic_output_buffer,
       pp_print_list,
       pp_print_text,
       pp_print_option,
       pp_print_result,
       fprintf$0,
       printf$0,
       eprintf$0,
       sprintf$0,
       asprintf,
       dprintf,
       ifprintf$0,
       kfprintf$0,
       kdprintf,
       ikfprintf$0,
       kprintf,
       kasprintf,
       bprintf$0,
       kprintf,
       set_all_formatter_output_functions,
       get_all_formatter_output_functions,
       pp_set_all_formatter_output_functions,
       pp_get_all_formatter_output_functions,
       pp_open_tag,
       open_tag,
       pp_close_tag,
       close_tag,
       pp_set_formatter_tag_functions,
       set_formatter_tag_functions,
       pp_get_formatter_tag_functions,
       get_formatter_tag_functions];
    caml_register_global(760,Stdlib_format,"Stdlib__format");
    var null_char=0;
    function next_char(ib)
     {try
       {var c=caml_call1(ib[7],0);
        ib[2] = c;
        ib[3] = 1;
        ib[4] = ib[4] + 1 | 0;
        if(10 === c)ib[5] = ib[5] + 1 | 0;
        return c}
      catch(_ic_)
       {_ic_ = caml_wrap_exception(_ic_);
        if(_ic_ === End_of_file)
         {ib[2] = null_char;ib[3] = 0;ib[1] = 1;return null_char}
        throw _ic_}}
    function peek_char(ib){return ib[3]?ib[2]:next_char(ib)}
    function checked_peek_char(ib)
     {var c=peek_char(ib);if(ib[1])throw End_of_file;return c}
    function end_of_input(ib){peek_char(ib);return ib[1]}
    function beginning_of_input(ib){return 0 === ib[4]?1:0}
    function name_of_input(ib)
     {var _ib_=ib[9];
      if(typeof _ib_ === "number")
       return 0 === _ib_?cst_unnamed_function:cst_unnamed_character_string;
      else
       {if(0 === _ib_[0])return cst_unnamed_Stdlib_input_channel;
        var fname=_ib_[1];
        return fname}}
    function char_count(ib){return ib[3]?ib[4] - 1 | 0:ib[4]}
    function reset_token(ib){return reset(ib[8])}
    function invalidate_current_char(ib){ib[3] = 0;return 0}
    function token_string(ib)
     {var token_buffer=ib[8],tok=contents(token_buffer);
      clear$1(token_buffer);
      ib[6] = ib[6] + 1 | 0;
      return tok}
    function skip_char(width,ib){invalidate_current_char(ib);return width}
    function ignore_char(width,ib){return skip_char(width - 1 | 0,ib)}
    function store_char(width,ib,c)
     {add_char(ib[8],c);return ignore_char(width,ib)}
    var default_token_buffer_size=1024;
    function create$4(iname,next)
     {return [0,
              0,
              null_char,
              0,
              0,
              0,
              0,
              next,
              create$2(default_token_buffer_size),
              iname]}
    function from_string$1(s)
     {var i=[0,0],len=caml_ml_string_length(s);
      function next(param)
       {if(len <= i[1])throw End_of_file;
        var c=caml_string_get(s,i[1]);
        i[1]++;
        return c}
      return create$4(1,next)}
    var _b8_=0;
    function from_function$0(_ia_){return create$4(_b8_,_ia_)}
    var len=1024;
    function scan_close_at_end(ic)
     {caml_ml_close_channel(ic);throw End_of_file}
    function scan_raise_at_end(ic){throw End_of_file}
    function from_ic(scan_close_ic,iname,ic)
     {var buf=caml_create_bytes(1024),i=[0,0],lim=[0,0],eof=[0,0];
      function next(param)
       {if(i[1] < lim[1]){var c=caml_bytes_get(buf,i[1]);i[1]++;return c}
        if(eof[1])throw End_of_file;
        lim[1] = input(ic,buf,0,len);
        return 0 === lim[1]
                ?(eof[1] = 1,caml_call1(scan_close_ic,ic))
                :(i[1] = 1,caml_bytes_get(buf,0))}
      return create$4(iname,next)}
    var stdib=from_ic(scan_raise_at_end,[1,cst$86,stdin],stdin);
    function open_in_file(open_in,fname)
     {if(caml_string_notequal(fname,cst$87))
       {var ic=caml_call1(open_in,fname);
        return from_ic(scan_close_at_end,[1,fname,ic],ic)}
      return stdib}
    function from_file(_h$_){return open_in_file(open_in,_h$_)}
    function from_file_bin(_h__){return open_in_file(open_in_bin,_h__)}
    function from_channel$0(ic){return from_ic(scan_raise_at_end,[0,ic],ic)}
    function close_in$0(ib)
     {var _h9_=ib[9];
      if(typeof _h9_ === "number")
       return 0;
      else
       {if(0 === _h9_[0]){var ic=_h9_[1];return caml_ml_close_channel(ic)}
        var ic$0=_h9_[2];
        return caml_ml_close_channel(ic$0)}}
    var memo=[0,0];
    function memo_from_ic(scan_close_ic,ic)
     {try
       {var _h7_=assq(ic,memo[1]);return _h7_}
      catch(_h8_)
       {_h8_ = caml_wrap_exception(_h8_);
        if(_h8_ === Not_found)
         {var ib=from_ic(scan_close_ic,[0,ic],ic);
          memo[1] = [0,[0,ic,ib],memo[1]];
          return ib}
        throw _h8_}}
    function memo_from_channel(_h6_)
     {return memo_from_ic(scan_raise_at_end,_h6_)}
    var Scan_failure=[248,cst_Stdlib_Scanf_Scan_failure,caml_fresh_oo_id(0)];
    function bad_input(s){throw [0,Scan_failure,s]}
    function bad_input_escape(c)
     {return bad_input(caml_call1(sprintf(_b9_),c))}
    function bad_token_length(message)
     {return bad_input(caml_call1(sprintf(_b__),message))}
    function bad_float(param)
     {return bad_input(cst_no_dot_or_exponent_part_found_in_float_token)}
    function bad_hex_float(param)
     {return bad_input(cst_not_a_valid_float_in_hexadecimal_notation)}
    function character_mismatch(c,ci)
     {return bad_input(caml_call2(sprintf(_ca_),c,ci))}
    function check_this_char(ib,c)
     {var ci=checked_peek_char(ib);
      return ci === c?invalidate_current_char(ib):character_mismatch(c,ci)}
    function check_char(ib,c$0)
     {if(10 === c$0)
       {var ci=checked_peek_char(ib);
        return 10 === ci
                ?invalidate_current_char(ib)
                :13 === ci
                  ?(invalidate_current_char(ib),check_this_char(ib,10))
                  :character_mismatch(10,ci)}
      if(32 === c$0)
       for(;;)
        {var c=peek_char(ib),_h4_=1 - ib[1];
         if(_h4_)
          {var
            _h5_=c - 9 | 0,
            switch$0=
             4 < _h5_ >>> 0?23 === _h5_?1:0:1 < (_h5_ - 2 | 0) >>> 0?1:0;
           if(switch$0){invalidate_current_char(ib);continue}
           return 0}
         return _h4_}
      return check_this_char(ib,c$0)}
    function token_char(ib){return caml_string_get(token_string(ib),0)}
    function token_bool(ib)
     {var s=token_string(ib);
      return caml_string_notequal(s,cst_false$3)
              ?caml_string_notequal(s,cst_true$3)
                ?bad_input(caml_call1(sprintf(_cb_),s))
                :1
              :0}
    function integer_conversion_of_char(param)
     {var switcher=param - 88 | 0;
      if(! (32 < switcher >>> 0))
       switch(switcher)
        {case 10:return 0;
         case 12:return 1;
         case 17:return 2;
         case 23:return 3;
         case 29:return 4;
         case 0:
         case 32:return 5
         }
      throw [0,Assert_failure,_cc_]}
    function token_int_literal(conv,ib)
     {switch(conv)
       {case 0:var tok=symbol(cst_0b,token_string(ib));break;
        case 3:var tok=symbol(cst_0o,token_string(ib));break;
        case 4:var tok=symbol(cst_0u,token_string(ib));break;
        case 5:var tok=symbol(cst_0x,token_string(ib));break;
        default:var tok=token_string(ib)}
      var l=caml_ml_string_length(tok);
      if(0 !== l)
       if(43 === caml_string_get(tok,0))return sub$0(tok,1,l - 1 | 0);
      return tok}
    function token_float(ib){return caml_float_of_string(token_string(ib))}
    function scan_decimal_digit_star(width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(58 <= c)
         {if(95 === c)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}}
        else
         if(48 <= c)
          {var width$2=store_char(width$0,ib,c),width$0=width$2;continue}
        return width$0}}
    function scan_unsigned_decimal_int(width,ib)
     {if(0 === width)return bad_token_length(cst_decimal_digits);
      var c=checked_peek_char(ib),switcher=c - 48 | 0;
      if(9 < switcher >>> 0)return bad_input(caml_call1(sprintf(_cd_),c));
      var width$0=store_char(width,ib,c);
      return scan_decimal_digit_star(width$0,ib)}
    function scan_digit_plus(basis,digitp,width$2,ib)
     {if(0 === width$2)return bad_token_length(cst_digits);
      var c$0=checked_peek_char(ib);
      if(caml_call1(digitp,c$0))
       {var width$3=store_char(width$2,ib,c$0),width=width$3;
        for(;;)
         {if(0 === width)return width;
          var c=peek_char(ib);
          if(ib[1])return width;
          if(caml_call1(digitp,c))
           {var width$0=store_char(width,ib,c),width=width$0;continue}
          if(95 === c)
           {var width$1=ignore_char(width,ib),width=width$1;continue}
          return width}}
      return bad_input(caml_call2(sprintf(_ce_),c$0,basis))}
    function is_binary_digit(param)
     {var switcher=param - 48 | 0;return 1 < switcher >>> 0?0:1}
    function scan_binary_int(_h2_,_h3_)
     {return scan_digit_plus(cst_binary,is_binary_digit,_h2_,_h3_)}
    function is_octal_digit(param)
     {var switcher=param - 48 | 0;return 7 < switcher >>> 0?0:1}
    function scan_octal_int(_h0_,_h1_)
     {return scan_digit_plus(cst_octal,is_octal_digit,_h0_,_h1_)}
    function is_hexa_digit(param)
     {var
       _hZ_=param - 48 | 0,
       switch$0=
        22 < _hZ_ >>> 0
         ?5 < (_hZ_ - 49 | 0) >>> 0?0:1
         :6 < (_hZ_ - 10 | 0) >>> 0?1:0;
      return switch$0?1:0}
    function scan_hexadecimal_int(_hX_,_hY_)
     {return scan_digit_plus(cst_hexadecimal,is_hexa_digit,_hX_,_hY_)}
    function scan_sign(width,ib)
     {var c=checked_peek_char(ib),switcher=c - 43 | 0;
      if(! (2 < switcher >>> 0))
       switch(switcher)
        {case 0:return store_char(width,ib,c);
         case 1:break;
         default:return store_char(width,ib,c)}
      return width}
    function scan_optionally_signed_decimal_int(width,ib)
     {var width$0=scan_sign(width,ib);
      return scan_unsigned_decimal_int(width$0,ib)}
    function scan_int_conversion(conv,width$1,ib)
     {switch(conv)
       {case 0:return scan_binary_int(width$1,ib);
        case 1:return scan_optionally_signed_decimal_int(width$1,ib);
        case 2:
         var width$0=scan_sign(width$1,ib),c=checked_peek_char(ib);
         if(48 === c)
          {var width=store_char(width$0,ib,c);
           if(0 === width)return width;
           var c$0=peek_char(ib);
           if(ib[1])return width;
           if(99 <= c$0)
            {if(111 === c$0)
              return scan_octal_int(store_char(width,ib,c$0),ib);
             var switch$0=120 === c$0?1:0}
           else
            if(88 === c$0)
             var switch$0=1;
            else
             {if(98 <= c$0)
               return scan_binary_int(store_char(width,ib,c$0),ib);
              var switch$0=0}
           return switch$0
                   ?scan_hexadecimal_int(store_char(width,ib,c$0),ib)
                   :scan_decimal_digit_star(width,ib)}
         return scan_unsigned_decimal_int(width$0,ib);
        case 3:return scan_octal_int(width$1,ib);
        case 4:return scan_unsigned_decimal_int(width$1,ib);
        default:return scan_hexadecimal_int(width$1,ib)}}
    function scan_fractional_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      if(ib[1])return width;
      var switcher=c - 48 | 0;
      return 9 < switcher >>> 0
              ?width
              :scan_decimal_digit_star(store_char(width,ib,c),ib)}
    function scan_exponent_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      if(ib[1])return width;
      if(69 !== c)if(101 !== c)return width;
      return scan_optionally_signed_decimal_int(store_char(width,ib,c),ib)}
    function scan_float(width$1,precision,ib)
     {var
       width=scan_sign(width$1,ib),
       width$0=scan_decimal_digit_star(width,ib);
      if(0 === width$0)return [0,width$0,precision];
      var c=peek_char(ib);
      if(ib[1])return [0,width$0,precision];
      if(46 === c)
       {var
         width$2=store_char(width$0,ib,c),
         precision$0=min(width$2,precision),
         width$3=
          width$2
          -
          (precision$0 - scan_fractional_part(precision$0,ib) | 0)
          |
          0;
        return [0,scan_exponent_part(width$3,ib),precision$0]}
      return [0,scan_exponent_part(width$0,ib),precision]}
    function check_case_insensitive_string(width,ib,error,str)
     {function lowercase(c)
       {var switcher=c - 65 | 0;
        return 25 < switcher >>> 0?c:char_of_int((c - 65 | 0) + 97 | 0)}
      var
       len=caml_ml_string_length(str),
       width$0=[0,width],
       _hU_=len - 1 | 0,
       _hT_=0;
      if(! (_hU_ < 0))
       {var i=_hT_;
        for(;;)
         {var c=peek_char(ib),_hV_=lowercase(caml_string_get(str,i));
          if(lowercase(c) !== _hV_)caml_call1(error,0);
          if(0 === width$0[1])caml_call1(error,0);
          width$0[1] = store_char(width$0[1],ib,c);
          var _hW_=i + 1 | 0;
          if(_hU_ !== i){var i=_hW_;continue}
          break}}
      return width$0[1]}
    function scan_hex_float(width,precision,ib)
     {var _hG_=0 === width?1:0,_hH_=_hG_ || end_of_input(ib);
      if(_hH_)bad_hex_float(0);
      var
       width$0=scan_sign(width,ib),
       _hI_=0 === width$0?1:0,
       _hJ_=_hI_ || end_of_input(ib);
      if(_hJ_)bad_hex_float(0);
      var c=peek_char(ib);
      if(78 <= c)
       {var switcher=c - 79 | 0;
        if(30 < switcher >>> 0)
         {if(! (32 <= switcher))
           {var
             width$1=store_char(width$0,ib,c),
             _hK_=0 === width$1?1:0,
             _hL_=_hK_ || end_of_input(ib);
            if(_hL_)bad_hex_float(0);
            return check_case_insensitive_string
                    (width$1,ib,bad_hex_float,cst_an)}
          var switch$0=0}
        else
         var switch$0=26 === switcher?1:0}
      else
       {if(48 === c)
         {var
           width$3=store_char(width$0,ib,c),
           _hO_=0 === width$3?1:0,
           _hP_=_hO_ || end_of_input(ib);
          if(_hP_)bad_hex_float(0);
          var
           width$4=
            check_case_insensitive_string(width$3,ib,bad_hex_float,cst_x$2);
          if(0 !== width$4)
           if(! end_of_input(ib))
            {var
              match=peek_char(ib),
              _hQ_=match - 46 | 0,
              switch$1=
               34 < _hQ_ >>> 0?66 === _hQ_?1:0:32 < (_hQ_ - 1 | 0) >>> 0?1:0,
              width$5=switch$1?width$4:scan_hexadecimal_int(width$4,ib);
             if(0 !== width$5)
              if(! end_of_input(ib))
               {var c$0=peek_char(ib);
                if(46 === c$0)
                 {var width$6=store_char(width$5,ib,c$0);
                  if(0 === width$6)
                   var switch$2=0;
                  else
                   if(end_of_input(ib))
                    var switch$2=0;
                   else
                    {var match$0=peek_char(ib);
                     if(80 === match$0)
                      var switch$3=0;
                     else
                      if(112 === match$0)
                       var switch$3=0;
                      else
                       var
                        precision$0=min(width$6,precision),
                        width$10=
                         width$6
                         -
                         (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                         |
                         0,
                        switch$3=1;
                     if(! switch$3)var width$10=width$6;
                     var width$7=width$10,switch$2=1}
                  if(! switch$2)var width$7=width$6;
                  var width$8=width$7}
                else
                 var width$8=width$5;
                if(0 !== width$8)
                 if(! end_of_input(ib))
                  {var c$1=peek_char(ib);
                   if(80 !== c$1)if(112 !== c$1)return width$8;
                   var
                    width$9=store_char(width$8,ib,c$1),
                    _hR_=0 === width$9?1:0,
                    _hS_=_hR_ || end_of_input(ib);
                   if(_hS_)bad_hex_float(0);
                   return scan_optionally_signed_decimal_int(width$9,ib)}
                return width$8}
             return width$5}
          return width$4}
        var switch$0=73 === c?1:0}
      if(switch$0)
       {var
         width$2=store_char(width$0,ib,c),
         _hM_=0 === width$2?1:0,
         _hN_=_hM_ || end_of_input(ib);
        if(_hN_)bad_hex_float(0);
        return check_case_insensitive_string
                (width$2,ib,bad_hex_float,cst_nfinity)}
      return bad_hex_float(0)}
    function scan_caml_float_rest(width,precision,ib)
     {var _hC_=0 === width?1:0,_hD_=_hC_ || end_of_input(ib);
      if(_hD_)bad_float(0);
      var
       width$0=scan_decimal_digit_star(width,ib),
       _hE_=0 === width$0?1:0,
       _hF_=_hE_ || end_of_input(ib);
      if(_hF_)bad_float(0);
      var c=peek_char(ib),switcher=c - 69 | 0;
      if(32 < switcher >>> 0)
       {if(-23 === switcher)
         {var
           width$1=store_char(width$0,ib,c),
           precision$0=min(width$1,precision),
           width_precision=scan_fractional_part(precision$0,ib),
           frac_width=precision$0 - width_precision | 0,
           width$2=width$1 - frac_width | 0;
          return scan_exponent_part(width$2,ib)}}
      else
       {var switcher$0=switcher - 1 | 0;
        if(30 < switcher$0 >>> 0)return scan_exponent_part(width$0,ib)}
      return bad_float(0)}
    function scan_caml_float(width,precision,ib)
     {var _ho_=0 === width?1:0,_hp_=_ho_ || end_of_input(ib);
      if(_hp_)bad_float(0);
      var
       width$0=scan_sign(width,ib),
       _hq_=0 === width$0?1:0,
       _hr_=_hq_ || end_of_input(ib);
      if(_hr_)bad_float(0);
      var c=peek_char(ib);
      if(49 <= c)
       {if(! (58 <= c))
         {var
           width$1=store_char(width$0,ib,c),
           _hs_=0 === width$1?1:0,
           _ht_=_hs_ || end_of_input(ib);
          if(_ht_)bad_float(0);
          return scan_caml_float_rest(width$1,precision,ib)}}
      else
       if(48 <= c)
        {var
          width$2=store_char(width$0,ib,c),
          _hu_=0 === width$2?1:0,
          _hv_=_hu_ || end_of_input(ib);
         if(_hv_)bad_float(0);
         var c$0=peek_char(ib);
         if(88 !== c$0)
          if(120 !== c$0)return scan_caml_float_rest(width$2,precision,ib);
         var
          width$3=store_char(width$2,ib,c$0),
          _hw_=0 === width$3?1:0,
          _hx_=_hw_ || end_of_input(ib);
         if(_hx_)bad_float(0);
         var
          width$4=scan_hexadecimal_int(width$3,ib),
          _hy_=0 === width$4?1:0,
          _hz_=_hy_ || end_of_input(ib);
         if(_hz_)bad_float(0);
         var c$1=peek_char(ib),switcher=c$1 - 80 | 0;
         if(32 < switcher >>> 0)
          if(-34 === switcher)
           {var width$5=store_char(width$4,ib,c$1);
            if(0 === width$5)
             var switch$1=0;
            else
             if(end_of_input(ib))
              var switch$1=0;
             else
              {var match=peek_char(ib);
               if(80 === match)
                var switch$2=0;
               else
                if(112 === match)
                 var switch$2=0;
                else
                 var
                  precision$0=min(width$5,precision),
                  width$10=
                   width$5
                   -
                   (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                   |
                   0,
                  switch$2=1;
               if(! switch$2)var width$10=width$5;
               var width$6=width$10,switch$1=1}
            if(! switch$1)var width$6=width$5;
            var width$7=width$6,switch$0=0}
          else
           var switch$0=1;
         else
          {var switcher$0=switcher - 1 | 0;
           if(30 < switcher$0 >>> 0)
            var width$7=width$4,switch$0=0;
           else
            var switch$0=1}
         var width$8=switch$0?bad_float(0):width$7;
         if(0 !== width$8)
          if(! end_of_input(ib))
           {var c$2=peek_char(ib);
            if(80 !== c$2)if(112 !== c$2)return width$8;
            var
             width$9=store_char(width$8,ib,c$2),
             _hA_=0 === width$9?1:0,
             _hB_=_hA_ || end_of_input(ib);
            if(_hB_)bad_hex_float(0);
            return scan_optionally_signed_decimal_int(width$9,ib)}
         return width$8}
      return bad_float(0)}
    function scan_string(stp,width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(stp)
         {var c$0=stp[1];
          if(c === c$0)return skip_char(width$0,ib);
          var width$1=store_char(width$0,ib,c),width$0=width$1;
          continue}
        var
         _hn_=c - 9 | 0,
         switch$0=4 < _hn_ >>> 0?23 === _hn_?1:0:1 < (_hn_ - 2 | 0) >>> 0?1:0;
        if(switch$0)return width$0;
        var width$2=store_char(width$0,ib,c),width$0=width$2;
        continue}}
    function scan_char(width,ib)
     {return store_char(width,ib,checked_peek_char(ib))}
    function hexadecimal_value_of_char(d)
     {return 97 <= d?d - 87 | 0:65 <= d?d - 55 | 0:d - 48 | 0}
    function check_next_char(message,width,ib)
     {if(0 === width)return bad_token_length(message);
      var c=peek_char(ib);
      return ib[1]?bad_input(caml_call1(sprintf(_b$_),message)):c}
    function check_next_char_for_char(_hl_,_hm_)
     {return check_next_char(cst_a_Char,_hl_,_hm_)}
    function check_next_char_for_string(_hj_,_hk_)
     {return check_next_char(cst_a_String,_hj_,_hk_)}
    function scan_backslash_char(width,ib)
     {var c0=check_next_char_for_char(width,ib);
      if(40 <= c0)
       if(58 <= c0)
        {var switcher$0=c0 - 92 | 0;
         if(28 < switcher$0 >>> 0)
          var switch$0=0;
         else
          switch(switcher$0)
           {case 28:
             var
              get_digit=
               function(param)
                {var
                  c=next_char(ib),
                  _hi_=c - 48 | 0,
                  switch$0=
                   22 < _hi_ >>> 0
                    ?5 < (_hi_ - 49 | 0) >>> 0?0:1
                    :6 < (_hi_ - 10 | 0) >>> 0?1:0;
                 return switch$0?c:bad_input_escape(c)},
              c1=get_digit(0),
              c2=get_digit(0),
              _he_=hexadecimal_value_of_char(c2),
              c$0=(16 * hexadecimal_value_of_char(c1) | 0) + _he_ | 0;
             if(0 <= c$0)
              if(255 < c$0)
               var switch$1=0;
              else
               var _hg_=char_of_int(c$0),switch$1=1;
             else
              var switch$1=0;
             if(! switch$1)
              var _hg_=bad_input(caml_call2(sprintf(_cg_),c1,c2));
             return store_char(width - 2 | 0,ib,_hg_);
            case 0:
            case 6:
            case 18:
            case 22:
            case 24:var switch$0=1;break;
            default:var switch$0=0}}
       else
        {if(48 <= c0)
          {var
            get_digit$0=
             function(param)
              {var c=next_char(ib),switcher=c - 48 | 0;
               return 9 < switcher >>> 0?bad_input_escape(c):c},
            c1$0=get_digit$0(0),
            c2$0=get_digit$0(0),
            c=
             ((100 * (c0 - 48 | 0) | 0) + (10 * (c1$0 - 48 | 0) | 0) | 0)
             +
             (c2$0 - 48 | 0)
             |
             0;
           if(0 <= c)
            if(255 < c)var switch$2=0;else var _hh_=char_of_int(c),switch$2=1;
           else
            var switch$2=0;
           if(! switch$2)
            var _hh_=bad_input(caml_call3(sprintf(_cf_),c0,c1$0,c2$0));
           return store_char(width - 2 | 0,ib,_hh_)}
         var switch$0=0}
      else
       var switch$0=34 === c0?1:39 <= c0?1:0;
      if(switch$0)
       {if(110 <= c0)
         if(117 <= c0)
          var switch$3=0;
         else
          {var switcher=c0 - 110 | 0;
           switch(switcher)
            {case 0:var _hf_=10,switch$3=1;break;
             case 4:var _hf_=13,switch$3=1;break;
             case 6:var _hf_=9,switch$3=1;break;
             default:var switch$3=0}}
        else
         if(98 === c0)var _hf_=8,switch$3=1;else var switch$3=0;
        if(! switch$3)var _hf_=c0;
        return store_char(width,ib,_hf_)}
      return bad_input_escape(c0)}
    function scan_caml_char(width,ib)
     {function find_stop(width)
       {var c=check_next_char_for_char(width,ib);
        return 39 === c?ignore_char(width,ib):character_mismatch(39,c)}
      var c=checked_peek_char(ib);
      if(39 === c)
       {var
         width$0=ignore_char(width,ib),
         c$0=check_next_char_for_char(width$0,ib);
        return 92 === c$0
                ?find_stop(scan_backslash_char(ignore_char(width$0,ib),ib))
                :find_stop(store_char(width$0,ib,c$0))}
      return character_mismatch(39,c)}
    function scan_caml_string(width,ib)
     {function find_stop$0(counter,width)
       {var width$0=width;
        for(;;)
         {var c=check_next_char_for_string(width$0,ib);
          if(34 === c)return ignore_char(width$0,ib);
          if(92 === c)
           {var
             width$1=ignore_char(width$0,ib),
             match=check_next_char_for_string(width$1,ib);
            if(10 === match)
             {var _hc_=ignore_char(width$1,ib);
              if(counter < 50)
               {var counter$0=counter + 1 | 0;
                return skip_spaces(counter$0,_hc_)}
              return caml_trampoline_return(skip_spaces,[0,_hc_])}
            if(13 === match)
             {var
               width$3=ignore_char(width$1,ib),
               match$0=check_next_char_for_string(width$3,ib);
              if(10 === match$0)
               {var _hd_=ignore_char(width$3,ib);
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return skip_spaces(counter$1,_hd_)}
                return caml_trampoline_return(skip_spaces,[0,_hd_])}
              var width$5=store_char(width$3,ib,13),width$0=width$5;
              continue}
            var width$4=scan_backslash_char(width$1,ib),width$0=width$4;
            continue}
          var width$2=store_char(width$0,ib,c),width$0=width$2;
          continue}}
      function skip_spaces(counter,width)
       {var width$0=width;
        for(;;)
         {var match=check_next_char_for_string(width$0,ib);
          if(32 === match)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return find_stop$0(counter$0,width$0)}
          return caml_trampoline_return(find_stop$0,[0,width$0])}}
      function find_stop(width){return caml_trampoline(find_stop$0(0,width))}
      var c=checked_peek_char(ib);
      return 34 === c
              ?find_stop(ignore_char(width,ib))
              :character_mismatch(34,c)}
    function scan_chars_in_char_set(char_set,scan_indic,width,ib)
     {function scan_chars(i,stp)
       {var i$0=i;
        for(;;)
         {var c=peek_char(ib),_g__=0 < i$0?1:0;
          if(_g__)
           {var _g$_=1 - ib[1];
            if(_g$_)
             var _ha_=is_in_char_set(char_set,c),_hb_=_ha_?c !== stp?1:0:_ha_;
            else
             var _hb_=_g$_}
          else
           var _hb_=_g__;
          if(_hb_)
           {store_char(max_int,ib,c);var i$1=i$0 - 1 | 0,i$0=i$1;continue}
          return _hb_}}
      if(scan_indic)
       {var c=scan_indic[1];
        scan_chars(width,c);
        var _g9_=1 - ib[1];
        if(_g9_)
         {var ci=peek_char(ib);
          return c === ci?invalidate_current_char(ib):character_mismatch(c,ci)}
        return _g9_}
      return scan_chars(width,-1)}
    function scanf_bad_input(ib,x)
     {if(x[1] === Scan_failure)
       var s=x[2];
      else
       {if(x[1] !== Failure)throw x;var s=x[2]}
      var i=char_count(ib);
      return bad_input(caml_call2(sprintf(_ci_),i,s))}
    function get_counter(ib,counter)
     {switch(counter)
       {case 0:return ib[5];case 1:return char_count(ib);default:return ib[6]}}
    function width_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return width}return max_int}
    function stopper_of_formatting_lit(fmting)
     {if(6 === fmting)return _cj_;
      var
       str=string_of_formatting_lit(fmting),
       stp=caml_string_get(str,1),
       sub_str=sub$0(str,2,caml_ml_string_length(str) - 2 | 0);
      return [0,stp,sub_str]}
    function take_format_readers$0(counter,k,fmt)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k,0);
       else
        switch(fmt$0[0])
         {case 0:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 1:var fmt$2=fmt$0[1],fmt$0=fmt$2;continue;
          case 2:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 3:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 4:var fmt$5=fmt$0[4],fmt$0=fmt$5;continue;
          case 5:var fmt$6=fmt$0[4],fmt$0=fmt$6;continue;
          case 6:var fmt$7=fmt$0[4],fmt$0=fmt$7;continue;
          case 7:var fmt$8=fmt$0[4],fmt$0=fmt$8;continue;
          case 8:var fmt$9=fmt$0[4],fmt$0=fmt$9;continue;
          case 9:var fmt$10=fmt$0[2],fmt$0=fmt$10;continue;
          case 10:var fmt$11=fmt$0[1],fmt$0=fmt$11;continue;
          case 11:var fmt$12=fmt$0[2],fmt$0=fmt$12;continue;
          case 12:var fmt$13=fmt$0[2],fmt$0=fmt$13;continue;
          case 13:var fmt$14=fmt$0[3],fmt$0=fmt$14;continue;
          case 14:
           var rest=fmt$0[3],fmtty=fmt$0[2],_g7_=erase_rel(symm(fmtty));
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return take_fmtty_format_readers$0(counter$0,k,_g7_,rest)}
           return caml_trampoline_return
                   (take_fmtty_format_readers$0,[0,k,_g7_,rest]);
          case 15:var fmt$15=fmt$0[1],fmt$0=fmt$15;continue;
          case 16:var fmt$16=fmt$0[1],fmt$0=fmt$16;continue;
          case 17:var fmt$17=fmt$0[2],fmt$0=fmt$17;continue;
          case 18:
           var _g8_=fmt$0[1];
           if(0 === _g8_[0])
            {var
              rest$0=fmt$0[2],
              match=_g8_[1],
              fmt$18=match[1],
              fmt$19=concat_fmt(fmt$18,rest$0),
              fmt$0=fmt$19;
             continue}
           var
            rest$1=fmt$0[2],
            match$0=_g8_[1],
            fmt$20=match$0[1],
            fmt$21=concat_fmt(fmt$20,rest$1),
            fmt$0=fmt$21;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_format_readers(new_k,fmt_rest)};
          case 20:var fmt$22=fmt$0[3],fmt$0=fmt$22;continue;
          case 21:var fmt$23=fmt$0[2],fmt$0=fmt$23;continue;
          case 22:var fmt$24=fmt$0[1],fmt$0=fmt$24;continue;
          case 23:
           var rest$2=fmt$0[2],ign=fmt$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:
               return function(reader)
                {function new_k(readers_rest)
                  {return caml_call1(k,[0,reader,readers_rest])}
                 return take_format_readers(new_k,rest$2)};
              default:var fmt$0=rest$2;continue}
           else
            switch(ign[0])
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:var fmt$0=rest$2;continue;
              case 3:var fmt$0=rest$2;continue;
              case 4:var fmt$0=rest$2;continue;
              case 5:var fmt$0=rest$2;continue;
              case 6:var fmt$0=rest$2;continue;
              case 7:var fmt$0=rest$2;continue;
              case 8:var fmt$0=rest$2;continue;
              case 9:
               var fmtty$0=ign[2];
               if(counter < 50)
                {var counter$1=counter + 1 | 0;
                 return take_fmtty_format_readers$0
                         (counter$1,k,fmtty$0,rest$2)}
               return caml_trampoline_return
                       (take_fmtty_format_readers$0,[0,k,fmtty$0,rest$2]);
              case 10:var fmt$0=rest$2;continue;
              default:var fmt$0=rest$2;continue}
          default:var fmt$25=fmt$0[3],fmt$0=fmt$25;continue}}
    function take_fmtty_format_readers$0(counter,k,fmtty,fmt)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        {if(counter < 50)
          {var counter$0=counter + 1 | 0;
           return take_format_readers$0(counter$0,k,fmt)}
         return caml_trampoline_return(take_format_readers$0,[0,k,fmt])}
       else
        switch(fmtty$0[0])
         {case 0:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 1:var fmtty$2=fmtty$0[1],fmtty$0=fmtty$2;continue;
          case 2:var fmtty$3=fmtty$0[1],fmtty$0=fmtty$3;continue;
          case 3:var fmtty$4=fmtty$0[1],fmtty$0=fmtty$4;continue;
          case 4:var fmtty$5=fmtty$0[1],fmtty$0=fmtty$5;continue;
          case 5:var fmtty$6=fmtty$0[1],fmtty$0=fmtty$6;continue;
          case 6:var fmtty$7=fmtty$0[1],fmtty$0=fmtty$7;continue;
          case 7:var fmtty$8=fmtty$0[1],fmtty$0=fmtty$8;continue;
          case 8:var fmtty$9=fmtty$0[2],fmtty$0=fmtty$9;continue;
          case 9:
           var
            rest=fmtty$0[3],
            ty2=fmtty$0[2],
            ty1=fmtty$0[1],
            ty=trans(symm(ty1),ty2),
            fmtty$10=concat_fmtty(ty,rest),
            fmtty$0=fmtty$10;
           continue;
          case 10:var fmtty$11=fmtty$0[1],fmtty$0=fmtty$11;continue;
          case 11:var fmtty$12=fmtty$0[1],fmtty$0=fmtty$12;continue;
          case 12:var fmtty$13=fmtty$0[1],fmtty$0=fmtty$13;continue;
          case 13:
           var fmt_rest=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest,fmt)};
          default:
           var fmt_rest$0=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest$0,fmt)}}}
    function take_format_readers(k,fmt)
     {return caml_trampoline(take_format_readers$0(0,k,fmt))}
    function take_fmtty_format_readers(k,fmtty,fmt)
     {return caml_trampoline(take_fmtty_format_readers$0(0,k,fmtty,fmt))}
    function pad_prec_scanf(ib,fmt,readers,pad,prec,scan,token)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(0 === prec)
           {caml_call3(scan,max_int,max_int,ib);
            var x=caml_call1(token,ib);
            return [0,x,make_scanf(ib,fmt,readers)]}
          return invalid_arg(cst_scanf_bad_conversion)}
        var p=prec[1];
        caml_call3(scan,max_int,p,ib);
        var x$0=caml_call1(token,ib);
        return [0,x$0,make_scanf(ib,fmt,readers)]}
      else
       {if(0 === pad[0])
         {if(0 === pad[1])return invalid_arg(cst_scanf_bad_conversion$0);
          var _g6_=pad[2];
          if(typeof prec === "number")
           {if(0 === prec)
             {caml_call3(scan,_g6_,max_int,ib);
              var x$1=caml_call1(token,ib);
              return [0,x$1,make_scanf(ib,fmt,readers)]}
            return invalid_arg(cst_scanf_bad_conversion$1)}
          var p$0=prec[1];
          caml_call3(scan,_g6_,p$0,ib);
          var x$2=caml_call1(token,ib);
          return [0,x$2,make_scanf(ib,fmt,readers)]}
        return invalid_arg(cst_scanf_bad_conversion$2)}}
    function make_scanf(ib,fmt,readers)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return 0;
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           scan_char(0,ib);
           var c=token_char(ib);
           return [0,c,make_scanf(ib,rest,readers)];
          case 1:
           var rest$0=fmt$0[1];
           scan_caml_char(0,ib);
           var c$0=token_char(ib);
           return [0,c$0,make_scanf(ib,rest$0,readers)];
          case 2:
           var _gR_=fmt$0[2],_gS_=fmt$0[1];
           if(typeof _gR_ !== "number")
            switch(_gR_[0])
             {case 17:
               var
                rest$1=_gR_[2],
                fmting_lit=_gR_[1],
                match=stopper_of_formatting_lit(fmting_lit),
                str=match[2],
                stp=match[1],
                scan$0=
                 function(width,param,ib)
                  {return scan_string([0,stp],width,ib)},
                str_rest=[11,str,rest$1];
               return pad_prec_scanf
                       (ib,str_rest,readers,_gS_,0,scan$0,token_string);
              case 18:
               var _gT_=_gR_[1];
               if(0 === _gT_[0])
                {var
                  rest$2=_gR_[2],
                  match$0=_gT_[1],
                  fmt$1=match$0[1],
                  scan$1=
                   function(width,param,ib){return scan_string(_ck_,width,ib)};
                 return pad_prec_scanf
                         (ib,
                          concat_fmt(fmt$1,rest$2),
                          readers,
                          _gS_,
                          0,
                          scan$1,
                          token_string)}
               var
                rest$3=_gR_[2],
                match$1=_gT_[1],
                fmt$2=match$1[1],
                scan$2=
                 function(width,param,ib){return scan_string(_cl_,width,ib)};
               return pad_prec_scanf
                       (ib,
                        concat_fmt(fmt$2,rest$3),
                        readers,
                        _gS_,
                        0,
                        scan$2,
                        token_string)
              }
           var scan=function(width,param,ib){return scan_string(0,width,ib)};
           return pad_prec_scanf(ib,_gR_,readers,_gS_,0,scan,token_string);
          case 3:
           var
            rest$4=fmt$0[2],
            pad=fmt$0[1],
            scan$3=function(width,param,ib){return scan_caml_string(width,ib)};
           return pad_prec_scanf(ib,rest$4,readers,pad,0,scan$3,token_string);
          case 4:
           var
            rest$5=fmt$0[4],
            prec=fmt$0[3],
            pad$0=fmt$0[2],
            iconv=fmt$0[1],
            conv=integer_conversion_of_char(char_of_iconv(iconv)),
            scan$4=
             function(width,param,ib)
              {return scan_int_conversion(conv,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$5,
                    readers,
                    pad$0,
                    prec,
                    scan$4,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv,ib))});
          case 5:
           var
            rest$6=fmt$0[4],
            prec$0=fmt$0[3],
            pad$1=fmt$0[2],
            iconv$0=fmt$0[1],
            conv$0=integer_conversion_of_char(char_of_iconv(iconv$0)),
            scan$5=
             function(width,param,ib)
              {return scan_int_conversion(conv$0,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$6,
                    readers,
                    pad$1,
                    prec$0,
                    scan$5,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$0,ib))});
          case 6:
           var
            rest$7=fmt$0[4],
            prec$1=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$1=fmt$0[1],
            conv$1=integer_conversion_of_char(char_of_iconv(iconv$1)),
            scan$6=
             function(width,param,ib)
              {return scan_int_conversion(conv$1,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$7,
                    readers,
                    pad$2,
                    prec$1,
                    scan$6,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$1,ib))});
          case 7:
           var
            rest$8=fmt$0[4],
            prec$2=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$2=fmt$0[1],
            conv$2=integer_conversion_of_char(char_of_iconv(iconv$2)),
            scan$7=
             function(width,param,ib)
              {return scan_int_conversion(conv$2,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$8,
                    readers,
                    pad$3,
                    prec$2,
                    scan$7,
                    function(ib)
                     {return caml_int64_of_string(token_int_literal(conv$2,ib))});
          case 8:
           var _gU_=fmt$0[1];
           if(15 === _gU_)
            {var rest$9=fmt$0[4],prec$3=fmt$0[3],pad$4=fmt$0[2];
             return pad_prec_scanf
                     (ib,rest$9,readers,pad$4,prec$3,scan_caml_float,token_float)}
           if(16 <= _gU_)
            {var rest$10=fmt$0[4],prec$4=fmt$0[3],pad$5=fmt$0[2];
             return pad_prec_scanf
                     (ib,rest$10,readers,pad$5,prec$4,scan_hex_float,token_float)}
           var rest$11=fmt$0[4],prec$5=fmt$0[3],pad$6=fmt$0[2];
           return pad_prec_scanf
                   (ib,rest$11,readers,pad$6,prec$5,scan_float,token_float);
          case 9:
           var
            rest$12=fmt$0[2],
            pad$7=fmt$0[1],
            scan$8=
             function(param,_g5_,ib)
              {var
                c=checked_peek_char(ib),
                m=
                 102 === c
                  ?5
                  :116 === c?4:bad_input(caml_call1(sprintf(_ch_),c));
               return scan_string(0,m,ib)};
           return pad_prec_scanf(ib,rest$12,readers,pad$7,0,scan$8,token_bool);
          case 10:
           var rest$13=fmt$0[1];
           if(end_of_input(ib)){var fmt$0=rest$13;continue}
           return bad_input(cst_end_of_input_not_found);
          case 11:
           var rest$14=fmt$0[2],str$0=fmt$0[1];
           iter$4(function(_g4_){return check_char(ib,_g4_)},str$0);
           var fmt$0=rest$14;
           continue;
          case 12:
           var rest$15=fmt$0[2],chr=fmt$0[1];
           check_char(ib,chr);
           var fmt$0=rest$15;
           continue;
          case 13:
           var rest$16=fmt$0[3],fmtty=fmt$0[2],pad_opt=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt),ib);
           var s=token_string(ib);
           try
            {var _gV_=format_of_string_fmtty(s,fmtty),fmt$3=_gV_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var msg=exn[2],fmt$3=bad_input(msg)}
           return [0,fmt$3,make_scanf(ib,rest$16,readers)];
          case 14:
           var rest$17=fmt$0[3],fmtty$0=fmt$0[2],pad_opt$0=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt$0),ib);
           var s$0=token_string(ib);
           try
            {var
              match$2=fmt_ebb_of_string(0,s$0),
              fmt$6=match$2[1],
              match$3=fmt_ebb_of_string(0,s$0),
              fmt$7=match$3[1],
              fmt$8=type_format(fmt$7,erase_rel(symm(fmtty$0))),
              _gX_=type_format(fmt$6,erase_rel(fmtty$0)),
              fmt$5=_gX_,
              fmt$4=fmt$8}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var
              msg$0=exn[2],
              _gW_=bad_input(msg$0),
              fmt$5=_gW_[1],
              fmt$4=_gW_[2]}
           return [0,
                   [0,fmt$5,s$0],
                   make_scanf(ib,concat_fmt(fmt$4,rest$17),readers)];
          case 15:return invalid_arg(cst_scanf_bad_conversion_a);
          case 16:return invalid_arg(cst_scanf_bad_conversion_t);
          case 17:
           var
            rest$18=fmt$0[2],
            formatting_lit=fmt$0[1],
            _gY_=string_of_formatting_lit(formatting_lit);
           iter$4(function(_g3_){return check_char(ib,_g3_)},_gY_);
           var fmt$0=rest$18;
           continue;
          case 18:
           var _gZ_=fmt$0[1];
           if(0 === _gZ_[0])
            {var rest$19=fmt$0[2],match$4=_gZ_[1],fmt$9=match$4[1];
             check_char(ib,64);
             check_char(ib,123);
             var fmt$10=concat_fmt(fmt$9,rest$19),fmt$0=fmt$10;
             continue}
           var rest$20=fmt$0[2],match$5=_gZ_[1],fmt$11=match$5[1];
           check_char(ib,64);
           check_char(ib,91);
           var fmt$12=concat_fmt(fmt$11,rest$20),fmt$0=fmt$12;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           if(readers)
            {var
              readers_rest=readers[2],
              reader=readers[1],
              x=caml_call1(reader,ib);
             return [0,x,make_scanf(ib,fmt_rest,readers_rest)]}
           return invalid_arg(cst_scanf_missing_reader);
          case 20:
           var _g0_=fmt$0[3],_g1_=fmt$0[2],_g2_=fmt$0[1];
           if(typeof _g0_ !== "number" && 17 === _g0_[0])
            {var
              rest$21=_g0_[2],
              fmting_lit$0=_g0_[1],
              match$6=stopper_of_formatting_lit(fmting_lit$0),
              str$1=match$6[2],
              stp$0=match$6[1],
              width$0=width_of_pad_opt(_g2_);
             scan_chars_in_char_set(_g1_,[0,stp$0],width$0,ib);
             var s$2=token_string(ib),str_rest$0=[11,str$1,rest$21];
             return [0,s$2,make_scanf(ib,str_rest$0,readers)]}
           var width=width_of_pad_opt(_g2_);
           scan_chars_in_char_set(_g1_,0,width,ib);
           var s$1=token_string(ib);
           return [0,s$1,make_scanf(ib,_g0_,readers)];
          case 21:
           var
            rest$22=fmt$0[2],
            counter=fmt$0[1],
            count=get_counter(ib,counter);
           return [0,count,make_scanf(ib,rest$22,readers)];
          case 22:
           var rest$23=fmt$0[1],c$1=checked_peek_char(ib);
           return [0,c$1,make_scanf(ib,rest$23,readers)];
          case 23:
           var
            rest$24=fmt$0[2],
            ign=fmt$0[1],
            match$7=param_format_of_ignored_format(ign,rest$24),
            fmt$13=match$7[1],
            match$8=make_scanf(ib,fmt$13,readers);
           if(match$8){var arg_rest=match$8[2];return arg_rest}
           throw [0,Assert_failure,_cm_];
          default:
           return invalid_arg(cst_scanf_bad_conversion_custom_converter)}}
    function kscanf(ib,ef,param)
     {var str=param[2],fmt=param[1];
      function apply(f,args)
       {var f$0=f,args$0=args;
        for(;;)
         {if(args$0)
           {var
             r=args$0[2],
             x=args$0[1],
             f$1=caml_call1(f$0,x),
             f$0=f$1,
             args$0=r;
            continue}
          return f$0}}
      function k(readers,f)
       {reset_token(ib);
        try
         {var _gQ_=[0,make_scanf(ib,fmt,readers)],_gP_=_gQ_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          if(exc[1] === Scan_failure)
           var switch$0=0;
          else
           if(exc[1] === Failure)
            var switch$0=0;
           else
            if(exc === End_of_file)
             var switch$0=0;
            else
             {if(exc[1] !== Invalid_argument)throw exc;
              var
               msg=exc[2],
               _gO_=
                invalid_arg
                 (symbol
                   (msg,symbol(cst_in_format,symbol(escaped$1(str),cst$88)))),
               switch$0=1}
          if(! switch$0)var _gO_=[1,exc];
          var _gP_=_gO_}
        if(0 === _gP_[0]){var args=_gP_[1];return apply(f,args)}
        var exc=_gP_[1];
        return caml_call2(ef,ib,exc)}
      return take_format_readers(k,fmt)}
    function bscanf(ib,fmt){return kscanf(ib,scanf_bad_input,fmt)}
    function ksscanf(s,ef,fmt){return kscanf(from_string$1(s),ef,fmt)}
    function sscanf(s,fmt)
     {return kscanf(from_string$1(s),scanf_bad_input,fmt)}
    function scanf(fmt){return kscanf(stdib,scanf_bad_input,fmt)}
    function bscanf_format(ib,format,f)
     {scan_caml_string(max_int,ib);
      var str=token_string(ib);
      try
       {var _gN_=format_of_string_format(str,format),fmt=_gN_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] !== Failure)throw exn;
        var msg=exn[2],fmt=bad_input(msg)}
      return caml_call1(f,fmt)}
    function sscanf_format(s,format,f)
     {return bscanf_format(from_string$1(s),format,f)}
    function format_from_string(s,fmt)
     {function _gM_(x){return x}
      return sscanf_format
              (symbol(cst$90,symbol(escaped$1(s),cst$89)),fmt,_gM_)}
    function unescaped(s)
     {function _gL_(x){return x}
      return caml_call1(sscanf(symbol(cst$92,symbol(s,cst$91)),_cn_),_gL_)}
    function kfscanf(ic,ef,fmt){return kscanf(memo_from_channel(ic),ef,fmt)}
    function fscanf(ic,fmt)
     {return kscanf(memo_from_channel(ic),scanf_bad_input,fmt)}
    var
     Stdlib_scanf=
      [0,
       [0,
        stdib,
        from_file,
        from_file_bin,
        close_in$0,
        from_file,
        from_file_bin,
        from_string$1,
        from_function$0,
        from_channel$0,
        end_of_input,
        beginning_of_input,
        name_of_input,
        stdib],
       Scan_failure,
       bscanf,
       sscanf,
       scanf,
       kscanf,
       ksscanf,
       bscanf_format,
       sscanf_format,
       format_from_string,
       unescaped,
       fscanf,
       kfscanf];
    caml_register_global(761,Stdlib_scanf,"Stdlib__scanf");
    var register=caml_register_named_value;
    function register_exception(name,exn)
     {var slot=caml_obj_tag(exn) === 248?exn:exn[1];
      return caml_register_named_value(name,slot)}
    var Stdlib_callback=[0,register,register_exception];
    caml_register_global(762,Stdlib_callback,"Stdlib__callback");
    function copy$7(o){var o$0=o.slice();return caml_set_oo_id(o$0)}
    var params$0=[0,1,1,1,3,16],initial_object_size=2,dummy_item=0;
    function public_method_label(s)
     {var accu=[0,0],_gI_=caml_ml_string_length(s) - 1 | 0,_gH_=0;
      if(! (_gI_ < 0))
       {var i=_gH_;
        for(;;)
         {var _gJ_=caml_string_get(s,i);
          accu[1] = (223 * accu[1] | 0) + _gJ_ | 0;
          var _gK_=i + 1 | 0;
          if(_gI_ !== i){var i=_gK_;continue}
          break}}
      accu[1] = accu[1] & 2147483647;
      var tag=1073741823 < accu[1]?accu[1] + 2147483648 | 0:accu[1];
      return tag}
    var
     compare$11=caml_string_compare,
     Vars=caml_call1(Stdlib_map[1],[0,compare$11]),
     compare$12=caml_string_compare,
     Meths=caml_call1(Stdlib_map[1],[0,compare$12]),
     compare$13=caml_int_compare,
     Labs=caml_call1(Stdlib_map[1],[0,compare$13]),
     dummy_table=[0,0,[0,dummy_item],Meths[1],Labs[1],0,0,Vars[1],0],
     table_count=[0,0],
     dummy_met=caml_obj_block(0,0);
    function fit_size(n){return 2 < n?fit_size((n + 1 | 0) / 2 | 0) * 2 | 0:n}
    function new_table(pub_labels)
     {table_count[1]++;
      var
       len=pub_labels.length - 1,
       methods=caml_make_vect((len * 2 | 0) + 2 | 0,dummy_met);
      caml_check_bound(methods,0)[1] = len;
      var _gB_=((fit_size(len) * 32 | 0) / 8 | 0) - 1 | 0;
      caml_check_bound(methods,1)[2] = _gB_;
      var _gD_=len - 1 | 0,_gC_=0;
      if(! (_gD_ < 0))
       {var i=_gC_;
        for(;;)
         {var
           _gF_=(i * 2 | 0) + 3 | 0,
           _gE_=caml_check_bound(pub_labels,i)[1 + i];
          caml_check_bound(methods,_gF_)[1 + _gF_] = _gE_;
          var _gG_=i + 1 | 0;
          if(_gD_ !== i){var i=_gG_;continue}
          break}}
      return [0,initial_object_size,methods,Meths[1],Labs[1],0,0,Vars[1],0]}
    function resize$1(array,new_size)
     {var old_size=array[2].length - 1,_gz_=old_size < new_size?1:0;
      if(_gz_)
       {var new_buck=caml_make_vect(new_size,dummy_met);
        blit$1(array[2],0,new_buck,0,old_size);
        array[2] = new_buck;
        var _gA_=0}
      else
       var _gA_=_gz_;
      return _gA_}
    var method_count=[0,0],inst_var_count=[0,0];
    function new_method(table)
     {var index=table[2].length - 1;
      resize$1(table,index + 1 | 0);
      return index}
    function get_method_label(table,name)
     {try
       {var _gx_=caml_call2(Meths[27],name,table[3]);return _gx_}
      catch(_gy_)
       {_gy_ = caml_wrap_exception(_gy_);
        if(_gy_ === Not_found)
         {var label=new_method(table);
          table[3] = caml_call3(Meths[4],name,label,table[3]);
          table[4] = caml_call3(Labs[4],label,1,table[4]);
          return label}
        throw _gy_}}
    function get_method_labels(table,names)
     {return map$5(function(_gw_){return get_method_label(table,_gw_)},names)}
    function set_method(table,label,element)
     {method_count[1]++;
      return caml_call2(Labs[27],label,table[4])
              ?(resize$1(table,label + 1 | 0),
                caml_check_bound(table[2],label)[1 + label]
                =
                element,
                0)
              :(table[6] = [0,[0,label,element],table[6]],0)}
    function get_method(table,label)
     {try
       {var _gu_=assoc(label,table[6]);return _gu_}
      catch(_gv_)
       {_gv_ = caml_wrap_exception(_gv_);
        if(_gv_ === Not_found)
         return caml_check_bound(table[2],label)[1 + label];
        throw _gv_}}
    function to_list$3(arr){return arr === 0?0:to_list$1(arr)}
    function narrow(table,vars,virt_meths,concr_meths)
     {var
       vars$0=to_list$3(vars),
       virt_meths$0=to_list$3(virt_meths),
       concr_meths$0=to_list$3(concr_meths),
       virt_meth_labs=
        map$2
         (function(_gt_){return get_method_label(table,_gt_)},virt_meths$0),
       concr_meth_labs=
        map$2
         (function(_gs_){return get_method_label(table,_gs_)},concr_meths$0);
      table[5]
      =
      [0,
       [0,table[3],table[4],table[6],table[7],virt_meth_labs,vars$0],
       table[5]];
      var _gj_=Vars[1],_gk_=table[7];
      function _gl_(lab,info,tvars)
       {return mem(lab,vars$0)?caml_call3(Vars[4],lab,info,tvars):tvars}
      table[7] = caml_call3(Vars[13],_gl_,_gk_,_gj_);
      var by_name=[0,Meths[1]],by_label=[0,Labs[1]];
      iter2
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          var _go_=by_label[1];
          try
           {var _gq_=caml_call2(Labs[27],label,table[4]),_gp_=_gq_}
          catch(_gr_)
           {_gr_ = caml_wrap_exception(_gr_);
            if(_gr_ !== Not_found)throw _gr_;
            var _gp_=1}
          by_label[1] = caml_call3(Labs[4],label,_gp_,_go_);
          return 0},
        concr_meths$0,
        concr_meth_labs);
      iter2
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          by_label[1] = caml_call3(Labs[4],label,0,by_label[1]);
          return 0},
        virt_meths$0,
        virt_meth_labs);
      table[3] = by_name[1];
      table[4] = by_label[1];
      var _gm_=0,_gn_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meth_labs)?hm:[0,met,hm]},
        _gn_,
        _gm_);
      return 0}
    function widen(table)
     {var
       match=hd(table[5]),
       vars=match[6],
       virt_meths=match[5],
       saved_vars=match[4],
       saved_hidden_meths=match[3],
       by_label=match[2],
       by_name=match[1];
      table[5] = tl(table[5]);
      table[7]
      =
      fold_left$0
       (function(s,v)
         {var _gi_=caml_call2(Vars[27],v,table[7]);
          return caml_call3(Vars[4],v,_gi_,s)},
        saved_vars,
        vars);
      table[3] = by_name;
      table[4] = by_label;
      var _gh_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meths)?hm:[0,met,hm]},
        _gh_,
        saved_hidden_meths);
      return 0}
    function new_slot(table)
     {var index=table[1];table[1] = index + 1 | 0;return index}
    function new_variable(table,name)
     {try
       {var _gf_=caml_call2(Vars[27],name,table[7]);return _gf_}
      catch(_gg_)
       {_gg_ = caml_wrap_exception(_gg_);
        if(_gg_ === Not_found)
         {var index=new_slot(table);
          if(caml_string_notequal(name,cst$93))
           table[7] = caml_call3(Vars[4],name,index,table[7]);
          return index}
        throw _gg_}}
    function to_array(arr){return caml_equal(arr,0)?[0]:arr}
    function new_methods_variables(table,meths,vals)
     {var
       meths$0=to_array(meths),
       nmeths=meths$0.length - 1,
       nvals=vals.length - 1,
       res=caml_make_vect(nmeths + nvals | 0,0),
       _f9_=nmeths - 1 | 0,
       _f8_=0;
      if(! (_f9_ < 0))
       {var i$0=_f8_;
        for(;;)
         {var
           _gd_=
            get_method_label(table,caml_check_bound(meths$0,i$0)[1 + i$0]);
          caml_check_bound(res,i$0)[1 + i$0] = _gd_;
          var _ge_=i$0 + 1 | 0;
          if(_f9_ !== i$0){var i$0=_ge_;continue}
          break}}
      var _f$_=nvals - 1 | 0,_f__=0;
      if(! (_f$_ < 0))
       {var i=_f__;
        for(;;)
         {var
           _gb_=i + nmeths | 0,
           _ga_=new_variable(table,caml_check_bound(vals,i)[1 + i]);
          caml_check_bound(res,_gb_)[1 + _gb_] = _ga_;
          var _gc_=i + 1 | 0;
          if(_f$_ !== i){var i=_gc_;continue}
          break}}
      return res}
    function get_variable(table,name)
     {try
       {var _f6_=caml_call2(Vars[27],name,table[7]);return _f6_}
      catch(_f7_)
       {_f7_ = caml_wrap_exception(_f7_);
        if(_f7_ === Not_found)throw [0,Assert_failure,_co_];
        throw _f7_}}
    function get_variables(table,names)
     {return map$5(function(_f5_){return get_variable(table,_f5_)},names)}
    function add_initializer(table,f){table[8] = [0,f,table[8]];return 0}
    function create_table(public_methods)
     {if(public_methods === 0)return new_table([0]);
      var
       tags=map$5(public_method_label,public_methods),
       table=new_table(tags);
      iteri$2
       (function(i,met)
         {var lab=(i * 2 | 0) + 2 | 0;
          table[3] = caml_call3(Meths[4],met,lab,table[3]);
          table[4] = caml_call3(Labs[4],lab,1,table[4]);
          return 0},
        public_methods);
      return table}
    function init_class(table)
     {inst_var_count[1] = (inst_var_count[1] + table[1] | 0) - 1 | 0;
      table[8] = rev(table[8]);
      return resize$1
              (table,
               3 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0)}
    function inherits(cla,vals,virt_meths,concr_meths,param,top)
     {var env=param[4],super$0=param[2];
      narrow(cla,vals,virt_meths,concr_meths);
      var init=top?caml_call2(super$0,cla,env):caml_call1(super$0,cla);
      widen(cla);
      var
       _f0_=0,
       _f1_=to_array(concr_meths),
       _f2_=
        [0,
         map$5
          (function(nm){return get_method(cla,get_method_label(cla,nm))},_f1_),
         _f0_],
       _f3_=to_array(vals);
      return caml_array_concat
              ([0,
                [0,init],
                [0,
                 map$5(function(_f4_){return get_variable(cla,_f4_)},_f3_),
                 _f2_]])}
    function make_class(pub_meths,class_init)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      return [0,caml_call1(env_init,0),class_init,env_init,0]}
    function make_class_store(pub_meths,class_init,init_table)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      init_table[2] = class_init;
      init_table[1] = env_init;
      return 0}
    function dummy_class(loc)
     {function undef(param){throw [0,Undefined_recursive_module,loc]}
      return [0,undef,undef,undef,0]}
    function create_object(table)
     {var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function create_object_opt(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function iter_f(obj,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],f=param$0[1];
          caml_call1(f,obj);
          var param$0=l;
          continue}
        return 0}}
    function run_initializers(obj,table)
     {var inits=table[8],_fZ_=0 !== inits?1:0;
      return _fZ_?iter_f(obj,inits):_fZ_}
    function run_initializers_opt(obj_0,obj,table)
     {if(obj_0)return obj;
      var inits=table[8];
      if(0 !== inits)iter_f(obj,inits);
      return obj}
    function create_object_and_run_initializers(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=create_object(table);
      run_initializers(obj,table);
      return obj}
    function get_data$0(param)
     {if(param)return param[2];throw [0,Assert_failure,_cs_]}
    function build_path(n,keys,tables)
     {var res=[0,0,0,0],r=[0,res],_fV_=0;
      if(! (n < 0))
       {var i=_fV_;
        for(;;)
         {var _fX_=r[1];
          r[1] = [0,caml_check_bound(keys,i)[1 + i],_fX_,0];
          var _fY_=i + 1 | 0;
          if(n !== i){var i=_fY_;continue}
          break}}
      var _fW_=r[1];
      if(tables){tables[2] = _fW_;return res}
      throw [0,Assert_failure,_cp_]}
    function lookup_tables(root,keys)
     {var tables$2=get_data$0(root);
      if(tables$2)
       {var i$1=keys.length - 1 - 1 | 0,i=i$1,tables=tables$2;
        a:
        for(;;)
         {if(0 <= i)
           {var key=caml_check_bound(keys,i)[1 + i],tables$0=tables;
            for(;;)
             {if(tables$0)
               {if(tables$0[1] === key)
                 {var tables$1=get_data$0(tables$0);
                  if(tables$1)
                   {var i$0=i - 1 | 0,i=i$0,tables=tables$1;continue a}
                  throw [0,Assert_failure,_cu_]}
                if(tables$0)
                 {var _fU_=tables$0[3];
                  if(_fU_){var tables$0=_fU_;continue}
                  var v=[0,key,0,0];
                  if(tables$0)
                   {tables$0[3] = v;return build_path(i - 1 | 0,keys,v)}
                  throw [0,Assert_failure,_cq_]}
                throw [0,Assert_failure,_ct_]}
              throw [0,Assert_failure,_cr_]}}
          return tables}}
      return build_path(keys.length - 1 - 1 | 0,keys,root)}
    function new_cache(table)
     {var n=new_method(table);
      if(0 === (n % 2 | 0))
       var switch$0=0;
      else
       if((2 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0) < n)
        var switch$0=0;
       else
        var n$0=new_method(table),switch$0=1;
      if(! switch$0)var n$0=n;
      caml_check_bound(table[2],n$0)[1 + n$0] = 0;
      return n$0}
    function set_methods(table,methods)
     {var len=methods.length - 1,i=[0,0];
      for(;;)
       {if(i[1] < len)
         {var
           _fO_=i[1],
           label=caml_check_bound(methods,_fO_)[1 + _fO_],
           next=
            function(param)
             {i[1]++;
              var _fT_=i[1];
              return caml_check_bound(methods,_fT_)[1 + _fT_]},
           clo=next(0);
          if(typeof clo === "number")
           switch(clo)
            {case 0:
              var
               x=next(0),
               clo$0=function(x){return function(obj){return x}}(x);
              break;
             case 1:
              var
               n=next(0),
               clo$0=function(n){return function(obj){return obj[1 + n]}}(n);
              break;
             case 2:
              var
               e=next(0),
               n$0=next(0),
               clo$0=
                function(e,n){return function(obj){return obj[1 + e][1 + n]}}
                 (e,n$0);
              break;
             case 3:
              var
               n$1=next(0),
               clo$0=
                function(n)
                  {return function(obj){return caml_call1(obj[1][1 + n],obj)}}
                 (n$1);
              break;
             case 4:
              var
               n$2=next(0),
               clo$0=
                function(n){return function(obj,x){obj[1 + n] = x;return 0}}
                 (n$2);
              break;
             case 5:
              var
               f=next(0),
               x$0=next(0),
               clo$0=
                function(f,x){return function(obj){return caml_call1(f,x)}}
                 (f,x$0);
              break;
             case 6:
              var
               f$0=next(0),
               n$3=next(0),
               clo$0=
                function(f,n)
                  {return function(obj){return caml_call1(f,obj[1 + n])}}
                 (f$0,n$3);
              break;
             case 7:
              var
               f$1=next(0),
               e$0=next(0),
               n$4=next(0),
               clo$0=
                function(f,e,n)
                  {return function(obj)
                    {return caml_call1(f,obj[1 + e][1 + n])}}
                 (f$1,e$0,n$4);
              break;
             case 8:
              var
               f$2=next(0),
               n$5=next(0),
               clo$0=
                function(f,n)
                  {return function(obj)
                    {return caml_call1(f,caml_call1(obj[1][1 + n],obj))}}
                 (f$2,n$5);
              break;
             case 9:
              var
               f$3=next(0),
               x$1=next(0),
               y=next(0),
               clo$0=
                function(f,x,y)
                  {return function(obj){return caml_call2(f,x,y)}}
                 (f$3,x$1,y);
              break;
             case 10:
              var
               f$4=next(0),
               x$2=next(0),
               n$6=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj){return caml_call2(f,x,obj[1 + n])}}
                 (f$4,x$2,n$6);
              break;
             case 11:
              var
               f$5=next(0),
               x$3=next(0),
               e$1=next(0),
               n$7=next(0),
               clo$0=
                function(f,x,e,n)
                  {return function(obj)
                    {return caml_call2(f,x,obj[1 + e][1 + n])}}
                 (f$5,x$3,e$1,n$7);
              break;
             case 12:
              var
               f$6=next(0),
               x$4=next(0),
               n$8=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj)
                    {return caml_call2(f,x,caml_call1(obj[1][1 + n],obj))}}
                 (f$6,x$4,n$8);
              break;
             case 13:
              var
               f$7=next(0),
               n$9=next(0),
               x$5=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj){return caml_call2(f,obj[1 + n],x)}}
                 (f$7,n$9,x$5);
              break;
             case 14:
              var
               f$8=next(0),
               e$2=next(0),
               n$10=next(0),
               x$6=next(0),
               clo$0=
                function(f,e,n,x)
                  {return function(obj)
                    {return caml_call2(f,obj[1 + e][1 + n],x)}}
                 (f$8,e$2,n$10,x$6);
              break;
             case 15:
              var
               f$9=next(0),
               n$11=next(0),
               x$7=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj)
                    {return caml_call2(f,caml_call1(obj[1][1 + n],obj),x)}}
                 (f$9,n$11,x$7);
              break;
             case 16:
              var
               n$12=next(0),
               x$8=next(0),
               clo$0=
                function(n,x)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,x)}}
                 (n$12,x$8);
              break;
             case 17:
              var
               n$13=next(0),
               m=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + m])}}
                 (n$13,m);
              break;
             case 18:
              var
               n$14=next(0),
               e$3=next(0),
               m$0=next(0),
               clo$0=
                function(n,e,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + e][1 + m])}}
                 (n$14,e$3,m$0);
              break;
             case 19:
              var
               n$15=next(0),
               m$1=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {var _fR_=caml_call1(obj[1][1 + m],obj);
                     return caml_call2(obj[1][1 + n],obj,_fR_)}}
                 (n$15,m$1);
              break;
             case 20:
              var
               m$2=next(0),
               x$9=next(0),
               c=new_cache(table),
               clo$0=
                function(m,x,c)
                  {return function(obj)
                    {return caml_call2(caml_get_public_method(x,m,0),x,c)}}
                 (m$2,x$9,c);
              break;
             case 21:
              var
               m$3=next(0),
               n$16=next(0),
               c$0=new_cache(table),
               clo$0=
                function(m,n,c)
                  {return function(obj)
                    {var _fQ_=obj[1 + n];
                     return caml_call2(caml_get_public_method(_fQ_,m,0),_fQ_,c)}}
                 (m$3,n$16,c$0);
              break;
             case 22:
              var
               m$4=next(0),
               e$4=next(0),
               n$17=next(0),
               c$1=new_cache(table),
               clo$0=
                function(m,e,n,c)
                  {return function(obj)
                    {var _fP_=obj[1 + e][1 + n];
                     return caml_call2(caml_get_public_method(_fP_,m,0),_fP_,c)}}
                 (m$4,e$4,n$17,c$1);
              break;
             default:
              var
               m$5=next(0),
               n$18=next(0),
               c$2=new_cache(table),
               clo$0=
                function(m,n,c)
                  {return function(obj)
                    {var _fS_=caml_call1(obj[1][1 + n],obj);
                     return caml_call2(caml_get_public_method(_fS_,m,0),_fS_,c)}}
                 (m$5,n$18,c$2)}
          else
           var clo$0=clo;
          set_method(table,label,clo$0);
          i[1]++;
          continue}
        return 0}}
    function stats$0(param)
     {return [0,table_count[1],method_count[1],inst_var_count[1]]}
    var
     CamlinternalOO=
      [0,
       public_method_label,
       new_method,
       new_variable,
       new_methods_variables,
       get_variable,
       get_variables,
       get_method_label,
       get_method_labels,
       get_method,
       set_method,
       set_methods,
       narrow,
       widen,
       add_initializer,
       dummy_table,
       create_table,
       init_class,
       inherits,
       make_class,
       make_class_store,
       dummy_class,
       copy$7,
       create_object,
       create_object_opt,
       run_initializers,
       run_initializers_opt,
       create_object_and_run_initializers,
       lookup_tables,
       params$0,
       stats$0];
    caml_register_global(763,CamlinternalOO,"CamlinternalOO");
    var Stdlib_oo=[0,copy$7,public_method_label,public_method_label];
    caml_register_global(764,Stdlib_oo,"Stdlib__oo");
    var
     update_mod=runtime.caml_CamlinternalMod_update_mod,
     init_mod=runtime.caml_CamlinternalMod_init_mod,
     CamlinternalMod=[0,init_mod,update_mod];
    caml_register_global(765,CamlinternalMod,"CamlinternalMod");
    var
     initial_buffer=caml_create_bytes(32),
     buffer=[0,initial_buffer],
     bufpos=[0,0];
    function reset_buffer(param)
     {buffer[1] = initial_buffer;bufpos[1] = 0;return 0}
    function store(c)
     {if(caml_ml_bytes_length(buffer[1]) <= bufpos[1])
       {var newbuffer=caml_create_bytes(2 * bufpos[1] | 0);
        blit(buffer[1],0,newbuffer,0,bufpos[1]);
        buffer[1] = newbuffer}
      caml_bytes_set(buffer[1],bufpos[1],c);
      bufpos[1]++;
      return 0}
    function get_string(param)
     {var s=sub_string(buffer[1],0,bufpos[1]);
      buffer[1] = initial_buffer;
      return s}
    function make_lexer(keywords)
     {var kwd_table=caml_call2(Stdlib_hashtbl[1],0,17);
      iter$2
       (function(s){return caml_call3(Stdlib_hashtbl[5],kwd_table,s,[0,s])},
        keywords);
      function ident_or_keyword(id)
       {try
         {var _fM_=caml_call2(Stdlib_hashtbl[6],kwd_table,id);return _fM_}
        catch(_fN_)
         {_fN_ = caml_wrap_exception(_fN_);
          if(_fN_ === Not_found)return [1,id];
          throw _fN_}}
      function keyword_or_error(c)
       {var s=make$0(1,c);
        try
         {var _fK_=caml_call2(Stdlib_hashtbl[6],kwd_table,s);return _fK_}
        catch(_fL_)
         {_fL_ = caml_wrap_exception(_fL_);
          if(_fL_ === Not_found)
           throw [0,Error,symbol(cst_Illegal_character,s)];
          throw _fL_}}
      function end_exponent_part(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fJ_=match[1],switcher=_fJ_ - 48 | 0;
            if(! (9 < switcher >>> 0)){junk(strm);store(_fJ_);continue}}
          return [0,[3,caml_float_of_string(get_string(0))]]}}
      function exponent_part(strm)
       {var match=peek$0(strm);
        if(match)
         {var _fI_=match[1],switch$0=43 === _fI_?0:45 === _fI_?0:1;
          if(! switch$0)
           {junk(strm);store(_fI_);return end_exponent_part(strm)}}
        return end_exponent_part(strm)}
      function number(s)
       {for(;;)
         {var match=peek$0(s);
          if(match)
           {var _fF_=match[1];
            if(58 <= _fF_)
             {var switch$0=69 === _fF_?0:101 === _fF_?0:1;
              if(! switch$0){junk(s);store(69);return exponent_part(s)}}
            else
             {if(46 === _fF_)
               {junk(s);
                store(46);
                for(;;)
                 {var match$0=peek$0(s);
                  if(match$0)
                   {var _fG_=match$0[1],_fH_=_fG_ - 69 | 0;
                    if(32 < _fH_ >>> 0)
                     {var switcher=_fH_ + 21 | 0;
                      if(! (9 < switcher >>> 0)){junk(s);store(_fG_);continue}}
                    else
                     {var switcher$0=_fH_ - 1 | 0;
                      if(30 < switcher$0 >>> 0)
                       {junk(s);store(69);return exponent_part(s)}}}
                  return [0,[3,caml_float_of_string(get_string(0))]]}}
              if(48 <= _fF_){junk(s);store(_fF_);continue}}}
          return [0,[2,caml_int_of_string(get_string(0))]]}}
      function ident2(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fD_=match[1];
            if(94 <= _fD_)
             var
              _fE_=_fD_ - 95 | 0,
              switch$0=30 < _fE_ >>> 0?32 <= _fE_?1:0:29 === _fE_?0:1;
            else
             if(65 <= _fD_)
              var switch$0=92 === _fD_?0:1;
             else
              if(33 <= _fD_)
               switch(_fD_ - 33 | 0)
                {case 0:
                 case 2:
                 case 3:
                 case 4:
                 case 5:
                 case 9:
                 case 10:
                 case 12:
                 case 14:
                 case 25:
                 case 27:
                 case 28:
                 case 29:
                 case 30:
                 case 31:var switch$0=0;break;
                 default:var switch$0=1}
              else
               var switch$0=1;
            if(! switch$0){junk(strm);store(_fD_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function neg_number(s)
       {var match=peek$0(s);
        if(match)
         {var _fC_=match[1],switcher=_fC_ - 48 | 0;
          if(! (9 < switcher >>> 0))
           {junk(s);reset_buffer(0);store(45);store(_fC_);return number(s)}}
        reset_buffer(0);
        store(45);
        return ident2(s)}
      function ident(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fA_=match[1];
            if(91 <= _fA_)
             var
              _fB_=_fA_ - 95 | 0,
              switch$0=27 < _fB_ >>> 0?97 <= _fB_?0:1:1 === _fB_?1:0;
            else
             var
              switch$0=
               48 <= _fA_?6 < (_fA_ - 58 | 0) >>> 0?0:1:39 === _fA_?0:1;
            if(! switch$0){junk(strm);store(_fA_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function next_token$0(counter,strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fq_=match[1];
            if(124 <= _fq_)
             var switch$0=127 <= _fq_?192 <= _fq_?1:0:125 === _fq_?0:2;
            else
             {var _fr_=_fq_ - 65 | 0;
              if(57 < _fr_ >>> 0)
               if(58 <= _fr_)
                var switch$0=0;
               else
                {var switcher=_fr_ + 65 | 0;
                 switch(switcher)
                  {case 34:
                    junk(strm);
                    reset_buffer(0);
                    for(;;)
                     {var match$1=peek$0(strm);
                      if(match$1)
                       {var _ft_=match$1[1];
                        if(34 === _ft_){junk(strm);return [0,[4,get_string(0)]]}
                        if(92 === _ft_)
                         {junk(strm);
                          try
                           {var c$0=escape(strm)}
                          catch(_fz_)
                           {_fz_ = caml_wrap_exception(_fz_);
                            if(_fz_ === Failure$0)throw [0,Error,cst$96];
                            throw _fz_;
                            var _fw_=_fz_}
                          store(c$0);
                          continue}
                        junk(strm);
                        store(_ft_);
                        continue}
                      throw Failure$0}
                   case 39:
                    junk(strm);
                    try
                     {var match$2=peek$0(strm);
                      if(! match$2)throw Failure$0;
                      var _fu_=match$2[1];
                      if(92 === _fu_)
                       {junk(strm);
                        try
                         {var _fv_=escape(strm)}
                        catch(_fy_)
                         {_fy_ = caml_wrap_exception(_fy_);
                          if(_fy_ === Failure$0)throw [0,Error,cst$97];
                          throw _fy_}
                        var c=_fv_}
                      else
                       {junk(strm);var c=_fu_}}
                    catch(_fx_)
                     {_fx_ = caml_wrap_exception(_fx_);
                      if(_fx_ === Failure$0)throw [0,Error,cst$94];
                      throw _fx_}
                    var match$0=peek$0(strm);
                    if(match$0)
                     if(39 === match$0[1]){junk(strm);return [0,[5,c]]}
                    throw [0,Error,cst$95];
                   case 40:
                    junk(strm);
                    if(counter < 50)
                     {var counter$0=counter + 1 | 0;
                      return maybe_comment(counter$0,strm)}
                    return caml_trampoline_return(maybe_comment,[0,strm]);
                   case 45:junk(strm);return neg_number(strm);
                   case 9:
                   case 10:
                   case 12:
                   case 13:
                   case 26:
                   case 32:junk(strm);continue;
                   case 48:
                   case 49:
                   case 50:
                   case 51:
                   case 52:
                   case 53:
                   case 54:
                   case 55:
                   case 56:
                   case 57:
                    junk(strm);reset_buffer(0);store(_fq_);return number(strm);
                   case 33:
                   case 35:
                   case 36:
                   case 37:
                   case 38:
                   case 42:
                   case 43:
                   case 47:
                   case 58:
                   case 60:
                   case 61:
                   case 62:
                   case 63:
                   case 64:var switch$0=2;break;
                   default:var switch$0=0}}
              else
               {var _fs_=_fr_ - 26 | 0;
                if(5 < _fs_ >>> 0)
                 var switch$0=1;
                else
                 switch(_fs_)
                  {case 4:var switch$0=1;break;
                   case 1:
                   case 3:var switch$0=2;break;
                   default:var switch$0=0}}}
            switch(switch$0)
             {case 0:junk(strm);return [0,keyword_or_error(_fq_)];
              case 1:
               junk(strm);reset_buffer(0);store(_fq_);return ident(strm);
              default:
               junk(strm);reset_buffer(0);store(_fq_);return ident2(strm)}}
          return 0}}
      function maybe_comment(counter,strm)
       {var match=peek$0(strm);
        if(match)
         if(42 === match[1])
          {junk(strm);
           comment(strm);
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return next_token$0(counter$0,strm)}
           return caml_trampoline_return(next_token$0,[0,strm])}
        return [0,keyword_or_error(40)]}
      function next_token(strm){return caml_trampoline(next_token$0(0,strm))}
      function escape(strm)
       {var match=peek$0(strm);
        if(match)
         {var _fn_=match[1];
          if(58 <= _fn_)
           {var switcher=_fn_ - 110 | 0;
            if(! (6 < switcher >>> 0))
             switch(switcher)
              {case 0:junk(strm);return 10;
               case 4:junk(strm);return 13;
               case 6:junk(strm);return 9
               }}
          else
           if(48 <= _fn_)
            {junk(strm);
             var match$0=peek$0(strm);
             if(match$0)
              {var _fo_=match$0[1],switcher$0=_fo_ - 48 | 0;
               if(! (9 < switcher$0 >>> 0))
                {junk(strm);
                 var match$1=peek$0(strm);
                 if(match$1)
                  {var _fp_=match$1[1],switcher$1=_fp_ - 48 | 0;
                   if(! (9 < switcher$1 >>> 0))
                    {junk(strm);
                     return chr
                             ((((_fn_ - 48 | 0) * 100 | 0)
                               +
                               ((_fo_ - 48 | 0) * 10 | 0)
                               |
                               0)
                              +
                              (_fp_ - 48 | 0)
                              |
                              0)}}
                 throw [0,Error,cst$99]}}
             throw [0,Error,cst$98]}
          junk(strm);
          return _fn_}
        throw Failure$0}
      function comment(strm)
       {a:
        for(;;)
         {var match=peek$0(strm);
          if(match)
           {var switcher=match[1] - 40 | 0;
            if(! (2 < switcher >>> 0))
             switch(switcher)
              {case 0:
                junk(strm);
                var match$0=peek$0(strm);
                if(match$0)
                 {if(42 === match$0[1]){junk(strm);comment(strm);continue}
                  junk(strm);
                  continue}
                throw Failure$0;
               case 1:break;
               default:
                junk(strm);
                for(;;)
                 {var match$1=peek$0(strm);
                  if(match$1)
                   {var _fm_=match$1[1];
                    if(41 === _fm_){junk(strm);return 0}
                    if(42 === _fm_){junk(strm);continue}
                    junk(strm);
                    continue a}
                  throw Failure$0}}
            junk(strm);
            continue}
          throw Failure$0}}
      return function(input)
       {return from(function(count){return next_token(input)})}}
    var Stdlib_genlex=[0,make_lexer];
    caml_register_global(766,Stdlib_genlex,"Stdlib__genlex");
    function MakeSeeded$0(H)
     {var prng=[246,function(_fl_){return caml_call1(_b1_[2],0)}];
      function create(opt,initial_size)
       {if(opt)
         var sth=opt[1],random=sth;
        else
         var random=caml_call1(Stdlib_hashtbl[17],0);
        var x=16;
        for(;;)
         {if(! (initial_size <= x))
           if(! (max_array_length < (x * 2 | 0)))
            {var x$0=x * 2 | 0,x=x$0;continue}
          if(random)
           var
            _fj_=caml_obj_tag(prng),
            _fk_=250 === _fj_?prng[1]:246 === _fj_?force_lazy_block(prng):prng,
            seed=caml_call1(_b1_[4],_fk_);
          else
           var seed=0;
          return [0,0,caml_make_vect(x,0),seed,x]}}
      function clear(h)
       {h[1] = 0;
        var len=h[2].length - 1,_fh_=len - 1 | 0,_fg_=0;
        if(! (_fh_ < 0))
         {var i=_fg_;
          for(;;)
           {caml_check_bound(h[2],i)[1 + i] = 0;
            var _fi_=i + 1 | 0;
            if(_fh_ !== i){var i=_fi_;continue}
            break}}
        return 0}
      function reset(h)
       {var len=h[2].length - 1;
        return len === h[4]
                ?clear(h)
                :(h[1] = 0,h[2] = caml_make_vect(h[4],0),0)}
      function copy(init)
       {var _fd_=init[4],_fe_=init[3],_ff_=copy$1(init[2]);
        return [0,init[1],_ff_,_fe_,_fd_]}
      function key_index(h,hkey){return hkey & (h[2].length - 1 - 1 | 0)}
      function clean(h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var rest=param$0[3],c=param$0[2],hkey=param$0[1];
              if(caml_call1(H[7],c))return [0,hkey,c,do_bucket(rest)];
              h[1] = h[1] - 1 | 0;
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_fa_=d.length - 1 - 1 | 0,_e$_=0;
        if(! (_fa_ < 0))
         {var i=_e$_;
          for(;;)
           {var _fb_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _fb_;
            var _fc_=i + 1 | 0;
            if(_fa_ !== i){var i=_fc_;continue}
            break}}
        return 0}
      function resize(h)
       {var odata=h[2],osize=odata.length - 1,nsize=osize * 2 | 0;
        clean(h);
        var
         _e5_=nsize < max_array_length?1:0,
         _e6_=_e5_?(osize >>> 1 | 0) <= h[1]?1:0:_e5_;
        if(_e6_)
         {var ndata=caml_make_vect(nsize,0);
          h[2] = ndata;
          var
           insert_bucket=
            function(param)
             {if(param)
               {var rest=param[3],data=param[2],hkey=param[1];
                insert_bucket(rest);
                var nidx=key_index(h,hkey);
                ndata[1 + nidx]
                =
                [0,hkey,data,caml_check_bound(ndata,nidx)[1 + nidx]];
                return 0}
              return 0},
           _e8_=osize - 1 | 0,
           _e7_=0;
          if(! (_e8_ < 0))
           {var i=_e7_;
            for(;;)
             {insert_bucket(caml_check_bound(odata,i)[1 + i]);
              var _e__=i + 1 | 0;
              if(_e8_ !== i){var i=_e__;continue}
              break}}
          var _e9_=0}
        else
         var _e9_=_e6_;
        return _e9_}
      function add(h,key,info)
       {var
         hkey=caml_call2(H[2],h[3],key),
         i=key_index(h,hkey),
         container=caml_call2(H[1],key,info),
         bucket=[0,hkey,container,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _e4_=h[2].length - 1 << 1 < h[1]?1:0;
        return _e4_?resize(h):_e4_}
      function remove(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function remove_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var next=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:h[1] = h[1] - 1 | 0;return next;
                  case 1:return [0,hk,c,remove_bucket(next)];
                  default:h[1] = h[1] - 1 | 0;var param$0=next;continue}}
              return [0,hk,c,remove_bucket(next)]}
            return 0}}
        var
         i=key_index(h,hkey),
         _e3_=remove_bucket(caml_check_bound(h[2],i)[1 + i]);
        caml_check_bound(h[2],i)[1 + i] = _e3_;
        return 0}
      function find(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _e2_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_e2_)[1 + _e2_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var match$0=caml_call1(H[4],c);
                 if(match$0){var d=match$0[1];return d}
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param=rest;
            continue}
          throw Not_found}}
      function find_opt(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _e1_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_e1_)[1 + _e1_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var d=caml_call1(H[4],c);
                 if(d)return d;
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param=rest;
            continue}
          return 0}}
      function find_all(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var rest=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:
                   var match$0=caml_call1(H[4],c);
                   if(match$0)
                    {var d=match$0[1];return [0,d,find_in_bucket(rest)]}
                   var param$0=rest;
                   continue;
                  case 1:var param$0=rest;continue;
                  default:var param$0=rest;continue}}
              var param$0=rest;
              continue}
            return 0}}
        var _e0_=key_index(h,hkey);
        return find_in_bucket(caml_check_bound(h[2],_e0_)[1 + _e0_])}
      function replace(h,key,info)
       {var hkey=caml_call2(H[2],h[3],key);
        function replace_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var next=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                if(0 === match)return caml_call3(H[6],c,key,info);
                var param$0=next;
                continue}
              var param$0=next;
              continue}
            throw Not_found}}
        var i=key_index(h,hkey),l=caml_check_bound(h[2],i)[1 + i];
        try
         {var _eY_=replace_bucket(l);return _eY_}
        catch(_eZ_)
         {_eZ_ = caml_wrap_exception(_eZ_);
          if(_eZ_ === Not_found)
           {var container=caml_call2(H[1],key,info);
            caml_check_bound(h[2],i)[1 + i] = [0,hkey,container,l];
            h[1] = h[1] + 1 | 0;
            var _eX_=h[2].length - 1 << 1 < h[1]?1:0;
            return _eX_?resize(h):_eX_}
          throw _eZ_}}
      function mem(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _eW_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_eW_)[1 + _eW_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hk === hkey)
             {var match=caml_call2(H[3],c,key);
              if(0 === match)return 1;
              var param=rest;
              continue}
            var param=rest;
            continue}
          return 0}}
      function iter$0(f,h)
       {var d$0=h[2],_eU_=d$0.length - 1 - 1 | 0,_eT_=0;
        if(! (_eU_ < 0))
         {var i=_eT_;
          a:
          for(;;)
           {var param$0=caml_check_bound(d$0,i)[1 + i],param=param$0;
            for(;;)
             {if(param)
               {var
                 rest=param[3],
                 c=param[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c);
                if(match)
                 if(match$0)
                  {var d=match$0[1],k=match[1];
                   caml_call2(f,k,d);
                   var switch$0=1}
                 else
                  var switch$0=0;
                else
                 var switch$0=0;
                var param=rest;
                continue}
              var _eV_=i + 1 | 0;
              if(_eU_ !== i){var i=_eV_;continue a}
              break}
            break}}
        return 0}
      function fold(f,h,init)
       {var d$0=h[2],accu$1=[0,init],_eQ_=d$0.length - 1 - 1 | 0,_eP_=0;
        if(! (_eQ_ < 0))
         {var i=_eP_;
          a:
          for(;;)
           {var
             _eR_=accu$1[1],
             b$0=caml_check_bound(d$0,i)[1 + i],
             b=b$0,
             accu=_eR_;
            for(;;)
             {if(b)
               {var
                 rest=b[3],
                 c=b[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c);
                if(match)
                 if(match$0)
                  var
                   d=match$0[1],
                   k=match[1],
                   accu$0=caml_call3(f,k,d,accu),
                   switch$0=1;
                 else
                  var switch$0=0;
                else
                 var switch$0=0;
                if(! switch$0)var accu$0=accu;
                var b=rest,accu=accu$0;
                continue}
              accu$1[1] = accu;
              var _eS_=i + 1 | 0;
              if(_eQ_ !== i){var i=_eS_;continue a}
              break}
            break}}
        return accu$1[1]}
      function filter_map_inplace(f,h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var
               rest=param$0[3],
               c=param$0[2],
               hk=param$0[1],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match)
               if(match$0)
                {var d=match$0[1],k=match[1],match$1=caml_call2(f,k,d);
                 if(match$1)
                  {var new_d=match$1[1];
                   caml_call3(H[6],c,k,new_d);
                   return [0,hk,c,do_bucket(rest)]}
                 var param$0=rest;
                 continue}
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_eM_=d.length - 1 - 1 | 0,_eL_=0;
        if(! (_eM_ < 0))
         {var i=_eL_;
          for(;;)
           {var _eN_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _eN_;
            var _eO_=i + 1 | 0;
            if(_eM_ !== i){var i=_eO_;continue}
            break}}
        return 0}
      function length(h){return h[1]}
      function bucket_length(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var
             param$1=param$0[3],
             accu$1=accu$0 + 1 | 0,
             accu$0=accu$1,
             param$0=param$1;
            continue}
          return accu$0}}
      function stats(h)
       {var
         _eI_=h[2],
         _eJ_=0,
         mbl=
          fold_left$1
           (function(m,b){return max(m,bucket_length(0,b))},_eJ_,_eI_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _eK_=h[2];
        iter$5
         (function(b)
           {var l=bucket_length(0,b);
            histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
            return 0},
          _eK_);
        return [0,h[1],h[2].length - 1,mbl,histo]}
      function bucket_length_alive(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var rest=param$0[3],c=param$0[2];
            if(caml_call1(H[7],c))
             {var accu$1=accu$0 + 1 | 0,accu$0=accu$1,param$0=rest;continue}
            var param$0=rest;
            continue}
          return accu$0}}
      function stats_alive(h)
       {var
         size=[0,0],
         _eF_=h[2],
         _eG_=0,
         mbl=
          fold_left$1
           (function(m,b){return max(m,bucket_length_alive(0,b))},_eG_,_eF_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _eH_=h[2];
        iter$5
         (function(b)
           {var l=bucket_length_alive(0,b);
            size[1] = size[1] + l | 0;
            histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
            return 0},
          _eH_);
        return [0,size[1],h[2].length - 1,mbl,histo]}
      function to_seq(tbl)
       {var tbl_data=tbl[2];
        function aux(i,buck,param)
         {var i$0=i,buck$0=buck;
          for(;;)
           {if(buck$0)
             {var
               next=buck$0[3],
               c=buck$0[2],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match)
               if(match$0)
                {var data=match$0[1],key=match[1];
                 return [0,
                         [0,key,data],
                         function(_eE_){return aux(i$0,next,_eE_)}]}
              var buck$0=next;
              continue}
            if(i$0 === tbl_data.length - 1)return 0;
            var
             buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
             i$1=i$0 + 1 | 0,
             i$0=i$1,
             buck$0=buck$1;
            continue}}
        var _eB_=0,_eC_=0;
        return function(_eD_){return aux(_eC_,_eB_,_eD_)}}
      function to_seq_keys(m)
       {var _ex_=to_seq(m);
        function _ey_(_eA_){return _eA_[1]}
        return function(_ez_){return map(_ey_,_ex_,_ez_)}}
      function to_seq_values(m)
       {var _et_=to_seq(m);
        function _eu_(_ew_){return _ew_[2]}
        return function(_ev_){return map(_eu_,_et_,_ev_)}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$0,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$5(param){return caml_call1(_u_[1],1)}
    function get_key$0(t){return caml_call2(_u_[3],t,0)}
    function get_key_copy$0(t){return caml_call2(_u_[4],t,0)}
    function set_key$0(t,k){return caml_call3(_u_[5],t,0,k)}
    function unset_key$0(t){return caml_call2(_u_[6],t,0)}
    function check_key$0(t){return caml_call2(_u_[7],t,0)}
    function blit_key$0(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,1)}
    function get_data$1(t){return caml_call1(_u_[9],t)}
    function get_data_copy(t){return caml_call1(_u_[10],t)}
    function set_data(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data(t){return caml_call1(_u_[12],t)}
    function check_data(t){return caml_call1(_u_[13],t)}
    function blit_data(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$1(H)
     {function create(k,d)
       {var c=create$5(0);set_data(c,d);set_key$0(c,k);return c}
      var hash=H[2];
      function equal(c,k)
       {var match=get_key$0(c);
        if(match){var k$0=match[1];return caml_call2(H[1],k,k$0)?0:1}
        return 2}
      function set_key_data(c,k,d)
       {unset_data(c);set_key$0(c,k);return set_data(c,d)}
      return MakeSeeded$0
              ([0,
                create,
                hash,
                equal,
                get_data$1,
                get_key$0,
                set_key_data,
                check_key$0])}
    function Make$1(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$1([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _es_=include[1];
      function create(sz){return caml_call2(_es_,_cv_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$6(param){return caml_call1(_u_[1],2)}
    function get_key1(t){return caml_call2(_u_[3],t,0)}
    function get_key1_copy(t){return caml_call2(_u_[4],t,0)}
    function set_key1(t,k){return caml_call3(_u_[5],t,0,k)}
    function unset_key1(t){return caml_call2(_u_[6],t,0)}
    function check_key1(t){return caml_call2(_u_[7],t,0)}
    function get_key2(t){return caml_call2(_u_[3],t,1)}
    function get_key2_copy(t){return caml_call2(_u_[4],t,1)}
    function set_key2(t,k){return caml_call3(_u_[5],t,1,k)}
    function unset_key2(t){return caml_call2(_u_[6],t,1)}
    function check_key2(t){return caml_call2(_u_[7],t,1)}
    function blit_key1(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,1)}
    function blit_key2(t1,t2){return caml_call5(_u_[8],t1,1,t2,1,1)}
    function blit_key12(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,2)}
    function get_data$2(t){return caml_call1(_u_[9],t)}
    function get_data_copy$0(t){return caml_call1(_u_[10],t)}
    function set_data$0(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data$0(t){return caml_call1(_u_[12],t)}
    function check_data$0(t){return caml_call1(_u_[13],t)}
    function blit_data$0(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$2(H1,H2)
     {function create(param,d)
       {var k2=param[2],k1=param[1],c=create$6(0);
        set_data$0(c,d);
        set_key1(c,k1);
        set_key2(c,k2);
        return c}
      function hash(seed,param)
       {var
         k2=param[2],
         k1=param[1],
         _er_=caml_call2(H2[2],seed,k2) * 65599 | 0;
        return caml_call2(H1[2],seed,k1) + _er_ | 0}
      function equal(c,param)
       {var k2=param[2],k1=param[1],match=get_key1(c),match$0=get_key2(c);
        if(match)
         if(match$0)
          {var k2$0=match$0[1],k1$0=match[1];
           if(caml_call2(H1[1],k1,k1$0))if(caml_call2(H2[1],k2,k2$0))return 0;
           return 1}
        return 2}
      function get_key(c)
       {var match=get_key1(c),match$0=get_key2(c);
        if(match)
         if(match$0){var k2=match$0[1],k1=match[1];return [0,[0,k1,k2]]}
        return 0}
      function set_key_data(c,param,d)
       {var k2=param[2],k1=param[1];
        unset_data$0(c);
        set_key1(c,k1);
        set_key2(c,k2);
        return set_data$0(c,d)}
      function check_key(c)
       {var _eq_=check_key1(c);return _eq_?check_key2(c):_eq_}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$2,get_key,set_key_data,check_key])}
    function Make$2(H1,H2)
     {var equal=H2[1];
      function hash(seed,x){return caml_call1(H2[2],x)}
      var equal$0=H1[1],_eo_=[0,equal,hash];
      function hash$0(seed,x){return caml_call1(H1[2],x)}
      var
       include=MakeSeeded$2([0,equal$0,hash$0],_eo_),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _ep_=include[1];
      function create(sz){return caml_call2(_ep_,_cw_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$7(n){return caml_call1(_u_[1],n)}
    function length$6(k){return caml_call1(_u_[2],k)}
    function get_key$1(t,n){return caml_call2(_u_[3],t,n)}
    function get_key_copy$1(t,n){return caml_call2(_u_[4],t,n)}
    function set_key$1(t,n,k){return caml_call3(_u_[5],t,n,k)}
    function unset_key$1(t,n){return caml_call2(_u_[6],t,n)}
    function check_key$1(t,n){return caml_call2(_u_[7],t,n)}
    function blit_key$1(t1,o1,t2,o2,l)
     {return caml_call5(_u_[8],t1,o1,t2,o2,l)}
    function get_data$3(t){return caml_call1(_u_[9],t)}
    function get_data_copy$1(t){return caml_call1(_u_[10],t)}
    function set_data$1(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data$1(t){return caml_call1(_u_[12],t)}
    function check_data$1(t){return caml_call1(_u_[13],t)}
    function blit_data$1(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$3(H)
     {function create(k,d)
       {var c=create$7(k.length - 1);
        set_data$1(c,d);
        var _em_=k.length - 1 - 1 | 0,_el_=0;
        if(! (_em_ < 0))
         {var i=_el_;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _en_=i + 1 | 0;
            if(_em_ !== i){var i=_en_;continue}
            break}}
        return c}
      function hash(seed,k)
       {var h=[0,0],_eh_=k.length - 1 - 1 | 0,_eg_=0;
        if(! (_eh_ < 0))
         {var i=_eg_;
          for(;;)
           {var _ei_=h[1],_ej_=caml_check_bound(k,i)[1 + i];
            h[1] = (caml_call2(H[2],seed,_ej_) * 65599 | 0) + _ei_ | 0;
            var _ek_=i + 1 | 0;
            if(_eh_ !== i){var i=_ek_;continue}
            break}}
        return h[1]}
      function equal(c,k)
       {var len=k.length - 1,len$0=length$6(c);
        if(len !== len$0)return 1;
        var i$1=len - 1 | 0,i=i$1;
        for(;;)
         {if(0 <= i)
           {var match=get_key$1(c,i);
            if(match)
             {var ki=match[1],_ef_=caml_check_bound(k,i)[1 + i];
              if(caml_call2(H[1],_ef_,ki)){var i$0=i - 1 | 0,i=i$0;continue}
              return 1}
            return 2}
          return 0}}
      function get_key(c)
       {var len=length$6(c);
        if(0 === len)return [0,[0]];
        var match=get_key$1(c,0);
        if(match)
         {var k0=match[1],a=caml_make_vect(len,k0),i$1=len - 1 | 0,i=i$1;
          for(;;)
           {if(1 <= i)
             {var match$0=get_key$1(c,i);
              if(match$0)
               {var ki=match$0[1];
                caml_check_bound(a,i)[1 + i] = ki;
                var i$0=i - 1 | 0,i=i$0;
                continue}
              return 0}
            return [0,a]}}
        return 0}
      function set_key_data(c,k,d)
       {unset_data$1(c);
        var _ed_=k.length - 1 - 1 | 0,_ec_=0;
        if(! (_ed_ < 0))
         {var i=_ec_;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _ee_=i + 1 | 0;
            if(_ed_ !== i){var i=_ee_;continue}
            break}}
        return set_data$1(c,d)}
      function check_key(c)
       {var i$1=length$6(c) - 1 | 0,i=i$1;
        for(;;)
         {var _d$_=i < 0?1:0;
          if(_d$_)
           var _ea_=_d$_;
          else
           {var _eb_=check_key$1(c,i);
            if(_eb_){var i$0=i - 1 | 0,i=i$0;continue}
            var _ea_=_eb_}
          return _ea_}}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$3,get_key,set_key_data,check_key])}
    function Make$3(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$3([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _d__=include[1];
      function create(sz){return caml_call2(_d__,_cx_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    var
     Stdlib_ephemeron=
      [0,
       [0,
        create$5,
        get_key$0,
        get_key_copy$0,
        set_key$0,
        unset_key$0,
        check_key$0,
        blit_key$0,
        get_data$1,
        get_data_copy,
        set_data,
        unset_data,
        check_data,
        blit_data,
        Make$1,
        MakeSeeded$1],
       [0,
        create$6,
        get_key1,
        get_key1_copy,
        set_key1,
        unset_key1,
        check_key1,
        get_key2,
        get_key2_copy,
        set_key2,
        unset_key2,
        check_key2,
        blit_key1,
        blit_key2,
        blit_key12,
        get_data$2,
        get_data_copy$0,
        set_data$0,
        unset_data$0,
        check_data$0,
        blit_data$0,
        Make$2,
        MakeSeeded$2],
       [0,
        create$7,
        get_key$1,
        get_key_copy$1,
        set_key$1,
        unset_key$1,
        check_key$1,
        blit_key$1,
        get_data$3,
        get_data_copy$1,
        set_data$1,
        unset_data$1,
        check_data$1,
        blit_data$1,
        Make$3,
        MakeSeeded$3],
       [0,
        function(_d9_)
         {return MakeSeeded$0
                  ([0,_d9_[3],_d9_[1],_d9_[2],_d9_[5],_d9_[4],_d9_[6],_d9_[7]])}]];
    caml_register_global(767,Stdlib_ephemeron,"Stdlib__ephemeron");
    function generic_basename(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$100))return current_dir_name;
      var n$3=caml_ml_string_length(name) - 1 | 0,n=n$3;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var p=n + 1 | 0,n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               return sub$0(name,n$1 + 1 | 0,(p - n$1 | 0) - 1 | 0);
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return sub$0(name,0,p)}}
        return sub$0(name,0,1)}}
    function generic_dirname(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$101))return current_dir_name;
      var n$5=caml_ml_string_length(name) - 1 | 0,n=n$5;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               {var n$3=n$1;
                for(;;)
                 {if(0 <= n$3)
                   {if(caml_call2(is_dir_sep,name,n$3))
                     {var n$4=n$3 - 1 | 0,n$3=n$4;continue}
                    return sub$0(name,0,n$3 + 1 | 0)}
                  return sub$0(name,0,1)}}
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return current_dir_name}}
        return sub$0(name,0,1)}}
    function is_dir_sep(s,i){return 47 === caml_string_get(s,i)?1:0}
    function is_relative(n)
     {var
       _d7_=caml_ml_string_length(n) < 1?1:0,
       _d8_=_d7_ || (47 !== caml_string_get(n,0)?1:0);
      return _d8_}
    function is_implicit(n)
     {var _d2_=is_relative(n);
      if(_d2_)
       {var
         _d3_=caml_ml_string_length(n) < 2?1:0,
         _d4_=_d3_ || caml_string_notequal(sub$0(n,0,2),cst$103);
        if(_d4_)
         var
          _d5_=caml_ml_string_length(n) < 3?1:0,
          _d6_=_d5_ || caml_string_notequal(sub$0(n,0,3),cst$102);
        else
         var _d6_=_d4_}
      else
       var _d6_=_d2_;
      return _d6_}
    function check_suffix(name,suff)
     {var
       _d0_=caml_ml_string_length(suff) <= caml_ml_string_length(name)?1:0,
       _d1_=
        _d0_
         ?caml_string_equal
           (sub$0
             (name,
              caml_ml_string_length(name) - caml_ml_string_length(suff) | 0,
              caml_ml_string_length(suff)),
            suff)
         :_d0_;
      return _d1_}
    function chop_suffix_opt(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var r=sub$0(filename,len_f - len_s | 0,len_s);
        return caml_string_equal(r,suffix)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _cF_=caml_sys_getenv(cst_TMPDIR),_cy_=_cF_}
    catch(_dZ_)
     {_dZ_ = caml_wrap_exception(_dZ_);
      if(_dZ_ !== Not_found)throw _dZ_;
      var _cy_=cst_tmp}
    function quote(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,39);
      var _dX_=l - 1 | 0,_dW_=0;
      if(! (_dX_ < 0))
       {var i=_dW_;
        for(;;)
         {if(39 === caml_string_get(s,i))
           add_string(b,quotequote);
          else
           add_char(b,caml_string_get(s,i));
          var _dY_=i + 1 | 0;
          if(_dX_ !== i){var i=_dY_;continue}
          break}}
      add_char(b,39);
      return contents(b)}
    function basename(_dV_)
     {return generic_basename(is_dir_sep,current_dir_name,_dV_)}
    function dirname(_dU_)
     {return generic_dirname(is_dir_sep,current_dir_name,_dU_)}
    function is_dir_sep$0(s,i)
     {var c=caml_string_get(s,i),_dR_=47 === c?1:0;
      if(_dR_)
       var _dS_=_dR_;
      else
       var _dT_=92 === c?1:0,_dS_=_dT_ || (58 === c?1:0);
      return _dS_}
    function is_relative$0(n)
     {var
       _dL_=caml_ml_string_length(n) < 1?1:0,
       _dM_=_dL_ || (47 !== caml_string_get(n,0)?1:0);
      if(_dM_)
       {var
         _dN_=caml_ml_string_length(n) < 1?1:0,
         _dO_=_dN_ || (92 !== caml_string_get(n,0)?1:0);
        if(_dO_)
         var
          _dP_=caml_ml_string_length(n) < 2?1:0,
          _dQ_=_dP_ || (58 !== caml_string_get(n,1)?1:0);
        else
         var _dQ_=_dO_}
      else
       var _dQ_=_dM_;
      return _dQ_}
    function is_implicit$0(n)
     {var _dC_=is_relative$0(n);
      if(_dC_)
       {var
         _dD_=caml_ml_string_length(n) < 2?1:0,
         _dE_=_dD_ || caml_string_notequal(sub$0(n,0,2),cst$107);
        if(_dE_)
         {var
           _dF_=caml_ml_string_length(n) < 2?1:0,
           _dG_=_dF_ || caml_string_notequal(sub$0(n,0,2),cst$106);
          if(_dG_)
           {var
             _dH_=caml_ml_string_length(n) < 3?1:0,
             _dI_=_dH_ || caml_string_notequal(sub$0(n,0,3),cst$105);
            if(_dI_)
             var
              _dJ_=caml_ml_string_length(n) < 3?1:0,
              _dK_=_dJ_ || caml_string_notequal(sub$0(n,0,3),cst$104);
            else
             var _dK_=_dI_}
          else
           var _dK_=_dG_}
        else
         var _dK_=_dE_}
      else
       var _dK_=_dC_;
      return _dK_}
    function check_suffix$0(name,suff)
     {var _dz_=caml_ml_string_length(suff) <= caml_ml_string_length(name)?1:0;
      if(_dz_)
       var
        s=
         sub$0
          (name,
           caml_ml_string_length(name) - caml_ml_string_length(suff) | 0,
           caml_ml_string_length(suff)),
        _dA_=lowercase_ascii$1(suff),
        _dB_=caml_string_equal(lowercase_ascii$1(s),_dA_);
      else
       var _dB_=_dz_;
      return _dB_}
    function chop_suffix_opt$0(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var
         r=sub$0(filename,len_f - len_s | 0,len_s),
         _dy_=lowercase_ascii$1(suffix);
        return caml_string_equal(lowercase_ascii$1(r),_dy_)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _cE_=caml_sys_getenv(cst_TEMP),temp_dir_name=_cE_}
    catch(_dx_)
     {_dx_ = caml_wrap_exception(_dx_);
      if(_dx_ !== Not_found)throw _dx_;
      var temp_dir_name=cst$108}
    function quote$0(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,34);
      function add_bs(n)
       {var _dv_=1;
        if(! (n < 1))
         {var j=_dv_;
          for(;;)
           {add_char(b,92);
            var _dw_=j + 1 | 0;
            if(n !== j){var j=_dw_;continue}
            break}}
        return 0}
      function loop$0(counter,i)
       {var i$0=i;
        for(;;)
         {if(i$0 === l)return add_char(b,34);
          var c=caml_string_get(s,i$0);
          if(34 === c)
           {var _dt_=0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;
              return loop_bs(counter$1,_dt_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_dt_,i$0])}
          if(92 === c)
           {var _du_=0;
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return loop_bs(counter$0,_du_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_du_,i$0])}
          add_char(b,c);
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function loop_bs(counter,n,i)
       {var n$0=n,i$0=i;
        for(;;)
         {if(i$0 === l){add_char(b,34);return add_bs(n$0)}
          var match=caml_string_get(s,i$0);
          if(34 === match)
           {add_bs((2 * n$0 | 0) + 1 | 0);
            add_char(b,34);
            var _ds_=i$0 + 1 | 0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;return loop$0(counter$1,_ds_)}
            return caml_trampoline_return(loop$0,[0,_ds_])}
          if(92 === match)
           {var i$1=i$0 + 1 | 0,n$1=n$0 + 1 | 0,n$0=n$1,i$0=i$1;continue}
          add_bs(n$0);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop$0(counter$0,i$0)}
          return caml_trampoline_return(loop$0,[0,i$0])}}
      function loop(i){return caml_trampoline(loop$0(0,i))}
      loop(0);
      return contents(b)}
    function drive_and_path(s)
     {var _do_=2 <= caml_ml_string_length(s)?1:0;
      if(_do_)
       var
        param=caml_string_get(s,0),
        switch$0=91 <= param?25 < (param - 97 | 0) >>> 0?0:1:65 <= param?1:0,
        _dp_=switch$0?1:0,
        _dq_=_dp_?58 === caml_string_get(s,1)?1:0:_dp_;
      else
       var _dq_=_do_;
      if(_dq_)
       {var _dr_=sub$0(s,2,caml_ml_string_length(s) - 2 | 0);
        return [0,sub$0(s,0,2),_dr_]}
      return [0,cst$109,s]}
    function dirname$0(s)
     {var
       match=drive_and_path(s),
       path=match[2],
       drive=match[1],
       dir=generic_dirname(is_dir_sep$0,current_dir_name$0,path);
      return symbol(drive,dir)}
    function basename$0(s)
     {var match=drive_and_path(s),path=match[2];
      return generic_basename(is_dir_sep$0,current_dir_name$0,path)}
    function basename$1(_dn_)
     {return generic_basename(is_dir_sep$0,current_dir_name$1,_dn_)}
    function dirname$1(_dm_)
     {return generic_dirname(is_dir_sep$0,current_dir_name$1,_dm_)}
    if(caml_string_notequal(os_type,cst_Cygwin))
     if(caml_string_notequal(os_type,cst_Win32))
      var
       current_dir_name$2=current_dir_name,
       parent_dir_name$2=parent_dir_name,
       dir_sep$2=dir_sep,
       is_dir_sep$1=is_dir_sep,
       is_relative$1=is_relative,
       is_implicit$1=is_implicit,
       check_suffix$1=check_suffix,
       chop_suffix_opt$1=chop_suffix_opt,
       temp_dir_name$0=_cy_,
       quote$1=quote,
       basename$2=basename,
       dirname$2=dirname,
       switch$0=1;
     else
      var
       _cD_=
        [0,
         current_dir_name$0,
         parent_dir_name$0,
         dir_sep$0,
         is_dir_sep$0,
         is_relative$0,
         is_implicit$0,
         check_suffix$0,
         chop_suffix_opt$0,
         temp_dir_name,
         quote$0,
         basename$0,
         dirname$0],
       switch$0=0;
    else
     var
      _cD_=
       [0,
        current_dir_name$1,
        parent_dir_name$1,
        dir_sep$1,
        is_dir_sep$0,
        is_relative$0,
        is_implicit$0,
        check_suffix$0,
        chop_suffix_opt$0,
        _cy_,
        quote,
        basename$1,
        dirname$1],
      switch$0=0;
    if(! switch$0)
     var
      current_dir_name$2=_cD_[1],
      parent_dir_name$2=_cD_[2],
      dir_sep$2=_cD_[3],
      is_dir_sep$1=is_dir_sep$0,
      is_relative$1=is_relative$0,
      is_implicit$1=is_implicit$0,
      check_suffix$1=check_suffix$0,
      chop_suffix_opt$1=chop_suffix_opt$0,
      temp_dir_name$0=_cD_[9],
      quote$1=_cD_[10],
      basename$2=_cD_[11],
      dirname$2=_cD_[12];
    function concat$3(dirname,filename)
     {var l=caml_ml_string_length(dirname);
      if(0 !== l)
       if(! is_dir_sep$1(dirname,l - 1 | 0))
        return symbol(dirname,symbol(dir_sep$2,filename));
      return symbol(dirname,filename)}
    function chop_suffix(name,suff)
     {var n=caml_ml_string_length(name) - caml_ml_string_length(suff) | 0;
      return 0 <= n?sub$0(name,0,n):invalid_arg(cst_Filename_chop_suffix)}
    function extension_len(name)
     {var i$4=caml_ml_string_length(name) - 1 | 0,i$1=i$4;
      for(;;)
       {if(0 <= i$1)
         if(! is_dir_sep$1(name,i$1))
          {if(46 === caml_string_get(name,i$1))
            {var i$2=i$1 - 1 | 0,i=i$2;
             for(;;)
              {if(0 <= i)
                if(! is_dir_sep$1(name,i))
                 {if(46 === caml_string_get(name,i))
                   {var i$0=i - 1 | 0,i=i$0;continue}
                  return caml_ml_string_length(name) - i$1 | 0}
               return 0}}
           var i$3=i$1 - 1 | 0,i$1=i$3;
           continue}
        return 0}}
    function extension(name)
     {var l=extension_len(name);
      return 0 === l?cst$110:sub$0(name,caml_ml_string_length(name) - l | 0,l)}
    function chop_extension(name)
     {var l=extension_len(name);
      return 0 === l
              ?invalid_arg(cst_Filename_chop_extension)
              :sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    function remove_extension(name)
     {var l=extension_len(name);
      return 0 === l?name:sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    var prng$0=[246,function(_dl_){return caml_call1(_b1_[2],0)}];
    function temp_file_name(temp_dir,prefix,suffix)
     {var
       _dj_=caml_obj_tag(prng$0),
       _dk_=
        250 === _dj_?prng$0[1]:246 === _dj_?force_lazy_block(prng$0):prng$0,
       rnd=caml_call1(_b1_[4],_dk_) & 16777215;
      return concat$3(temp_dir,caml_call3(sprintf(_cz_),prefix,rnd,suffix))}
    var current_temp_dir_name=[0,temp_dir_name$0];
    function set_temp_dir_name(s){current_temp_dir_name[1] = s;return 0}
    function get_temp_dir_name(param){return current_temp_dir_name[1]}
    function temp_file(opt,prefix,suffix)
     {if(opt)
       var sth=opt[1],temp_dir=sth;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {runtime.caml_sys_close(caml_sys_open(name,_cA_,384));return name}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    function open_temp_file(opt,_dh_,_dg_,prefix,suffix)
     {if(opt)var sth=opt[1],mode=sth;else var mode=_cB_;
      if(_dh_)var sth$0=_dh_[1],perms=sth$0;else var perms=384;
      if(_dg_)
       var sth$1=_dg_[1],temp_dir=sth$1;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {var _di_=[0,name,open_out_gen([0,1,[0,3,[0,5,mode]]],perms,name)];
            return _di_}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    var
     Stdlib_filename=
      [0,
       current_dir_name$2,
       parent_dir_name$2,
       dir_sep$2,
       concat$3,
       is_relative$1,
       is_implicit$1,
       check_suffix$1,
       chop_suffix,
       chop_suffix_opt$1,
       extension,
       remove_extension,
       chop_extension,
       basename$2,
       dirname$2,
       temp_file,
       open_temp_file,
       get_temp_dir_name,
       set_temp_dir_name,
       temp_dir_name$0,
       quote$1];
    caml_register_global(768,Stdlib_filename,"Stdlib__filename");
    function add$1(x,y){return [254,x[1] + y[1],x[2] + y[2]]}
    function sub$4(x,y){return [254,x[1] - y[1],x[2] - y[2]]}
    function neg(x){return [254,- x[1],- x[2]]}
    function conj(x){return [254,x[1],- x[2]]}
    function mul(x,y)
     {return [254,x[1] * y[1] - x[2] * y[2],x[1] * y[2] + x[2] * y[1]]}
    function div(x,y)
     {if(Math.abs(y[2]) <= Math.abs(y[1]))
       {var r=y[2] / y[1],d=y[1] + r * y[2];
        return [254,(x[1] + r * x[2]) / d,(x[2] - r * x[1]) / d]}
      var r$0=y[1] / y[2],d$0=y[2] + r$0 * y[1];
      return [254,(r$0 * x[1] + x[2]) / d$0,(r$0 * x[2] - x[1]) / d$0]}
    function inv(x){return div(one$4,x)}
    function norm2(x){return x[1] * x[1] + x[2] * x[2]}
    function norm(x)
     {var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(r == 0.)return i;
      if(i == 0.)return r;
      if(i <= r){var q=i / r;return r * Math.sqrt(1. + q * q)}
      var q$0=r / i;
      return i * Math.sqrt(1. + q$0 * q$0)}
    function arg(x){return Math.atan2(x[2],x[1])}
    function polar(n,a){return [254,Math.cos(a) * n,Math.sin(a) * n]}
    function sqrt(x)
     {if(x[1] == 0.)if(x[2] == 0.)return _cC_;
      var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(i <= r)
       var
        q=i / r,
        w=Math.sqrt(r) * Math.sqrt(0.5 * (1. + Math.sqrt(1. + q * q)));
      else
       var
        q$0=r / i,
        w=Math.sqrt(i) * Math.sqrt(0.5 * (q$0 + Math.sqrt(1. + q$0 * q$0)));
      if(0. <= x[1])return [254,w,0.5 * x[2] / w];
      var w$0=0. <= x[2]?w:- w;
      return [254,0.5 * i / w,w$0]}
    function exp(x)
     {var e=Math.exp(x[1]);return [254,e * Math.cos(x[2]),e * Math.sin(x[2])]}
    function log(x)
     {var _df_=Math.atan2(x[2],x[1]);return [254,Math.log(norm(x)),_df_]}
    function pow(x,y){return exp(mul(y,log(x)))}
    var
     Stdlib_complex=
      [0,
       zero$4,
       one$4,
       i,
       neg,
       conj,
       add$1,
       sub$4,
       mul,
       inv,
       div,
       sqrt,
       norm2,
       norm,
       arg,
       polar,
       exp,
       log,
       pow];
    caml_register_global(769,Stdlib_complex,"Stdlib__complex");
    var
     Stdlib_arrayLabels=
      [0,
       init$2,
       create_matrix,
       create_matrix,
       append$0,
       concat$1,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       map$5,
       iteri$2,
       mapi$2,
       fold_left$1,
       fold_right$0,
       iter2$0,
       map2$0,
       exists$0,
       for_all$0,
       mem$0,
       memq$0,
       make_float,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(770,Stdlib_arrayLabels,"Stdlib__arrayLabels");
    var
     Stdlib_listLabels=
      [0,
       length,
       hd,
       compare_lengths,
       compare_length_with,
       cons,
       tl,
       nth,
       nth_opt,
       rev,
       init,
       append,
       rev_append,
       flatten,
       flatten,
       iter$2,
       iteri,
       map$2,
       mapi,
       rev_map,
       filter_map$0,
       fold_left$0,
       fold_right,
       iter2,
       map2,
       rev_map2,
       fold_left2,
       fold_right2,
       for_all,
       exists,
       for_all2,
       exists2,
       mem,
       memq,
       find,
       find_opt,
       find_all,
       find_all,
       partition,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(771,Stdlib_listLabels,"Stdlib__listLabels");
    var
     Stdlib_bytesLabels=
      [0,
       make,
       init$0,
       empty$0,
       copy,
       of_string,
       to_string$1,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat,
       cat,
       iter$3,
       iteri$0,
       map$3,
       mapi$0,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$4,
       equal$4,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le,
       unsafe_to_string,
       unsafe_of_string];
    caml_register_global(772,Stdlib_bytesLabels,"Stdlib__bytesLabels");
    var
     Stdlib_stringLabels=
      [0,
       make$0,
       init$1,
       copy$0,
       sub$0,
       fill,
       blit$0,
       concat$0,
       iter$4,
       iteri$1,
       map$4,
       mapi$1,
       trim$0,
       escaped$1,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       contains$0,
       contains_from$0,
       rcontains_from$0,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       compare$5,
       equal$5,
       split_on_char,
       to_seq$3,
       to_seqi$0,
       of_seq$1];
    caml_register_global(773,Stdlib_stringLabels,"Stdlib__stringLabels");
    var Stdlib_moreLabels=[0,Stdlib_hashtbl,Stdlib_map,Stdlib_set];
    caml_register_global(774,Stdlib_moreLabels,"Stdlib__moreLabels");
    var Stdlib_stdLabels=[0];
    caml_register_global(775,Stdlib_stdLabels,"Stdlib__stdLabels");
    var enabled=caml_spacetime_enabled(0);
    function if_spacetime_enabled(f){return enabled?caml_call1(f,0):0}
    function create$8(path)
     {if(caml_spacetime_enabled(0))
       {var channel=open_out(path),t=[0,channel,0];
        caml_spacetime_only_works_for_native_code(t[1]);
        return t}
      return [0,stdout,1]}
    function save_event(time,t,event_name)
     {return if_spacetime_enabled
              (function(param)
                {return caml_spacetime_only_works_for_native_code
                         (time,t[1],event_name)})}
    function save_and_close(time,t)
     {return if_spacetime_enabled
              (function(param)
                {if(t[2])failwith(cst_Series_is_closed);
                 caml_spacetime_only_works_for_native_code(time,t[1]);
                 close_out(t[1]);
                 t[2] = 1;
                 return 0})}
    var Series=[0,create$8,save_event,save_and_close];
    function take$0(time,param)
     {var channel=param[1],closed=param[2];
      return if_spacetime_enabled
              (function(param)
                {if(closed)failwith(cst_Series_is_closed$0);
                 runtime.caml_gc_minor(0);
                 return caml_spacetime_only_works_for_native_code
                         (time,channel)})}
    var Snapshot=[0,take$0];
    function save_event_for_automatic_snapshots(event_name)
     {return if_spacetime_enabled
              (function(param)
                {return caml_spacetime_only_works_for_native_code(event_name)})}
    var
     Stdlib_spacetime=
      [0,enabled,Series,Snapshot,save_event_for_automatic_snapshots];
    caml_register_global(776,Stdlib_spacetime,"Stdlib__spacetime");
    var
     float32=0,
     float64=1,
     int8_signed=2,
     int8_unsigned=3,
     int16_signed=4,
     int16_unsigned=5,
     int32$1=6,
     int64$1=7,
     int$2=8,
     nativeint$1=9,
     complex32=10,
     complex64=11,
     char$0=12;
    function kind_size_in_bytes(param)
     {switch(param)
       {case 0:return 4;
        case 1:return 8;
        case 2:return 1;
        case 3:return 1;
        case 4:return 2;
        case 5:return 2;
        case 6:return 4;
        case 7:return 8;
        case 8:return 4;
        case 9:return 4;
        case 10:return 8;
        case 11:return 16;
        default:return 1}}
    var c_layout=0,fortran_layout=1;
    function dims(a)
     {var n=caml_ba_num_dims(a),d=caml_make_vect(n,0),_dc_=n - 1 | 0,_db_=0;
      if(! (_dc_ < 0))
       {var i=_db_;
        for(;;)
         {var _dd_=runtime.caml_ba_dim(a,i);
          caml_check_bound(d,i)[1 + i] = _dd_;
          var _de_=i + 1 | 0;
          if(_dc_ !== i){var i=_de_;continue}
          break}}
      return d}
    function size_in_bytes(arr)
     {var
       _c8_=dims(arr),
       _c9_=1,
       _c__=
        fold_left$1(function(_da_,_c$_){return caml_mul(_da_,_c$_)},_c9_,_c8_);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c__)}
    var Genarray=[0,dims,size_in_bytes];
    function create$9(kind,layout){return caml_ba_create(kind,layout,[0])}
    function get$1(arr){return runtime.caml_ba_get_generic(arr,[0])}
    function set$0(arr)
     {var _c6_=[0];
      return function(_c7_){return runtime.caml_ba_set_generic(arr,_c6_,_c7_)}}
    function size_in_bytes$0(arr)
     {return kind_size_in_bytes(caml_ba_kind(arr))}
    function of_value(kind,layout,v)
     {var a=create$9(kind,layout);caml_call1(set$0(a),v);return a}
    function create$10(kind,layout,dim)
     {return caml_ba_create(kind,layout,[0,dim])}
    function size_in_bytes$1(arr)
     {var _c5_=caml_ba_dim_1(arr);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c5_)}
    function slice(a,n)
     {var match=runtime.caml_ba_layout(a);
      return 0 === match?caml_ba_slice(a,[0,n]):caml_ba_slice(a,[0,n])}
    function of_array(kind,layout,data)
     {var
       ba=create$10(kind,layout,data.length - 1),
       ofs=0 === layout?0:1,
       _c3_=data.length - 1 - 1 | 0,
       _c2_=0;
      if(! (_c3_ < 0))
       {var i=_c2_;
        for(;;)
         {runtime.caml_ba_set_1
           (ba,i + ofs | 0,caml_check_bound(data,i)[1 + i]);
          var _c4_=i + 1 | 0;
          if(_c3_ !== i){var i=_c4_;continue}
          break}}
      return ba}
    function create$11(kind,layout,dim1,dim2)
     {return caml_ba_create(kind,layout,[0,dim1,dim2])}
    function size_in_bytes$2(arr)
     {var _c0_=caml_ba_dim_2(arr),_c1_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c1_),_c0_)}
    function slice_left(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$0(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       ba=create$11(kind,layout,dim1,dim2),
       ofs=0 === layout?0:1,
       _cV_=dim1 - 1 | 0,
       _cU_=0;
      if(! (_cV_ < 0))
       {var i=_cU_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array2_of_array_non_rectangular_data);
          var _cX_=dim2 - 1 | 0,_cW_=0;
          if(! (_cX_ < 0))
           {var j=_cW_;
            for(;;)
             {runtime.caml_ba_set_2
               (ba,i + ofs | 0,j + ofs | 0,caml_check_bound(row,j)[1 + j]);
              var _cZ_=j + 1 | 0;
              if(_cX_ !== j){var j=_cZ_;continue}
              break}}
          var _cY_=i + 1 | 0;
          if(_cV_ !== i){var i=_cY_;continue}
          break}}
      return ba}
    function create$12(kind,layout,dim1,dim2,dim3)
     {return caml_ba_create(kind,layout,[0,dim1,dim2,dim3])}
    function size_in_bytes$3(arr)
     {var
       _cR_=runtime.caml_ba_dim_3(arr),
       _cS_=caml_ba_dim_2(arr),
       _cT_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul
                (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_cT_),_cS_),
               _cR_)}
    function slice_left_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_right_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_left_2(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right_2(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$1(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       dim3=
        0 === dim2
         ?0
         :caml_check_bound(caml_check_bound(data,0)[1],0)[1].length - 1,
       ba=create$12(kind,layout,dim1,dim2,dim3),
       ofs=0 === layout?0:1,
       _cJ_=dim1 - 1 | 0,
       _cI_=0;
      if(! (_cJ_ < 0))
       {var i=_cI_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array3_of_array_non_cubic_data);
          var _cL_=dim2 - 1 | 0,_cK_=0;
          if(! (_cL_ < 0))
           {var j=_cK_;
            for(;;)
             {var col=caml_check_bound(row,j)[1 + j];
              if(col.length - 1 !== dim3)
               invalid_arg(cst_Bigarray_Array3_of_array_non_cubic_data$0);
              var _cO_=dim3 - 1 | 0,_cN_=0;
              if(! (_cO_ < 0))
               {var k=_cN_;
                for(;;)
                 {runtime.caml_ba_set_3
                   (ba,
                    i + ofs | 0,
                    j + ofs | 0,
                    k + ofs | 0,
                    caml_check_bound(col,k)[1 + k]);
                  var _cQ_=k + 1 | 0;
                  if(_cO_ !== k){var k=_cQ_;continue}
                  break}}
              var _cP_=j + 1 | 0;
              if(_cL_ !== j){var j=_cP_;continue}
              break}}
          var _cM_=i + 1 | 0;
          if(_cJ_ !== i){var i=_cM_;continue}
          break}}
      return ba}
    function array0_of_genarray(a)
     {return 0 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array0_of_genarray)}
    function array1_of_genarray(a)
     {return 1 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array1_of_genarray)}
    function array2_of_genarray(a)
     {return 2 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array2_of_genarray)}
    function array3_of_genarray(a)
     {return 3 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array3_of_genarray)}
    function reshape_0(a){return caml_ba_reshape(a,[0])}
    function reshape_1(a,dim1){return caml_ba_reshape(a,[0,dim1])}
    function reshape_2(a,dim1,dim2){return caml_ba_reshape(a,[0,dim1,dim2])}
    function reshape_3(a,dim1,dim2,dim3)
     {return caml_ba_reshape(a,[0,dim1,dim2,dim3])}
    var
     Stdlib_bigarray=
      [0,
       float32,
       float64,
       complex32,
       complex64,
       int8_signed,
       int8_unsigned,
       int16_signed,
       int16_unsigned,
       int$2,
       int32$1,
       int64$1,
       nativeint$1,
       char$0,
       kind_size_in_bytes,
       c_layout,
       fortran_layout,
       Genarray,
       [0,create$9,caml_ba_change_layout,size_in_bytes$0,get$1,set$0,of_value],
       [0,create$10,caml_ba_change_layout,size_in_bytes$1,slice,of_array],
       [0,
        create$11,
        caml_ba_change_layout,
        size_in_bytes$2,
        slice_left,
        slice_right,
        of_array$0],
       [0,
        create$12,
        caml_ba_change_layout,
        size_in_bytes$3,
        slice_left_1,
        slice_right_1,
        slice_left_2,
        slice_right_2,
        of_array$1],
       array0_of_genarray,
       array1_of_genarray,
       array2_of_genarray,
       array3_of_genarray,
       caml_ba_reshape,
       reshape_0,
       reshape_1,
       reshape_2,
       reshape_3];
    caml_register_global(777,Stdlib_bigarray,"Stdlib__bigarray");
    return}
  (function(){return this}()));
