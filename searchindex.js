Search.setIndex({docnames:["architecture","index","installation","optimization","parallel","reference/comp","reference/conf","reference/fft","reference/interaction","reference/interpolation","reference/logger","reference/models","reference/opt","reference/runner","reference/states","reference/util","walkthrough"],envversion:50,filenames:["architecture.rst","index.rst","installation.rst","optimization.rst","parallel.rst","reference/comp.rst","reference/conf.rst","reference/fft.rst","reference/interaction.rst","reference/interpolation.rst","reference/logger.rst","reference/models.rst","reference/opt.rst","reference/runner.rst","reference/states.rst","reference/util.rst","walkthrough.rst"],objects:{"peri.comp.comp":{Component:[5,2,1,""],ComponentCollection:[5,2,1,""],ParameterGroup:[5,2,1,""]},"peri.comp.comp.Component":{execute:[5,1,1,""],exports:[5,1,1,""],get:[5,1,1,""],get_padding_size:[5,1,1,""],get_update_tile:[5,1,1,""],initialize:[5,1,1,""],nopickle:[5,1,1,""],register:[5,1,1,""],set_shape:[5,1,1,""],set_tile:[5,1,1,""],trigger_parameter_change:[5,1,1,""],trigger_update:[5,1,1,""]},"peri.comp.comp.ComponentCollection":{exports:[5,1,1,""],get:[5,1,1,""],get_padding_size:[5,1,1,""],get_update_tile:[5,1,1,""],get_values:[5,1,1,""],initargs:[5,1,1,""],initialize:[5,1,1,""],nopickle:[5,1,1,""],set_shape:[5,1,1,""],set_tile:[5,1,1,""],set_values:[5,1,1,""],setup_passthroughs:[5,1,1,""],split_params:[5,1,1,""],sync_params:[5,1,1,""],trigger_parameter_change:[5,1,1,""],update:[5,1,1,""]},"peri.comp.comp.ParameterGroup":{get_values:[5,1,1,""],initargs:[5,1,1,""],nopickle:[5,1,1,""],params:[5,0,1,""],set_values:[5,1,1,""],update:[5,1,1,""],values:[5,0,1,""]},"peri.comp.exactpsf":{ChebyshevPSF:[5,2,1,""],ExactLineScanConfocalPSF:[5,2,1,""],ExactPSF:[5,2,1,""],ExactPinholeConfocalPSF:[5,2,1,""],FixedSSChebPSF:[5,2,1,""]},"peri.comp.exactpsf.ExactLineScanConfocalPSF":{pack_args:[5,1,1,""],psffunc:[5,1,1,""]},"peri.comp.exactpsf.ExactPSF":{characterize_psf:[5,1,1,""],drift:[5,1,1,""],measure_size_drift:[5,1,1,""],pack_args:[5,1,1,""],psf_slice:[5,1,1,""],psffunc:[5,1,1,""]},"peri.comp.exactpsf.ExactPinholeConfocalPSF":{pack_args:[5,1,1,""],psffunc:[5,1,1,""]},"peri.comp.exactpsf.FixedSSChebPSF":{characterize_psf:[5,1,1,""]},"peri.comp.ilms":{BarnesStreakLegPoly2P1D:[5,2,1,""],LegendrePoly2P1D:[5,2,1,""],Polynomial2P1D:[5,2,1,""],Polynomial3D:[5,2,1,""]},"peri.comp.ilms.BarnesStreakLegPoly2P1D":{randomize_parameters:[5,1,1,""]},"peri.comp.objs":{PlatonicSpheresCollection:[5,2,1,""],Slab:[5,2,1,""]},"peri.comp.objs.PlatonicSpheresCollection":{add_particle:[5,1,1,""],param_particle:[5,1,1,""],param_particle_pos:[5,1,1,""],param_particle_rad:[5,1,1,""],param_radii:[5,1,1,""],remove_particle:[5,1,1,""],update:[5,1,1,""]},"peri.comp.objs.Slab":{rmatrix:[5,1,1,""]},"peri.comp.psfs":{AnisotropicGaussian:[5,2,1,""],AnisotropicGaussianXYZ:[5,2,1,""],FromArray:[5,2,1,""],Gaussian4D:[5,2,1,""],IdentityPSF:[5,2,1,""],PSF4D:[5,2,1,""],PSF:[5,2,1,""]},"peri.comp.psfs.PSF4D":{rpsf_xy:[5,1,1,""],rpsf_z:[5,1,1,""]},"peri.conf":{create_default_conf:[6,4,1,""],get_conf_filename:[6,4,1,""],load_conf:[6,4,1,""],read_environment:[6,4,1,""],transform:[6,4,1,""]},"peri.fft":{load_wisdom:[7,4,1,""],save_wisdom:[7,4,1,""]},"peri.interpolation":{BarnesInterpolation1D:[9,2,1,""],ChebyshevInterpolation1D:[9,2,1,""]},"peri.interpolation.BarnesInterpolation1D":{__call__:[9,1,1,""]},"peri.interpolation.ChebyshevInterpolation1D":{__call__:[9,1,1,""]},"peri.logger":{Logger:[10,2,1,""]},"peri.logger.Logger":{add_handler:[10,1,1,""],noformat:[10,1,1,""],remove_handler:[10,1,1,""],set_formatter:[10,1,1,""],set_level:[10,1,1,""],set_verbosity:[10,1,1,""]},"peri.models":{ConfocalImageModel:[11,2,1,""],Model:[11,2,1,""]},"peri.models.Model":{check_consistency:[11,1,1,""],check_inputs:[11,1,1,""],diffname:[11,1,1,""],evaluate:[11,1,1,""],get_base_model:[11,1,1,""],get_difference_model:[11,1,1,""],map_vars:[11,1,1,""]},"peri.opt.addsubtract":{add_subtract:[12,4,1,""],add_subtract_locally:[12,4,1,""],feature_guess:[12,4,1,""]},"peri.opt.optimize":{LMAugmentedState:[12,2,1,""],LMEngine:[12,2,1,""],LMGlobals:[12,2,1,""],LMParticleGroupCollection:[12,2,1,""],LMParticles:[12,2,1,""],burn:[12,4,1,""],do_levmarq:[12,4,1,""],do_levmarq_all_particle_groups:[12,4,1,""],do_levmarq_particles:[12,4,1,""],finish:[12,4,1,""]},"peri.opt.optimize.LMEngine":{calc_J:[12,1,1,""],calc_accel_correction:[12,1,1,""],calc_grad:[12,1,1,""],calc_model_cosine:[12,1,1,""],calc_residuals:[12,1,1,""],check_completion:[12,1,1,""],check_terminate:[12,1,1,""],check_update_J:[12,1,1,""],do_internal_run:[12,1,1,""],do_run_1:[12,1,1,""],do_run_2:[12,1,1,""],find_LM_updates:[12,1,1,""],find_expected_error:[12,1,1,""],get_termination_stats:[12,1,1,""],reset:[12,1,1,""],update_Broyden_J:[12,1,1,""],update_J:[12,1,1,""],update_eig_J:[12,1,1,""],update_function:[12,1,1,""],update_param_vals:[12,1,1,""],update_select_J:[12,1,1,""]},"peri.runner":{finish_state:[13,4,1,""],link_zscale:[13,4,1,""],locate_spheres:[13,4,1,""],optimize_from_initial:[13,4,1,""]},"peri.states":{ImageState:[14,2,1,""],State:[14,2,1,""],load:[14,4,1,""],save:[14,4,1,""]},"peri.states.ImageState":{data:[14,0,1,""],get:[14,1,1,""],get_update_io_tiles:[14,1,1,""],model:[14,0,1,""],model_to_data:[14,1,1,""],set_image:[14,1,1,""],set_mem_level:[14,1,1,""],set_model:[14,1,1,""],update:[14,1,1,""],update_from_model_change:[14,1,1,""]},"peri.states.State":{build_funcs:[14,1,1,""],crb:[14,1,1,""],data:[14,0,1,""],error:[14,0,1,""],loglikelihood:[14,0,1,""],logposterior:[14,0,1,""],logprior:[14,0,1,""],model:[14,0,1,""],pop_update:[14,1,1,""],push_update:[14,1,1,""],residuals:[14,0,1,""],temp_update:[14,1,1,""],update:[14,1,1,""],update_hyper:[14,1,1,""],update_sigma:[14,1,1,""]},"peri.util":{Image:[15,2,1,""],NullImage:[15,2,1,""],ProgressBar:[15,2,1,""],RawImage:[15,2,1,""],Tile:[15,2,1,""],aN:[15,4,1,""],delistify:[15,4,1,""],indir:[15,4,1,""],listify:[15,4,1,""],oddify:[15,4,1,""],patch_docs:[15,4,1,""]},"peri.util.Image":{filtered_image:[15,1,1,""],set_filter:[15,1,1,""],set_tile:[15,1,1,""]},"peri.util.RawImage":{get_scale:[15,1,1,""],get_scale_from_raw:[15,5,1,""],load_image:[15,1,1,""],set_scale:[15,1,1,""]},"peri.util.Tile":{boundingtile:[15,5,1,""],center:[15,0,1,""],contains:[15,1,1,""],coords:[15,1,1,""],corners:[15,0,1,""],intersection:[15,5,1,""],kcenter:[15,0,1,""],kvectors:[15,1,1,""],oslicer:[15,1,1,""],overhang:[15,1,1,""],pad:[15,1,1,""],reflect_overhang:[15,1,1,""],slicer:[15,0,1,""],translate:[15,1,1,""],volume:[15,0,1,""]},"peri.viz.interaction":{OrthoManipulator:[8,2,1,""],OrthoPrefeature:[8,2,1,""],OrthoViewer:[8,2,1,""]},LMAugmentedState:{num_pix:[12,0,1,""],reset:[12,1,1,""]},LMEngine:{J:[12,0,1,""],JTJ:[12,0,1,""],_num_iter:[12,0,1,""],calc_accel_correction:[12,1,1,""],calc_grad:[12,1,1,""],calc_model_cosine:[12,1,1,""],check_completion:[12,1,1,""],check_termination:[12,1,1,""],damping:[12,0,1,""],decrease_damping:[12,1,1,""],do_internal_run:[12,1,1,""],do_run_1:[12,1,1,""],do_run_2:[12,1,1,""],find_LM_updates:[12,1,1,""],get_termination_stats:[12,1,1,""],increase_damping:[12,1,1,""],reset:[12,1,1,""],update_Broyden_J:[12,1,1,""],update_J:[12,1,1,""],update_eig_J:[12,1,1,""],update_param_vals:[12,1,1,""],update_select_J:[12,1,1,""]},LMGlobals:{num_pix:[12,0,1,""],reset:[12,1,1,""],set_params:[12,1,1,""]},LMParticleGroupCollection:{_kwargs:[12,0,1,""],do_internal_run:[12,1,1,""],do_run_1:[12,1,1,""],do_run_2:[12,1,1,""],particle_groups:[12,0,1,""],region_size:[12,0,1,""],reset:[12,1,1,""],stats:[12,0,1,""]},LMParticles:{param_names:[12,0,1,""],reset:[12,1,1,""],set_particles:[12,1,1,""]},peri:{conf:[6,3,0,"-"],fft:[7,3,0,"-"],logger:[10,3,0,"-"]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","method","Python method"],"2":["py","class","Python class"],"3":["py","module","Python module"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:attribute","1":"py:method","2":"py:class","3":"py:module","4":"py:function","5":"py:staticmethod"},terms:{"13th":16,"1e9":[12,13],"1gb":12,"2e2":12,"2e8":12,"2pi":5,"3sig":12,"4pi":16,"4th":5,"8th":0,"abstract":[0,7,11],"boolean":[0,5,9,12,13,14,15,16],"break":12,"byte":13,"case":[0,3,5,14,16],"char":15,"class":[1,3,5,8,9,10,11,14,15],"default":[0,2,3,5,6,8,9,11,12,13,14,15,16],"export":5,"final":[0,3,9,13,16],"float":[0,5,8,9,12,13,14,15],"function":[0,1,5,7,9,11,13,14,15,16],"import":[0,3,7,10,15,16],"int":[5,9,12,13,15,16],"long":[0,3,5,12,16],"new":[0,1,2,5,10,12,16],"null":13,"return":[0,3,5,9,12,13,14,15,16],"short":16,"static":15,"super":[0,5,14],"switch":[3,7,8,14,15],"throw":12,"true":[0,3,5,8,9,12,13,14,15,16],"try":[2,3,5,12,16],"var":6,"while":[0,1,3,12,15,16],Adding:1,Are:3,But:3,Doing:[3,13],For:[0,1,2,3,5,9,11,12,14,15,16],Has:[3,12],Not:12,One:[4,5,6,15,16],That:[0,3,11],The:[0,1,2,5,6,7,8,9,10,11,12,13,14,15,16],Then:[5,16],There:[3,5,8,12,16],These:[0,2,3,5,12,14,15,16],Use:5,Used:13,Using:[1,11],With:3,__call__:[0,9],__getinitargs__:5,__init__:[0,5,15],_a_lot_:12,_data:0,_fresh_j:12,_grad:14,_hess:14,_kwarg:12,_maxrad:12,_mindist:12,_minrad:12,_model:[0,14],_num_it:12,_residu:14,_tile_from_particle_chang:15,_update_frequ:12,_xpt:0,aberr:3,abil:3,abl:[0,3,16],about:[0,1,3,5,12,15,16],abov:[0,2,5,12,16],abs:0,abs_co:12,absolut:[8,12,15],acceler:[3,9,12],accept:[0,11,12],access:[2,8,16],accomplish:3,account:[14,16],accur:[0,3,12,16],accuraci:[3,14],achiev:[1,5],acquir:7,across:[1,5,10,11],act:0,activ:[0,5,12],actual:[0,3,5,6,10,11,13,14,15,16],actual_rad:3,adapt:0,add:[0,1,5,8,10,12,13,16],add_handl:10,add_particl:5,add_subtract:[3,12,13],add_subtract_loc:[3,12],add_subtract_misfeatured_til:12,added:[0,2,3,5,11,12],added_posit:[3,12],adding:[0,3,12],addit:[1,2,12,13,16],addition:[0,3,5],additional:3,addsub:3,addsubtract:[1,3,13],adequ:12,adjust:[12,16],advanc:0,affect:[0,5,14],after:[2,3,5,12,14,15,16],again:[3,5,12,16],aggress:12,algorithm:[1,12,16],all:[0,2,3,5,6,8,9,10,12,14,15,16],all_loop_valu:12,alll:12,allow:[0,3,5,6,12,15,16],almost:16,along:[0,2,3,5,12,13,15,16],alpha:[3,5],alreadi:[0,10,16],also:[0,2,3,5,11,12,16],altern:[2,3,12],alwai:[3,12,14,16],always_check_remov:12,amazingli:16,amazon:4,amazonaw:4,ambigu:14,ami:4,amount:[0,3,4,5,12,15,16],anaconda:2,analysi:16,analyz:[2,4,16],anew:[0,5],angl:[5,12,16],ani:[0,2,3,5,8,10,12,13,14,15,16],anisotrop:15,anisotropicgaussian:5,anisotropicgaussianxyz:5,anoth:[1,3,10,13],anyth:5,apertur:5,appear:[0,5],append:[3,12],appl:9,appli:[0,3,5,12,14,15],approach:3,appropri:[2,15],approxim:[0,3,5,9,12,13],apt:2,arang:[0,15],arbitrari:0,architectur:1,arcsin:5,area:[0,5],aren:16,areth:15,arg:[5,8,9,10,12,14,15],arg_dict:5,argument:[0,5,7,9,11,14,15],aris:16,around:[0,2,3,5,16],arr:15,arrai:[0,5,8,9,12,15],arrang:15,array_lik:15,artifact:16,arxiv:12,ascii:15,asid:3,ask:16,aspect:0,associ:[0,5,15],assum:[5,15],assumpt:5,attempt:[3,12],attr:11,attribut:[3,5,16],aug_stat:12,augment:[12,14],augmentedst:12,automat:[2,3,12,16],avail:[0,2,6,10],averag:9,avoid:[0,3,9,12,16],axes:[0,5],axi:[0,5],b_k:5,back:[0,3,14,16],background:[0,3,12,13,16],bad:[3,10,12,13,14,16],bar:15,bar_cap:15,bar_decim:15,bar_symbol:15,bare:12,barn:[5,9,16],barnes_clip_s:5,barnes_dist:5,barnesinterpolation1d:1,barnesstreaklegpoly2p1d:[5,16],base:[0,1,3,5,8,9,10,12,14],basic:[0,5],becaus:[0,3,12,16],becom:2,been:[11,12,14],befor:[0,3,4,11,12,13,16],begin:[0,5,16],behav:16,being:[3,5,12,15,16],belong:16,below:[3,12,14,16],benchmark:6,best:[0,1,7,12,13,16],better:[0,3,12,13,16],between:[0,3,5,7,8,9,12,14,15,16],bia:3,bid:4,bidispers:3,big:[3,12],bigger:12,bin:2,bit:[2,5,12,15,16],bkg:[11,12,16],blah:3,blank:16,blk:12,block:[9,12],blocksiz:9,blur:[0,16],blurri:16,bone:[0,5,8],bool:[5,9,12,13,15],bore:0,both:[3,5,11,12,15,16],bottom:[10,16],bound:[0,3,5,9,15,16],boundari:5,boundingtil:15,box:[15,16],brand:0,brew:2,briefli:[3,16],bright:[3,12,13,16],bring:16,broadcast:15,broyden:12,broyden_upd:12,broyden_update_frequ:12,bug:1,build:[2,7,14],build_func:14,burn:[0,1,3,13],cach:[0,5],calc:[3,12],calc_accel_correct:12,calc_grad:12,calc_j:12,calc_model_cosin:12,calc_residu:12,calcualt:12,calcul:[0,2,4,5,9,11,12,13,14,15,16],calculate_linescan_psf:5,calculate_state_radii_fluctu:[3,16],call:[0,3,5,7,10,12,14,16],callabl:9,camera:[5,15],can:[0,2,3,5,8,9,10,11,12,13,14,15,16],cannot:5,cantli:12,cap:15,captur:13,care:[0,3,14],carlo:0,categori:[0,5,11,14,16],catmap:14,caus:[3,9,12,16],caution:12,caveat:7,ceil:[0,5],center:[5,15],centroid:[3,12,13,16],certain:[0,3,5,10,12,15,16],certainli:3,chanc:3,chang:[3,4,5,9,12,13,14,15,16],changed_ind:12,charact:15,characterize_psf:5,chart:15,cheap:12,cheb_degre:5,cheb_ev:5,chebyshev:[5,9],chebyshevinterpolation1d:1,chebyshevpsf:5,check:[0,1,6,8,11,12,15],check_complet:12,check_consist:11,check_input:11,check_outside_im:12,check_rad_cutoff:12,check_termin:12,check_update_j:12,checkout:2,cheeseshop:2,child:10,chnage:14,chooos:12,choos:[3,12],chosen:16,chown:4,christoph:2,chunk:14,circular:0,claim:0,cleanest:16,click:[8,16],climat:9,clip:[5,9,12,15],clipsiz:9,clog:10,clone:2,close:[2,5,12],closer:[12,16],cloud:4,cluster:[3,4,12],clutter:10,cmap:[0,5,8],cmap_ab:8,cmap_dff:8,cmap_diff:8,code:[0,1,3,16],coeff:0,coeffici:[0,5],cohen:5,coher:5,collect:[0,3,5,12,16],collect_stat:12,color:[6,8,10,15],colorlog:10,colormap:8,com:[2,4],combat:3,combin:[0,3,5,11,14,15,16],come:[3,16],command:[2,6,16],commenc:12,comment:0,common:[0,2,5,15],commonli:3,commun:5,comp:[0,1,3,11,14,16],compar:[0,1,5,14,16],comparison:[0,14,15],compartment:0,compat:[0,2,5,11],compens:15,complement:15,complet:[3,8,11,12,15,16],complex:[0,3,16],complic:0,compon:[1,3,5,8,11,14,15,16],componentcollect:[0,5,14,16],compos:16,composit:5,comput:[0,5,9,15,16],conceptu:16,concret:16,condit:[0,3],conf:1,configur:[6,10],confoc:[1,5,11,14,16],confocaldyedparticlesmodel:16,confocalimagemodel:[11,14,16],confound:[0,5],consid:[0,5],consider:[3,4,12],consist:[11,16],consol:10,constant:[0,3,5,14],constitu:5,constrain:5,constraint:[0,14],construct:[14,16],constval:5,contain:[0,5,6,12,15,16],context:[10,14,15],continu:16,contrast:3,contribut:[1,5],control:[5,9,12],conveg:3,conveni:[0,3,5,12,16],converg:[3,9,12],convert:[5,15],convex:15,convolut:[0,5],convolv:5,coord:[0,15],coordin:[0,5,9,15],coorespond:[0,5],copi:[0,3,14],corner:[0,15],corr:12,correct:[3,5,9,12],correctli:16,correspond:[0,5,6,9,11,14],cosin:12,cost:[12,14],costol:12,could:[3,16],count:[12,16],counter:12,coupl:[0,3,16],covari:14,cover:5,coverslip:16,cramer:[0,3,16],crawl:12,crb:[0,14],creat:[0,1,2,3,5,10,12,14,15],create_default_conf:6,createvolum:4,critic:10,crop:15,cross:16,crutch:15,cubic:5,current:[0,1,2,3,5,10,12,14,15,16],curv:[0,3,5,12],custom:11,cut:[5,12,13],cutbyv:5,cutedgev:5,cutfallr:5,cutoff:[3,5],cutoffv:5,cutval:5,cyan:8,cycl:[3,8,12,16],d732f0b7:4,damp:[5,9,12],damped_jtj:12,dark:[3,12,13,16],data:[0,1,3,4,8,9,12,14,15,16],datapoint:0,dataset:16,datatyp:[5,15],deal:[0,3],debug:10,decent:12,decid:12,decim:[12,15],decreas:[3,12,13,16],decrease_damp:12,decrease_damp_factor:12,def:[0,5],default_conf:6,defin:[0,5,11,12,13,14,16],degeneraci:12,degre:[0,5,9],delet:12,deliber:12,delistifi:15,delta0:12,delta:[5,12],delta_err:12,delta_param:12,delta_v:12,delv:16,demo:16,demonstr:[0,16],denot:11,depend:[0,2,3,5],deprec:5,depth:[3,5],deriv:[0,3,11,12],desc:[3,12,13,14],descent:3,describ:[0,2,3,6,12,16],descript:[0,3,6,12,13,16],design:[3,12,13],desir:[1,2,9,12,14,15,16],desjardin:9,detail:[3,16],detect:5,detector:16,determin:[0,3,5,9,10,12,14,15],determinist:[0,5],develop:[0,2,16],deviat:[0,3,12,14,16],diagon:[12,14],dialog:16,diamet:13,dict:[0,5,11,12],dictionari:[0,5,11,12],diff_obj:11,differ:[0,3,5,8,11,12,13,14,15,16],differenc:12,difffer:16,difficult:[3,13],diffmap:11,diffnam:11,diffus:16,dim:15,dimens:[0,5,9,12,15,16],dimension:[0,1,5,9,12,15,16],direct:[0,3,5,12,16],directli:[0,5,12,16],directori:[12,14,15,16],disc:0,discard:12,discern:0,discuss:[3,16],displai:[6,10,15],dist:0,distanc:[5,9],distinct:0,distinguish:[3,16],distribut:[0,2,5,14,16],do_calc_s:12,do_correct_damp:12,do_internal_run:12,do_levmarq:[0,3,12],do_levmarq_all_particle_group:[3,12],do_levmarq_particl:[3,12],do_line_min:12,do_opt:12,do_pinhol:5,do_polish:3,do_run_1:12,do_run_2:12,doc:2,docstr:15,doctest:15,document:[3,4,12,15,16],doe:[0,3,5,9,12,13,14],doesn:[3,5,12,15,16],dofilt:13,dohist:8,doing:[3,12,13],doing_posit:12,domain:15,don:[2,3,8,12,15,16],done:[0,3,12,16],donorm:[5,9],doprint:0,dot:12,doubl:12,doubli:3,dowarn:12,down:[0,16],download:[0,2,16],draw:[0,5,16],draw_disc:0,drawn:5,drift:[3,5],dtype:15,due:[3,5,12,16],dump:6,dure:[5,12,14],dye:16,dyed:16,dynam:15,each:[0,3,5,6,9,11,12,14,15,16],earlier:0,easi:[0,3,8,16],easili:3,ec2:4,edg:[3,5,12,13,14],effect:[3,5,12,16],effort:6,eig_dl:12,eig_upd:12,eig_update_frequ:12,eigen:12,eigendirect:12,eigenvalu:12,eith:5,either:[3,5,6,12,15,16],elast:4,element:[0,5,12,13,14,15],ellipsi:15,els:[0,3],elucid:[],emax:15,embed:12,emin:15,empir:[3,16],emploi:[4,5,14],enabl:2,encount:2,encourag:3,end:[0,3,5,12,15],engin:12,enough:[3,12,16],ensur:[3,5,16],entir:[0,3,5,12],entri:12,enumer:0,env:6,environ:6,equal:15,equat:[0,9,11,14],err:12,error:[0,3,5,10,12,14,16],errtol:12,especi:3,essenti:[0,3,12,14],estim:[0,3,15],etc:[5,12,14,15],euler:[5,16],eval:[0,11],evalpt:9,evalu:[0,3,5,6,9,11,12],even:[1,3,5,10,15],ever:12,everi:[0,3,5,7,12],everyth:[3,12],everywher:5,exact:[3,5,16],exact_volum:5,exactli:3,exactlinescanconfocalpsf:5,exactpinholeconfocalpsf:5,exactpsf:[1,16],examin:[8,16],examine_unexplained_nois:16,exampl:[1,2,5,10,11,14,15,16],excel:3,except:[5,7,16],excess:9,exclud:[5,16],execut:[2,3,5,12],exp:[0,5],exp_err:12,expect:[0,3,12,14,16],experi:[3,5],experiment:[0,16],explain:16,explicitli:15,explor:0,exponenti:5,expos:5,exposur:15,express:0,exptol:12,extend:0,extent:[3,5],extra:[3,7,9,11,12,14],extract:[1,3,15],extrem:12,eye:16,facilit:[0,5],factor:[0,5,12],fail:[3,12],faint:16,fairli:3,fake:0,fals:[0,3,5,6,8,9,10,12,13,14,15,16],familiar:0,far:[3,12],fast:[5,6,7],faster:[1,2,3,6,7,12],fatal:10,featur:[1,2,3,8,9,12,13,15,16],feature_diam:3,feature_from_pos_rad:16,feature_guess:12,feature_rad:13,feel:0,few:[0,3,16],fft:[0,1,5,15],fftfreq:5,fftkwarg:[0,7],fftn:[0,5,7,15],fftnorm:0,fftshift:15,fftw:[6,7],fftw_estim:6,fftw_measur:6,fftw_patient:6,field:[0,3,5,8,13,14,15,16],field_reduce_func:5,fig:0,figsiz:8,figur:[0,8,16],file:[2,6,7,10,12,13,14,15,16],filenam:[6,14,15,16],fill:[14,15],filter:[12,13,15],filter_s:[3,9,12],filtered_imag:15,filters:9,find:[0,1,2,3,5,12,13,15,16],find_expected_error:12,find_lm_upd:12,finish:[1,3,13],finish_st:[3,13,16],finit:12,first:[0,2,3,5,6,12,15,16],fisherinform:14,fit:[1,5,12,13,14],fit_comp:16,fix:[3,5,12,16],fixedsscheb:16,fixedsscheblinepsf:16,fixedsschebpinholepsf:16,fixedsschebpsf:5,fixm:[0,5,16],flag:[3,12],flat:[0,15,16],flatten:14,flexibl:[0,15],float16:[5,14,15],float32:[5,14,15],float64:[5,12,14,15],float_precis:[5,15],fluctuat:3,fluid:16,fluoresc:16,focal:16,focus:5,follow:[0,2,5,12,15,16],form:[0,5,10,15,16],format:[0,1,5,9,10,14,15],formatt:10,forth:3,forward:5,found:[2,3,10,12,16],fourier:[3,5,8,15,16],frac_err:12,fraction:[5,12,16],fractol:[3,12],frame:[3,16],framework:[0,5,16],freeli:16,frequenc:[12,15,16],frequent:[0,3,12,13],fresh:15,from:[0,1,2,3,5,7,10,12,13,14,15],fromarrai:5,full:[0,3,5,11,12],fulli:3,func:[0,5,9,15],funcnam:11,further:12,futur:7,gamma:5,gaussian4d:5,gaussian4dpoli:11,gaussian:[0,3,5,12,16],gaussiandiscmodel:1,gaussiandiscmodelopt:[],gaussianmomentexpans:11,gca:0,gener:[0,1,3,5,7,12,14,16],geodes:12,geometr:12,get:[0,2,3,5,9,11,12,13,14,15,16],get_base_model:11,get_co:12,get_conf_filenam:6,get_difference_model:11,get_histogram:0,get_imag:16,get_initial_featur:16,get_num_px_jtj:12,get_padding_s:[0,5],get_param:5,get_particles_featur:[3,16],get_scal:15,get_scale_from_raw:15,get_termination_stat:12,get_update_io_til:14,get_update_til:[0,5],get_valu:[0,5,16],getchild:10,getext:5,git:2,github:2,give:[0,3,5,9,15],given:[0,2,5,8,12,14,15],glass:5,global:[0,3,6,10,12,13],global_stat:12,global_zscal:5,globalscalar:[0,16],glycerol:5,goal:3,gohlk:2,good:[1,5,12,13],good_particl:16,gotten:16,grab:[0,5],grad:12,gradient:[0,12,14],gradmodel:[0,14],great:0,greatli:13,greys_r:8,grid:5,grossest:16,group:[0,3,5,12,14,15,16],guess:[1,2,8,12],hadn:0,half:[0,5,12,13,15],hand:14,handler:10,happen:[0,5],hard:0,has:[0,3,5,6,8,11,12,14,16],have:[0,2,3,5,12,14,15,16],haven:[3,16],hdet:5,heart:16,heavili:8,heed:3,height:[5,16],help:[0,2,5,12],helper:5,henc:13,here:[0,2,3,6,14,16],hessian:[0,12,14],hessmodel:14,heurist:[4,12,16],high:[1,9,12,16],higher:[3,12],highest:[2,12],highli:3,hinder:0,hint:5,hit:16,hold:0,home:15,horizont:[0,8],host:[2,4],hotkei:8,how:[0,1,2,3,5,9,11,12,14,16],howev:[0,2,3,12,16],html:4,http:[2,4],huge:12,human:[0,16],hyper:[0,14],hyper_param:[0,14],hyper_valu:[0,14],hyperrectangl:15,idea:16,ideal:[0,12,14],ident:[5,7,12],identifi:[3,12,13,16],identify_misfeatured_region:12,identii:12,identitypsf:5,iff:12,ifftn:[0,5,7],ignor:3,illumin:[3,5,11,13,14,16],ilm:[1,3,12,15,16],im_change_frac:12,im_nam:3,imag:[1,2,5,8,11,12,13,14],image_arrai:7,imagest:[1,3,5,12,13,16],img:0,imperfect:[3,16],implement:[0,1,3,5,9,12,16],impract:3,improperli:12,improv:[1,3,12],imshow:[0,5,8],inaccur:3,includ:[0,2,3,5,11,12,14,15,16],include_rad:[3,12],incom:5,incomplet:[3,16],incorpor:[0,3,5,12],incorrect:[3,9,16],increas:[3,12,13],increase_damp:12,increase_damp_factor:12,increment:12,incsiz:8,ind:5,independ:[0,5],index:[1,3,4,5,9,12,14],indic:[5,6,12,14,15],indir:15,individu:[0,3,12],inexact:3,infer:0,infix:13,influenc:0,info:10,inform:[0,1,3,10,12,14,15],inherit:[0,5],init:[0,5],initarg:5,initi:[0,1,2,5,7,8,12,13,14,15,16],initial_count:12,inner:[0,5,14,15],input:[0,9,11,12,13,14],insert:0,insid:[12,16],instal:[1,16],instanc:[0,3,4,12,16],instead:[3,5,12,15,16],insuffici:[3,12],int8:15,integ:[5,9,14,15],integr:5,intens:[13,16],inter:5,interact:[1,3,16],interest:[0,5],interfac:[0,5,7,10],interior:[0,5,15],intermitt:13,intern:[3,12,13,14,15],interpol:[1,5,16],interpret:16,intersect:15,intial:12,introduct:1,invent:1,invers:15,invert:[3,12,13,15],isn:[3,16],issu:1,item:[0,15],iter:[3,5,9,12,15],its:[0,2,3,5,12,16],itself:[0,5,6,16],jacobian:[0,12],job:[12,16],join:[0,5],json:[6,16],jtj:[0,12],judici:12,just:[0,3,5,12,16],k_dist:5,kcenter:15,keep:[0,3,5,12,14,16],kei:[5,6,8,10,11,12],kept:12,key_nam:6,keyword:[8,12,13],kfki:5,knew:3,know:[0,3,5,16],knowledg:[0,7],known:13,koch:9,kocin:9,kpsf:5,kvector:[0,15],kwarg:[0,5,8,10,11,12,13,14],kwd:[10,14,15],l_k:5,label:[0,15],lambda:5,landscap:[12,16],larg:[3,5,9,12,16],larger:[3,12],laser:[3,5,16],laser_wavelength:5,last:[3,9,12,14,15,16],later:[0,3,5,6,12,13,15],lattic:5,layer:[0,5],least:[0,3,11,12],leav:[0,15,16],left:[15,16],leg:13,legend:0,legendr:[5,16],legendrepoly2p1d:[5,16],legpoli:5,len:[0,3,5],length:[9,15],lerp:5,less:[3,12,16],let:[0,5,16],level:[0,3,6,10,14,16],levenberg:[0,3,12],lie:16,light:[5,16],like:[3,5,8,12,15,16],likelihood:[0,14],likewis:16,limit:[0,1,12,15],linalg:12,line:[1,2,5,6,12,16],line_stat:12,linear:12,linemin:12,linepsf:16,liner:16,linescan:5,link:[2,13,16],link_zscal:[13,16],linspac:0,linux:2,list:[0,2,5,8,10,11,12,14,15,16],listifi:15,live:6,lmaugmentedst:[3,12],lmengin:[3,12],lmfunction:12,lmglobal:[3,12],lmoptobj:12,lmparticl:[3,12],lmparticlegroupcollect:[3,12],load:[1,3,6,7,12,15,16],load_conf:6,load_imag:15,load_wisdom:7,loadabl:16,loc:0,local:[0,3,5,12,13],local_upd:5,locat:[3,5,6,9,12,15],locate_spher:[13,16],log10:0,log:[0,2,3,6,10,12,14],logfilenam:10,logger:[1,2],logist:5,loglikelihood:14,logposterior:14,logprior:[0,14],logtofil:10,longer:[3,4,6],look:[0,3,8,15,16],loop:[3,12],loop_valu:12,lot:[3,9,15,16],low:13,lower:[3,12],lowest:0,lstsq:12,lunch:16,mac:2,machin:[2,7],macport:2,made:[3,6,11,16],mai:[0,2,5,6,12,15],main:[1,16],make:[0,1,2,3,5,9,11,12,14,15],manag:[14,15],mani:[0,3,4,5,9,11,12,15,16],manifold:12,manipul:16,manner:0,manual:5,map:[0,11,15],map_var:11,marquadt:12,marquardt:[0,3,12],marquardt_damp:12,mask:[12,16],mass:[5,12,13],masscut:[12,13],match:[0,14],mathemat:1,matplotlib:[0,2,3,8],matrix:[0,5,9,12],matter:3,max:[0,12,15],max_accel_correct:12,max_allowed_remov:12,max_it:12,max_mem:[12,13],max_npart:[3,12],max_rad:[3,12,13],max_radius_chang:5,maxim:[3,16],maximum:[3,5,12,13,15,16],mayb:[5,10,14],mdl:[0,14,16],mean:[0,12,13,14,16],measur:[3,12,14,16],measure_size_drift:5,measurement_iter:5,med:14,median:[3,12,13],medium:4,mem:[9,14],mem_level:14,member:[0,5,14,15],memori:[3,5,9,12,13,14,15],mention:[0,3],mesh:15,messag:10,met:3,meteor:9,method:[0,3,4,5,9,12,13,15,16],methodolog:16,microscop:[0,1,3,5,11,13],middl:3,might:[0,3,5,12,16],million:3,mimic:5,min:[0,15],min_derr:12,min_edge_dist:12,min_eigv:12,min_rad:[3,12,13],min_redund:12,minim:[3,10,12],minimum:[3,12,13,14,15],minmass:[3,12,13],mire:16,mis:[3,12],miscellan:15,misfeatur:12,mismatch:5,miss:[1,12,16],mistak:12,mixtur:5,mock:15,mode:[3,8,12,16],model:[1,3,5,8,12,14,15],model_as_data:14,model_to_data:14,modelstr:[0,11],moder:[9,16],modern:2,modifi:[0,5,13],modul:[1,3,7,9,16],monochromat:5,monodispers:13,monolith:[],mont:0,more:[0,1,5,6,10,12],moreov:3,most:[0,2,3,5,12,16],move:[3,5,8,14,16],movi:[3,16],much:[2,3,5,12],multidimension:0,multipl:[3,12,14,16],multipli:16,must:[0,2,5,7,9,12,14],n2n1:5,n_ad:12,n_loop:[3,12],name:[0,2,3,4,5,6,10,11,12,14,16],natur:[0,5,16],navig:8,ndarrai:[0,5,8,9,12,13,14,15,16],nearest:5,nearli:[2,3],necessari:[0,3,5,14,15],necessarili:[0,5],need:[0,2,3,4,5,9,12,14,15,16],neg:0,neighbor:0,neighborlist:14,nest:5,new_damp:12,new_ilm:16,new_model:16,new_param_nam:12,new_particl:12,new_pos:12,new_psf:16,new_val:12,newmodel:14,next:[0,15,16],nkpt:5,noformat:10,nois:[0,3,12,14,15,16],noisi:0,nomin:16,non:[0,12,15,16],none:[0,3,5,8,9,10,11,12,13,14,15],nonlinear:[0,12],nopickl:5,noraml:5,norm:[0,15],normal:[0,3,5,12,15,16],note:[3,5,12,13,14,15],noth:12,notic:16,notifi:5,now:[0,1,3,5,12,14,16],npart:12,npt:[5,16],npy:16,nth:12,nuanc:3,nullimag:[0,15],num:[0,15],num_ad:3,num_chang:3,num_eig_dir:12,num_it:12,num_pix:12,number:[0,3,5,6,9,12,14,15,16],numer:[3,5,12,13,16],numpi:[0,2,3,5,7,8,12,15,16],obj:[1,11,16],obj_add_particl:5,obj_get_posit:16,obj_get_radii:16,object:[0,5,7,8,10,11,12,13,14,15,16],obtain:3,obviou:5,obvious:3,occasion:[3,12],occupi:[0,5,12],occur:12,odd:[5,12,15],oddifi:15,off:[0,3,15,16],offici:2,offset:[0,5,16],often:[0,3,4,13],oftern:3,old:[3,5,9,12],old_ilm:16,oldmodel:14,omit:3,onc:[0,3,9,12,16],one:[0,2,3,5,7,8,10,11,12,14,15,16],ones:[0,6,16],onesid:8,onli:[0,2,3,5,9,10,12,14,15,16],onto:[2,12],open:[12,14,16],oper:[0,5,12,15],operand:[0,14],opposit:15,opt:[0,1,3,13,16],opt_kwarg:12,optic:[0,5,16],optim:[1,5,8,13,14,16],optimize_from_initi:[13,16],option:[0,3,5,6,8,9,10,12,13,14,15,16],order:[0,1,2,3,5,10,12,13,14,16],ordereddict:[0,5],org:2,orient:[8,16],origin:[0,12],orthogon:16,orthomanipul:[1,8,16],orthoprefeatur:[8,16],orthoview:[3,8,16],oslic:15,other1:5,other2:5,other:[0,3,5,11,12,13,15,16],otherwis:[3,13,14,15],our:[0,3,16],ourselv:0,out:[0,2,3,12,13,14,15,16],outer:15,outgo:5,outlin:0,output:[0,9,11,14,15],outsid:[3,12,16],over:[0,3,5,9,12,16],overal:[0,3,5],overflow:15,overhang:15,overhead:9,overkil:[3,16],overlai:16,overlap:[12,14],overnight:3,overrid:[0,5,14],overridden:15,overview:1,overwrit:0,own:[2,5,12,16],pack:[5,16],pack_arg:5,packag:[1,2,3,6,10,16],pad:[0,5,12,14,15],page:1,pair:[0,5,15],panel:[3,8],paper:[3,12,16],parallel:3,param:[0,3,5,14,16],param_:5,param_nam:12,param_particl:5,param_particle_po:5,param_particle_rad:5,param_prefix:5,param_radii:5,param_v:12,paramet:[0,1,3,5,8,9,10,11,12,13,14,15],parameter:16,parameter_nam:[0,5],parameter_valu:[0,5],parametergroup:[5,14],paramt:3,paramtol:12,parent:[5,12,15],part:[0,5,12,14,15,16],part_col:8,partial:[11,12],partial_log:12,partial_update_frequ:12,particl:[0,1,5,8,12,13,14,16],particle_group:12,particle_posit:16,particle_radii:16,particle_stat:12,particular:[0,2,5,6,11,14,15,16],particularli:[0,1],pass:[0,3,5,7,9,11,12,13,14,15,16],patch:5,patch_doc:15,path:[2,14,15],patient:16,pattern:0,peak:[0,5,15],per:12,percent:3,percentag:[5,15],perfect:[3,12,16],perform:[0,2,5,9,11,12,14,15],perhap:16,peri:[0,2,3],peri_:6,peri_conf_fil:6,peri_fftw_thread:6,period:[13,15],permiss:4,pertain:[],phi:5,philosophi:0,photobleach:3,physic:[1,5,12,16],pick:[12,13,16],pickl:[5,14],pickleabl:14,piec:[],pillow:2,pinhol:5,pinhole_width:5,pip:2,pixel:[0,3,5,8,12,13,15,16],pkl:[6,14],place:[3,5,13,15],plan:6,plane:[0,5,12],platform:2,platon:[0,5,14,16],platonicspherescollect:[5,11,16],pleas:[2,3],plot:[0,3,8,16],plt:3,point:[0,1,3,5,9,11,12,14,16],point_spread_funct:16,polar:5,polar_angl:5,poli:[5,13],polish:[3,12],polychromat:5,polydispers:0,polyfitst:1,polynomi:[0,5,9,12,13,16],polynomial2p1d:5,polynomial3d:5,polyv:0,poor:[2,3,12],poorli:[3,12],pop:14,pop_upd:14,portion:[3,15],pos:[0,5,8,16],posit:[0,1,3,5,8,9,12,13],possibl:[0,1,2,5,6,10,12,13,15,16],posterior:14,power:3,pparam:0,practic:12,pre:[8,10,12],precis:[1,5,15],precomput:[5,15],preferr:[0,14],prematur:12,prepar:14,prepare_for_st:14,preprint:12,present:[7,10,14],press:[3,8],pretti:[3,10,16],prevent:12,previou:[0,12],previous:[3,16],primari:1,prime:7,principl:12,print:[0,10,16],prior:[0,5,14],prioriti:6,prob:14,probabl:3,probbali:3,problem:[0,3,16],proce:[0,12],procedur:[0,14],process:[1,15],prod:5,produc:0,product:2,progress:[15,16],progressbar:15,project:12,proper:[0,5,15],properli:[0,2],properti:[1,5,14,16],proport:12,protocol:[3,16],provid:[0,2,3,4,5,6,11,14,15,16],psf4d:5,psf:[0,1,3,11,12,13,14,15,16],psf_slice:5,psfcalc:5,psffunc:5,ptp:5,pull:[3,16],pure:15,push:14,push_upd:14,put:15,pxsize:5,pyfftw:[2,7],pypi:2,pyplot:[0,3],python:[2,16],pythonpath:2,quadrat:[3,12],qualiti:[8,16],quantiti:1,quick:[1,16],quickest:2,quickli:16,quiet:10,rad:[0,3,5,12,16],radian:5,radii:[0,1,3,5,12,13],radiu:[3,5,12,13,16],rais:12,ran:12,rand:0,randn:0,random:[0,3,5],randomize_paramet:5,randomli:12,rang:5,rank:12,rao:[0,3,16],rapidli:16,rather:[0,9,12,16],ratio:[5,16],rattl:0,rattle_and_fit:0,raw:[0,10,14,15,16],rawimag:[1,5,14,16],rcond:12,rdbu:8,rdbu_r:0,reach:2,read:[6,15,16],read_environ:6,readabl:[0,16],readi:16,real:[0,5,13,14,15,16],realist:3,realiti:3,realiz:16,realli:[11,16],reason:[1,4,16],recent:16,recommend:[2,11,12,14,15],reconstruct:[1,3,16],record:10,recreat:[1,14],reduc:5,reduce_add:5,reduce_conv:5,reduct:5,refer:[9,12],reflect:15,reflect_overhang:15,refract:3,region:[0,3,5,12,13,15,16],region_depth:12,region_s:12,regist:[5,16],registeri:5,registri:[0,11],reject:12,rel:[0,5,8,12,15],relat:16,relationship:16,releas:2,reli:[3,8],reliabl:16,remain:[5,12,15],remov:[3,5,8,10,12,13,15,16],remove_handl:10,remove_particl:5,removed_posit:[3,12],renam:5,repeat:[12,16],repeatedli:3,replac:[11,12],repo:2,report:2,repositori:2,repres:[0,5,11,15],represent:16,reproduc:0,requir:[0,2,5,9,11,12],rescal:[15,16],reset:12,residu:[3,8,12,13,14,15,16],resolv:2,resourc:4,respect:[0,3,5,11,14,15],rest:[3,12,14,16],result:[0,2,3,6,9,11,12,15],retriev:[0,5],reveal:3,rgba:8,right:[1,3,6,12,14,15,16],ring:16,risk:2,rmatrix:5,rod:16,rotat:[0,5,10],roughli:[3,16],routin:[0,5,14],rparam:0,rpsf:5,rpsf_xy:5,rpsf_z:5,rule:15,run:[0,1,2,6,12,13,16],run_length:[0,12],run_typ:12,runner:[1,16],rvec:[0,9],rz_order:[12,13],sacrif:1,sai:[3,15,16],said:3,same:[0,3,5,7,12,13,14,15,16],sampl:[0,1,5,13,14,16],sample_st:0,sampler:0,sane:0,satisfactori:12,save:[1,3,5,6,7,12,13,15,16],save_j:12,save_wisdom:7,savvi:3,scalar:[9,12,15],scale:[0,3,5,8,12,15],scan:[1,5,16],scanner:16,scheme:0,scipi:2,scratch:1,screen:[10,15,16],script:[2,16],search:1,second:[0,3,5,12,16],secondari:3,section:[0,3,4,5,12,14,16],see:[0,1,2,5,6,9,12,15,16],seed:0,seem:[0,3,5,16],seen:16,segment:0,select:[3,8,12,14,16],self:[0,5,8,12,14,15],semi:[],sens:[11,15],sensit:[0,12],sent:3,separ:[0,3,5,12,14,16],separate_psf:12,seri:[12,15,16],set:[0,1,2,3,5,8,9,10,11,12,13,14,15,16],set_filt:15,set_formatt:10,set_imag:14,set_level:10,set_mem_level:14,set_model:[14,16],set_param:12,set_particl:12,set_scal:15,set_shap:[0,5],set_til:[0,5,15],set_titl:0,set_valu:[0,5],set_verbos:10,set_xtick:0,set_ytick:0,sethna:12,settabl:5,setup:[0,2,5,14],setup_passthrough:5,sever:[0,3,5,10,12,16],shadow:[3,16],shape:[0,5,14,15],share:5,shift:[15,16],shortcut:16,should:[0,2,3,5,9,12,13,14,15,16],shouldn:[3,16],show:[0,16],show_deriv:0,show_jtj:0,shutdown:4,side:[0,5,8,15],sig:0,sigkf:5,sigma:[0,5,9,12,14],sigma_cutoff:[3,12],signatur:5,signifi:12,signific:16,significantli:[0,3,16],similar:[3,12,16],similarli:0,simpl:[0,3,5,10,15,16],simpli:[0,3,7,10,14],simplif:11,sinc:[0,3,4,5,7,10,12,13,14,15,16],sine:12,singl:[0,5,14,15,16],sink:0,size:[0,1,3,5,8,12,14,15,16],sizeabl:16,slab:[5,16],slice:[0,5,8,12,14,15],slicer:[0,14,15],slide:16,slight:12,slightli:[3,16],slip:5,slow:[3,12],slower:[3,12],slowli:[3,12],small:[0,1,12,15,16],small_confocal_imag:16,smaller:[3,13],smoothli:3,snippet:16,snr:5,softwar:1,solid:0,solvent:3,some:[0,3,5,8,11,12,16],somehow:3,someth:[0,3,5,10,12,14,15,16],sometim:[2,3,12,16],sore:3,sort:[9,12,16],sound:16,sourc:[0,1,5,6,7,8,9,10,11,12,13,14,15,16],space:[0,1,5,9,12,15,16],span:12,spatial:[0,5,14,16],special:16,specif:[0,3,5],specifi:[6,12,15],speed:[1,12,16],spend:16,spent:16,sph6_ab:5,sph:[5,16],sphere:[5,13,16],spherecollect:5,spheric:16,split:[3,5,15,16],split_param:5,spread:[0,3,5,11,14,16],sqrt:[0,15],squar:[0,3,12,14,16],sshmaster:4,stack:14,stage:0,standard:[0,3,7,10,12,14,15],start:[0,3,8,12,15,16],stat:12,state:[1,5,8,12,13,15],state_nam:3,state_v:3,statemak:16,statemaker_exampl:16,statist:12,std:[3,12],stem:16,step:[3,5,12,16],stick:3,stiff:12,still:[3,12,16],stop:[0,3,12,16],storag:[0,7],store:[0,3,5,6,8,12,14,15,16],str:[5,15],straight:5,streaki:16,strictli:[0,5],string:[0,5,8,10,11,12,13,14,15],stringent:16,strip:16,stripe:16,stripei:16,strong:[0,3],strongli:3,structur:[0,14,16],stuck:3,stuff:16,sub:12,subblock:12,subclass:[0,5,15],subsect:0,subsequ:6,subset:[3,12],subspac:12,subtract:[1,12,13,14,15],success:[12,13],successfulli:12,sudo:4,suffici:[3,16],suitabl:2,sum:[0,5,14,16],superclass:[0,5,12,15],supplement:[3,16],suppli:[0,5,11,12,14,15,16],support:[5,6,14],support_factor:5,support_pad:5,support_s:5,sure:[0,2,3,11],surer:3,suspens:3,suspici:3,svd:12,symbol:11,sync_param:5,syntax:5,system:[0,2,5,10,12],systemat:[3,16],tabl:0,tack:10,tag:2,take:[0,1,3,4,5,6,9,12,14,15],taken:[5,12],talk:0,tangent:12,task:15,technic:16,tedium:16,teeth:0,tell:[3,14,16],temp:12,temp_upd:14,tempfil:12,temporari:12,temporarili:[10,12,14],tend:3,tenth:3,term:[0,5,12],termin:[3,12],terribl:3,test:[3,15,16],test_genmodel:16,text:10,than:[0,3,4,7,9,12,13],thei:[0,3,6,12,15,16],them:[0,3,5,12,14,16],themselv:3,theoret:1,theori:15,therefor:[0,5,10],theta:5,thi:[0,1,2,4,5,7,8,9,10,11,12,13,14,15],thing:[3,5,10,14,16],think:3,third:[3,12],those:[0,12,14,15,16],though:16,thousand:[3,16],thread:6,three:[0,3,8,16],threshold:3,through:[0,2,3,7,8,12,14,16],throughout:[0,5],thu:16,thumb:3,tif:[3,15,16],tiffstack:16,tile:[0,1,3,5,12,14],tileinfo:5,time:[3,4,6,12,13,15,16],time_remain:15,tini:16,titl:0,tmp:15,togeth:[5,16],toler:5,tomorrow:16,ton:16,too:[3,12],tool:[2,3],tooltip:8,top:0,tortuou:12,total:[0,5,9,12],total_chang:12,touch:12,tough:[1,12],track:[0,3,5,14,16],tracker:2,trackpi:[2,12,13,16],trajectori:12,transfer:[5,15],transform:[3,6,11,15,16],translat:[0,6,11,15],translate_featur:[3,16],transtrum:12,transtrum_damp:12,treat:[3,16],tri:12,triangl:5,trick:3,trickier:12,trigger:[0,5],trigger_parameter_chang:5,trigger_upd:5,trim:[5,12],trim_edg:[12,13],troubl:[2,16],truli:16,truncat:15,tupl:[5,9,13,14,15,16],turn:14,twice:13,two:[0,3,8,9,12,15,16],type:[0,4,5,10,11,12,13,14,15,16],typic:[3,5,16],ubuntu:4,under:[5,11],understand:8,undo:[12,14],undo_decreas:12,uniform:[0,5,15],uniqu:[0,14],unit:[5,8,12,13],unitless:5,unlik:3,unpack:7,unpickl:5,unstabl:2,until:[0,3,5,12,16],updat:[0,5,11,12,14],update_broyden_j:12,update_derr:12,update_eig_j:12,update_from_model_chang:14,update_funct:12,update_hyp:14,update_j:12,update_j_frequ:12,update_param_v:12,update_select_j:12,update_sigma:14,upload:[2,4],upon:15,upward:5,usag:[0,14],use:[0,1,2,3,5,6,7,8,10,11,12,13,14,15],use_accel:12,use_j1:5,use_tp:[12,13],used:[0,1,3,5,9,11,12,14,15,16],useful:[2,3,12,15,16],user:[0,5,11,12,15],user_method:5,uses:[0,3,5,7,9,12,13,16],using:[0,1,2,3,5,9,11,12,14,15],usual:[0,3,12,16],util:[0,1,3,5,13,14,16],val:5,valid:[0,8,11,12],valu:[0,1,5,6,9,11,12,13,14,15,16],vari:[0,3,5,14,16],variabl:[0,2,5,6,11,12,14],varianc:16,variat:[0,3,11,13,16],varieti:[0,1,14,15],variou:[0,8,14],varmap:[0,11],vdwdata:4,vec:5,vector:[0,12,15],verbos:[2,6,10],veri:[0,1,2,3,5,9,16],version:[2,5,9,15,16],vertic:[0,8],via:[2,5,6],view:[3,8,12,15,16],viewer:[8,16],viewrad:[8,16],viz:[1,3,16],vmax:[0,5,8],vmin:[0,5,8],volum:[4,5,15],volume_error:5,vrange_diff:8,vrange_img:8,vvv:[6,10],vvvvv:10,wai:[0,2,3,5,12,13,16],walkthrough:[1,3],want:[2,3,5,12,14,16],warn:[3,10,12,15],water:5,wave:16,wavelength:[5,16],wavevector:5,webservic:4,websit:2,weight:9,well:[0,3,5,6,11,12,13,15,16],were:[3,12],weren:16,west:4,what:[1,3,5,12,15],whatev:[3,5,16],when:[0,1,5,11,12,13,15,16],where:[0,3,5,6,11,12,15,16],whether:[0,3,5,6,9,12,13,14,15,16],which:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16],whichev:12,white:[3,16],whole:16,whose:12,why:16,wide:5,width:[5,8],wildli:3,window:[2,8,9],wisdom:[6,7],wisdomfil:7,wise:16,wish:0,within:[0,5,14,15],without:[5,12,13,15,16],won:[0,16],word:16,work:[0,1,2,3,5,8,12,15,16],workhors:[3,12],worri:[3,16],worthwil:3,would:[3,7,12,14,16],wrap:14,wrapper:12,write:16,wrong:16,wrt:[0,11,14,15],xlabel:0,xrang:[0,3],xterm256:6,xtick:0,xyz:5,xyza:5,yes:15,yet:[0,12,16],yield:0,ylabel:0,you:[0,1,2,3,9,10,11,12,13,14,15,16],your:[1,2,3,5,7,12,13],ytick:0,zero:[0,12],zint:5,zip:0,zoffset:5,zorder:[5,16],zpo:[5,16],zrang:5,zscale:[3,5,13,16],zslab:5},titles:["Package architecture","Welcome to PERI&#8217;s documentation!","Installation","Optimization and sampling","Parallel image analysis","peri.comp","peri.conf","peri.fft","peri.viz.interaction","peri.interpolation","peri.logger","peri.models","peri.opt","peri.runner","peri.states","peri.util","PERI Walkthrough"],titleterms:{"class":[0,12],"function":[3,12],"new":3,AWS:4,Adding:3,The:3,Using:3,achiev:3,across:3,add:3,addit:3,addsubtract:12,algorithm:3,analysi:4,anoth:16,architectur:0,barebon:4,barnesinterpolation1d:9,best:3,blur:[],bug:2,burn:12,chebyshevinterpolation1d:9,check:[3,16],code:2,comp:5,compar:3,compon:0,componentcollect:[],comput:4,conf:6,contribut:2,creat:16,dimension:3,disc:[],document:1,even:16,exactpsf:5,exampl:0,extract:16,faster:16,fft:7,finish:12,fit:[0,3,16],format:16,from:16,gaussian:[],gaussiandiscmodel:0,gaussiandiscmodelopt:[],gaussianpsf:0,get:1,good:[3,16],guess:[3,16],high:3,ilm:5,imag:[0,3,4,15,16],imagest:[0,14],improv:16,indic:1,inform:16,initi:3,instal:2,interact:8,interpol:9,invent:3,issu:2,load:14,logger:10,main:3,make:16,mathemat:16,microscop:16,miss:3,model:[0,11,16],more:[3,16],obj:5,opt:12,optim:[0,3,12],orthomanipul:3,overview:0,packag:0,parallel:4,paramet:16,parametergroup:0,particl:3,peri:[1,5,6,7,8,9,10,11,12,13,14,15,16],platonicdisc:0,polyfitst:0,posit:16,possibl:3,precis:3,process:[3,16],properti:0,psf:5,quick:2,radii:16,rawimag:15,reason:3,refer:1,run:3,runner:[3,13],sacrif:3,sampl:3,save:14,scratch:16,see:3,small:3,sourc:2,space:3,speed:3,starclust:4,start:1,state:[0,3,14,16],subtract:3,tabl:1,take:16,thi:[3,16],tile:15,todo:2,tough:3,use:16,using:16,util:15,valu:3,viz:8,walkthrough:16,welcom:1,what:16,when:3,your:16}})